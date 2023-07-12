const fs = require("fs");
const path = require("path");
const fm = require("front-matter");


class SnippetExtractor {
	constructor(inputDirectoryPath, outputFile) {
		this.inputDirectoryPath = inputDirectoryPath;
		this.outputData = {};
		this.outputFile = outputFile;
	}

	getJavascriptVersion(content) {
		// Split the content into sections based on the '```' delimiter
		let sections = content.split("```");

		// Find the index of the 'JavaScript version' section
		let jsVersionIndex = sections.findIndex((section) => section.includes("**JavaScript version**"));

		// If we found the 'JavaScript version' section
		if (jsVersionIndex !== -1) {
			// The JS code should be in the next section
			let jsCodeSection = sections[jsVersionIndex + 1];

			// Check that this section exists and starts with 'js'
			if (jsCodeSection && jsCodeSection.startsWith("js")) {
				// The actual code will start after the 'js' and a newline
				return jsCodeSection.slice(jsCodeSection.indexOf("\n")).trim();
			}
		}

		// If we couldn't find the JS version or something went wrong, return an empty string
		return "";
	}

	renderSnippet = (snippet, prefix, description) => {
		// split lines by line-break and remove empty lines
		const separatedSnippet = snippet
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0)
			.map((line) => line.replace(/\$/g, "$$")); // escape $ with $$

		// Create the snippet object
		const snippetObject = {
			prefix: prefix,
			body: separatedSnippet,
			description: description,
		};

		// Return the snippet object
		return snippetObject;
	};

	extractSnippets() {
		fs.readdir(this.inputDirectoryPath, { withFileTypes: true }, (err, files) => {
			if (err) {
				console.error(err);
				return;
			}

			files.forEach((file) => {
				if (file.isDirectory()) {
					fs.readdir(path.join(this.inputDirectoryPath, file.name), { withFileTypes: true }, (err, innerFiles) => {
						if (err) {
							console.error(err);
							return;
						}

						innerFiles.forEach((innerFile) => {
							if (innerFile.isFile() && path.extname(innerFile.name) === ".md") {
								fs.readFile(path.join(this.inputDirectoryPath, file.name, innerFile.name), "utf8", (err, data) => {
									if (err) {
										console.error(err);
										return;
									}
									const content = fm(data);
									const title = content.attributes.title;

									const jsCode = this.getJavascriptVersion(content.body);

									const lines = jsCode.split("\n");
									const declarationLine = lines.find((line) => line.trim().startsWith("const") || line.trim().startsWith("let"));

									let prefix = "";
									if (declarationLine) {
										prefix = declarationLine.split(" ")[1].split(" =")[0];
									}

									const snippet = this.renderSnippet(jsCode, prefix, title);
									this.outputData[title] = snippet;

									fs.writeFile(this.outputFile, JSON.stringify(this.outputData, null, 2), "utf8", (err) => {
										if (err) {
											console.error(err);
										} else {
											console.log("JSON has been saved.");
										}
									});
								});
							}
						});
					});
				}
			});
		});
	}
}

const inputDirectoryPath = "./eleventy/contents";
const extractor = new SnippetExtractor(inputDirectoryPath, "./javascript.json");
extractor.extractSnippets();
