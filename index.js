const fetch = require('node-fetch-commonjs');
class Wikipedia {
    constructor(wikipedia = "en") {

        if (Object.values(wikiApp.availableWikipedia).includes(wikipedia)) {
            this.wiki = wikipedia;
        } else {
            console.error("Wiki Error:", "Wikipedia not found. Initializing Wikipedia [en]. Refer WP CODES from https://en.wikipedia.org/wiki/List_of_Wikipedias")
            this.wiki = "en";
        }

    }
    getArticle(title) {

        var wikipedia = this.wiki;
        if (!title) {
            return wikiApp.createErrorObj("Page title cannot be null.")
        }

        return fetch(
                `https://${wikipedia}.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var data = json
                var pages = data.query.pages;
                var wiki = pages[Object.keys(pages)[0]];

                var Obj = {
                    status: "success",
                    data: {
                        title: wiki.title,
                        content: wiki.extract,
                        id: wiki.pageid,
                        url: `http://${wikipedia}.wikipedia.org/?curid=` + wiki.pageid
                    }
                }

                var title = Obj.data.title;
                if (title === "Undefined" || title === undefined || Obj.data.content === undefined) {
                    Obj = wikiApp.createErrorObj(`Page with the title [${title}] does not exist`)
                }
                return Obj;
            })
            .catch((error) => {
                if (error) {
                    Obj = wikiApp.createErrorObj(error);
                    return Obj;
                }
            })
    }
    searchArticles(title) {
        var wikipedia = this.wiki;
        if (!title) {
            return wikiApp.createErrorObj("Page title cannot be null.")
        }

        return fetch(
                `https://${wikipedia}.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=revisions&list=search&srsearch=${title}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var data = json.query.search;
                var sResults = {};

                data.forEach(function(item) {
                    sResults[item.title] = {
                        title: item.title,
                        page: item.pageid,
                        words: item.wordcount,
                        snippet: wikiApp.stripHTML(item.snippet),
                        url: `http://${wikipedia}.wikipedia.org/?curid=` + item.pageid
                    }
                });
                var Obj = {

                    status: "success",
                    data: {
                        results: sResults,
                    }
                }

                return Obj;
            })
            .catch((error) => {
                if (error) {
                    Obj = wikiApp.createErrorObj(error);
                    return Obj;
                }
            })
    }
    getImages(title) {
        if (!title) {
            return wikiApp.createErrorObj("Page title cannot be null.")
        }

        return fetch(
                `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&format=json&prop=images&origin=*`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var data = json;

                var results = [];

                var pages = data.query.pages;

                if(pages[Object.keys(pages)[0]] = "-1"){
                    return wikiApp.createErrorObj(`Page with the title [${title}] does not exist`)
                }

                var x = pages[Object.keys(pages)[0]].images;


                x.forEach(function(item, intex) {
                    results.push(" https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/" + item.title + "&origin=*")
                });

                var Obj = {
                    page: Object.keys(pages)[0],
                    images: Object.assign({}, results)
                }

                return Obj
            })
            .catch((error) => {
                if (error) {
                    Obj = wikiApp.createErrorObj(error);
                    return Obj;
                }
            })
    }
    getOnThisDay(params = {}) {

        const today = new Date();
        var type = params.type || "events",
            day = params.day || today.getDate(),
            month = params.month || today.getMonth() + 1;

        if (type === "events" || type === "deaths" || type === "births") {} else {
            return wikiApp.createErrorObj(`Parameter Error - [${type}] is not a valid category [events/deaths/births]`)
        }

        if (wikiApp.isBetween(day, 0, 32) && wikiApp.isBetween(month, 0, 12)) {} else {
            return wikiApp.createErrorObj("Parameter Error - Parameter should be in the format (date [d], month [m]).\nExample (1, 12) which means December 1st")
        }

        return fetch(
                `https://cdn.jsdelivr.net/gh/harrify-apis/historyjs/${type}/${month}_${day}.json`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                var data = json;
                var Obj = {
                    date: data.date,
                    url: data.wikipedia,
                    type: type,
                    data: data[type]
                }

                return Obj;
            })
            .catch((error) => {
                if (error) {
                    Obj = wikiApp.createErrorObj(error);
                    return Obj;
                }
            })

    }
    getPDF(title) {
        var endpoint = `https://en.wikipedia.org/api/rest_v1/page/pdf/${title}`;
        return fetch(endpoint)
            .then(function(response) {
                return response.json();
            })
            .then(function() {
                return wikiApp.createErrorObj("Wiki Error: Page not found")
            })
            .catch(() => {
                return {
                    status: "success",
                    title: title,
                    url: endpoint
                }
    
            })
    }
}

const wikiApp = {
    createErrorObj(data) {
        var Obj = {
            status: "failed",
            data: data
        }
        console.error("Wiki Error /", data)
        return Obj;
    },
    stripHTML: function(html) {
        try {
            var div = document.createElement("div");
            div.innerHTML = html;
            return div.innerText;
        } catch {
            return html
        }
    },
    isBetween: function(x, a, b) {
        if (x > a && x < b) {
            return true
        } else {
            return false
        }
    },
    availableWikipedia: ["en", "fr", "de", "es", "ja", "ru", "pt", "zh", "it", "fa", "ar", "pl", "nl", "uk", "id", "he", "vi", "tr", "sv", "ko", "cs", "fi", "hu", "ca", "hi", "simple", "no", "bn", "th", "el", "ro", "da", "az", "sr", "bg", "ms", "et", "hr", "hy", "sk", "ml", "eu", "sl", "eo", "lt", "ta", "sq", "lv", "be", "gl", "ka", "ur", "kk", "mk", "uz", "te", "mr", "sh", "arz", "af", "bs", "ceb", "kn", "ha", "nn", "is", "la", "my", "sw", "ast", "tl", "jv", "ba", "as", "ckb", "azb", "si", "cy", "sco", "ne", "br", "tt", "als", "ga", "oc", "mn", "so", "gu", "pa", "ky", "war", "an", "ku", "dag", "lb", "tg", "bar", "km", "yo", "su", "min", "ps", "bcl", "pnb", "nds", "tk", "mg", "fy", "or", "ang", "hif", "io", "cv", "ce", "ht", "lmo", "wuu", "am", "ig", "yi", "qu", "bh", "ban", "mzn", "ary", "sah", "ia", "vec", "ace", "lo", "scn", "fo", "sa", "kw", "diq", "gn", "sd", "hyw", "eml", "ie", "rw", "mai", "szl", "vo", "ay", "sat", "co", "sc", "xmf", "new", "zu", "hsb", "lij", "os", "gd", "ak", "hak", "vls", "bi", "frp", "mt", "nap", "sn", "vep", "crh", "li", "pms", "ilo", "ks", "cdo", "nah", "bo", "wa", "pam", "myv", "mi", "frr", "bpy", "lad", "se", "fur", "gag", "smn", "pcd", "udm", "bug", "avk", "chr", "gan", "kv", "mhr", "tw", "kab", "mnw", "tcy", "ug", "ab", "ln", "lfn", "pap", "dty", "dz", "haw", "gv", "rue", "bjn", "cu", "szy", "bxr", "ny", "dv", "gor", "kl", "rn", "lld", "ext", "ksh", "ady", "av", "ch", "chy", "cr", "dsb", "kbp", "csb", "kg", "jbo", "mwl", "pdc", "rm", "shi", "iu", "mad", "nov", "arc", "tpi", "ts", "tyv", "zea", "shn", "glk", "mrj", "na", "nv", "nrm", "sm", "tet", "bm", "pag", "wo", "awa", "ff", "got", "inh", "krc", "kaa", "lbe", "lez", "pih", "xh", "fj", "jam", "kbd", "xal", "om", "ss", "tn", "rmy", "gom", "din", "ee", "ik", "olo", "mdf", "nqo", "ti", "lg", "nia", "koi", "ltg", "pnt", "to", "za", "skr", "ki", "stq", "st", "ty", "atj", "nso", "pi", "srn", "ve", "gcr", "pfl", "sg", "tum", "nostalgia"]
}

module.exports = Wikipedia;