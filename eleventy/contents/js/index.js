global.elasticlunr = require('./elasticlunr.min.js');

(function (window, document) {
  "use strict";

  const search = (e) => {
    const results = window.searchIndex.search(e.target.value, {
      bool: "OR",
      expand: true,
    });

    const resEl = document.getElementById("searchResults");
    const noResultsEl = document.getElementById("noResultsFound");

    resEl.innerHTML = "";
    if (results) {
      noResultsEl.style.display = "none";
      results.map((r) => {
        const { id, title, category } = r.doc;
        const el = document.createElement("div");
				el.classList.add("search-item");
        resEl.appendChild(el);

        const h3 = document.createElement("h3");
        el.appendChild(h3);

        const a = document.createElement("a");
        a.setAttribute("href", id);
        a.textContent = title;
        h3.appendChild(a);

        const p = document.createElement("p");
        p.textContent = category;
        el.appendChild(p);
      });
    } else {
      noResultsEl.style.display = "block";
    }
  };

  fetch("/search-index.json").then((response) =>
    response.json().then((rawIndex) => {
			window.searchIndex = window.elasticlunr.Index.load(rawIndex);
      document.getElementById("searchField").addEventListener("input", search);
    })
  );
})(window, document);
