
# WikifoxJS `1.0.2`
WikifoxJS is a light-wight, powerful and restful Javascript library which connects to WikiPedia api. This library can be used to get Content from wikipedia. This has functions like **Getting Articles**, **Searching articles**, **Getting Images**, **Downloading a page** as `PDF` and **Data about a specific day**. All the data are returned in the form of **JSON Objects**.

- Installation
  - [NodeJS (NPM)](#nodejs)
  - [Browser (UNPKG/JSDELIVR)](#browser)
- Usage
  - Get Article
  - Search Article
  - Get Images
  - Get PDF
  - On this day
- License
- Note

## Motivation
I created this Library to connect to Wikipedia Api easily. There are Official Wikipeida RestApi's you can use, but this makes the process Easier, and this library also uses official wikimedia Api's
## Installation

#### NODEJS
You can use Node Package Manager (NPM) for your node project. Require Node Js `v14+`
```
npm i wikifox
```

#### BROWSER

To use in your Browser, You can use [wikifox.js](dist/wikifox.js) add add it to your document or you can use Third Party CDN to intall on the go!
```
<script src="yourdirectory/wikifox.js"></script>
```

If you want to use Third PArty CDN, Here you go!

###### UNPKG
```
<script src="https://unpkg.com/wikifox@1.0.2/dist/wikifox.js"></script>
```
###### JSDELIVR
```
<script src="https://cdn.jsdelivr.net/npm/wikifox@1.0.2/dist/wikifox.js"></script>
```
## Usage

> Note: If you are Using Node JS, Import the module before using <br>
> ``` const Wikipedia = require("./wikipie") ```
