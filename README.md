![Wikifox JS v2](https://i.imgur.com/q7gpkQ3.png)

<h4 align="center">WikifoxJS is a light-weight, small, powerful and restful Javascript library which connects to Wikipedia API. This library can be used to get content from wikipedia. Real life use case 👉 <a href="https://wikifox.netlify.app">Wikifox</a></h4>

<p align="center">
  <a href="https://www.npmjs.com/package/wikifox"><img src="https://img.shields.io/npm/v/wikifox.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/wikifox"><img src="https://img.shields.io/npm/dm/wikifox.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

</p>

## 📃 Table Of Content

-   [💫 Whats New ?](#💫-whats-new--a-href"httpswwwnpmjscompackagewikifox"img-src"httpsimgshieldsionpmvwikifoxsvg"-alt"npm-version"a)
-   [✨ Features](#✨-features)
-   [⚒️ Installation](#⚒️-installation)
-   [⚙️ Usage](#⚙️-usage)
-   [🛡️ License](#🛡️-license)
-   [💪 Support](#💪-support)

## 💫 What's new ? <a href="https://www.npmjs.com/package/wikifox"><img src="https://img.shields.io/npm/v/wikifox.svg" alt="npm version"></a>

1. Moved from CommonJS to ES
2. Improved Stability
3. New features
    - Full page HTML
    - Improved Results
    - Validation

## ✨ Features

Wikifox has a bunch of features to access data from wikipedia. Wikifox is capable of doing the following things with ease:

-   🎃 Option to select specific wikipedia or language. Refer [Wikipedia Editions](docs/Wikipedia%20Editions.md) or [Language](docs/languages.md)
-   ✍️ Brief Summary about specific article. Not too small, but not too big!
-   📰 Full Summary about the article includes all information in the form of text from the article
-   🧑‍💻 Full Page data as HTML format. It gives you all the data in HTML format
-   🎲 Get random Random article
-   🖼️ Get the main picture/Thumbnail from a specific article
-   📷 All the images on an article. It gives all the images used in a specific article
-   📂 Full Article PDF. Provides link to download full articl ad PDF. Supports direct downloading.
-   🪴 Today in history give you information about the specific date
-   🔍 Search article by it's title. Also gives suggession and small snippet
-   🔬 Validate Article. Can be used to check if there is an article with the id or title
-   📃 List of available wikipedia

#### ⬆️ Upcoming features

-   Information about edits and revision
-   User information
-   🌟 WIKIFOX.PY moduule for python
    ! 🌟
-   And much more!

## ⚒️ Installation

You can easily install wikifox into your project with [npm](https://npmjs.com/package/wikifox) by pasting the following command in your terminal!

```bar
npm install wikifox
```

## ⚙️ Usage

In version 2, you can import modules separately according to your need. The available modules are as below. Just click it to see the detailed documentation on how to use it!

| module                             | Description                                                     | Methods                         | type     |
| ---------------------------------- | --------------------------------------------------------------- | ------------------------------- | -------- |
| **[Article](docs/articles.md)**    | To get information about a specific article                     | getSummary, getContent, getHTML | `class`  |
| **[Media](docs/media.md)**         | To get media and files from a specific article                  | getThumbnail, getImages, getPDF | `class`  |
| **[Search](docs/search.md)**       | Search articles by title                                        | getHTMLsearchArticleByTitle     | `object` |
| **[Validate](docs/validate.md)**   | To check if article with the given title exist                  | checkIfExists                   | `object` |
| **[Random](docs/random.md)**       | Get random articles, or Wikipedias                              | Articles, Language              | `object` |
| **[Today](docs/today.md)**         | Get today in History/ On this day from specific date            | GetOnThisDay                    | `object` |
| **[Languages](docs/languages.md)** | List of available Wikipedias and their name, language and code. | Codes, Search                   | `object` |

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💪 Support

Please consider ⭐ Starring this repo or Buy me a coffee if you can ☕. If you have any questions or feedback, feel free to contact me at [harrytom2606@gmail.com](mailto:harrytom2606@gmail.com), Twitter [@me_harrify](https://twitter.com/me_harrify) or Discord **harrify**`#0111`

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200">](https://www.buymeacoffee.com/harrytom)

#

<p align="center">
Made with ❤ · 🧑 by <a href="https://harrytom.netlify.app">Harry</a> · 💪 Powered by 🌍 <a href="https://wikipedia.org/">Wikipedia</a>
</p>
