import getData from "../utils/api.js";
import Parser from "../utils/parser.js";

class Search {
	constructor(obj = {}) {
		var language = obj.language ?? "en";

		this.language = language;
		this.base = `https://${language}.wikipedia.org`;
	}
	searchArticleByTitle(title, callback) {
		var base = this.base;
		var url = `${base}/w/api.php?format=json&action=query&origin=*&prop=revisions&list=search&srsearch=${title}`;

		getData(url, false, (data) => {
			var { error, data } = data;

			if (!error) {
				var obj = data.data.query;
				var sResults = {};
				obj.search.forEach(function (item) {
					sResults[item.title] = {
						title: item.title,
						page: item.pageid,
						words: item.wordcount,
						snippet: Parser.stripHTML(item.snippet),
						url: `${base}/?curid=` + item.pageid,
					};
				});

				var result = {
					success: true,
					data: {
						suggession: obj.searchinfo.suggestion,
						hits: obj.searchinfo.totalhits,
						results: sResults,
					},
				};
			} else {
				var result = error;
			}

			if (typeof callback === "function") {
				callback(result);
			}
		});
	}
}

export default Search;
