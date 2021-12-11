
# WikifoxJS [![Version](https://img.shields.io/badge/Version-1.0.8-Blue.svg)](#)

WikifoxJS is a light-weight, powerful and restful Javascript library which connects to WikiPedia api. This library can be used to get Content from wikipedia. This has functions like **Getting Articles**, **Searching articles**, **Getting Images**, **Downloading a page** as `PDF` and **Data about a specific day**. All the data are returned in the form of **JSON Objects**.

- Motivation
- Installation
  - [NodeJS (NPM)](#nodejs)
  - [Browser (UNPKG/JSDELIVR)](#browser)
- Usage
  - [Get Article](#get-article)
  - [Search Article](#search-articles)
  - [Get Images](#get-images)
  - [Get PDF](#download-pdf)
  - [On this day](#on-this-day)
- [License](#license)
- [Support](#support)

# Motivation
I created this Library to connect to Wikipedia Api easily. There are Official Wikipeida RestApi's you can use, but this makes the process Easier, and this library also uses official wikimedia Api's
## ⚙ Installation

#### NODEJS
You can use Node Package Manager (NPM) for your node project. Require NodeJS `v14+`
```
npm i wikifox
```

After installing, Import Wikifox module before you proceed
```
const Wikipedia = require("./wikifox") 
```
#### BROWSER
To use in your Browser, You can use [wikifox.js](dist/wikifox.js) add add it to your document or you can use Third Party CDN to intall on the go!
```
<script src="yourdirectory/wikifox.js"></script>
```
If you want to use Third Party CDN, Here you go!

| UNPKG    | ```<script src="https://unpkg.com/wikifox@1.0.8/dist/wikifox.js"></script>```            |
|----------|------------------------------------------------------------------------------------------|
| JSDELIVR | ```<script src="https://cdn.jsdelivr.net/npm/wikifox@1.0.8/dist/wikifox.js"></script>``` |

# ✨ Usage

### Initializing Wikifox

Before we begin, we have to initilze the Wikipedia class with the Wikipedia you want. The default Wikipedia will be `en`. It can also be used to change languages!
These are some list of available wikipedias,

| Wikipedia                | WP CODES                                                               |
|--------------------------|------------------------------------------------------------------------|
| English Wikipedia        | en                                                                     |
| Simple English Wikipedia | simple                                                                 |
| Wikipédia french         | fr                                                                     |
| हिन्दी विकिपीडिया            | hi                                                                     |  
| Full list of Wikipedias  | [List of Wikipedias](./Wikipedia%20Editions.md) |                      |

```
  const Wikipedia = require("wikifox");
  const wiki = new Wikipedia("en");
```

### Get Article
This is used to get basic summary from Wikipedia. This will return the object with the data according to the `title` Parameter


| Parameter              | What to pass?                          |Example                         |
|------------------------|----------------------------------------|--------------------------------|
| `title` [string]       | Title of the Wikipedia Page            |"google"                        |
```
wiki.getArticle("google").then((data)=>{
    console.log(data)
})
```
###### DATA RETURNED
```
{
    "status": "success", //Status
    "data": {
      "title": "Google", // Title
      "content": "Google LLC is an American multinational technology company that specializes in ...", // Description
      "url": "http://en.wikipedia.org/?curid=1092923", // Wiki Page URL 
      "id": 1092923 //Wikipedia Page Id
    }
}
```

### Search Articles
This is used to search the whole wikipedia with the passed title


| Parameter              | What to pass?                          |Example                         |
|------------------------|----------------------------------------|--------------------------------|
| `title` [string]       | Title of the Wikipedia Page            |"google"                        |
```
wiki.searchArticles("google").then((data)=>{
    console.log(data)
})
```
###### DATA RETURNED
```
{
    "status": "success",
    "data": {
        "results": {
            "Google": {
                "title": "Google",
                "page": 1092923,
                "words": 16334,
                "snippet": "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising",
                "url": "http://en.wikipedia.org/?curid=1092923"
            },
            "Google Maps": {}
            ...
        }
    }
}
```

### Get Images

This is used to get all the Images from a Wikipedia Page.


| Parameter              | What to pass?                          |Example                         |
|------------------------|----------------------------------------|--------------------------------|
| `title` [string]       | Title of the Wikipedia Page            |"google"                        |
```
wiki.getImage("google").then((data)=>{
    console.log(data)
})
```
###### DATA RETURNED
```
{
    "page": "1092923",
    "images": {
        "0": " https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:111 Eighth Avenue.jpg&origin=*",
        "1": " https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Ad-tech London 2010 (2).JPG&origin=*",
        "2": " https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Alphabet Inc Logo 2015.svg&origin=*",
        ...
    }
}
```

### Download PDF

This is used Export a wikipedia page as `PDF`


| Parameter              | What to pass?                          |Example                         | 
|------------------------|----------------------------------------|--------------------------------|
| `title` [string]       | Title of the Wikipedia Page            |"google"                        |
| `download` [bool] [Optional]| Download the File instantly       | true                           |

> NOTE: INSTANT DOWNLOAD IS ONLY AVAILABLE FOR BROWSER

```
wiki.getPDF("google").then((data)=>{
    console.log(data)
})
```
###### DATA RETURNED
```
{
  status: 'success',
  title: 'google',
  url: 'https://en.wikipedia.org/api/rest_v1/page/pdf/google'
}
```

### On This Day

This is used to get data about events/births/deaths happened on a specific date, but years ago!

| Parameter (optional)   | What to pass?                          | Example                         | 
|------------------------|----------------------------------------|--------------------------------|
| Object                 | Refer the table below                  |"google"                        |

| Object Keys            | What be the value?      |PossibleValues                              | Default                        |
|------------------------|------------------------|---------------------------------------------|--------------------------------|
| `type` [string]        | Category of data       |`"events"`/`"deaths"`/`"births"`             | `"events" `                    |
| `day` [int]            | Day in digits          |`30`-`31`                                    |  _Today_                       |
| `months` [int]         | Month in digits        |`1`-`12`                                      |  _Current Month_               |

```
wiki.getOnThisDay({
    type: "births",
    day: 26,
    month: 12
}).then((data)=>{
    console.log(data)
})
```
###### DATA RETURNED
```
{
    "date": "October 26",
    "url": "https://wikipedia.org/wiki/October_26",
    "type": "events",
    "data": [
        {
            "year": "740",
            "description": "An earthquake strikes Constantinople and the surrounding countryside, causing destruction to the city's land walls and buildings.",
            "wikipedia": [
                {
                    "title": "Earthquake",
                    "wikipedia": "https://wikipedia.org/wiki/Earthquake"
                },
                {
                    "title": "Constantinople",
                    "wikipedia": "https://wikipedia.org/wiki/Constantinople"
                },
                {
                    "title": "Defensive wall",
                    "wikipedia": "https://wikipedia.org/wiki/Defensive_wall"
                }
            ]
        }
        ...
    ]
}
```

# 🛡️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# 💪 Support
Please consider ⭐ Starring this repo!

<a href="https://www.buymeacoffee.com/harrytom">
<img src="https://uc955a45fbc9fb11f51423c80b87.previews.dropboxusercontent.com/p/thumb/ABUbZ3O1fuqK2UkRFXNSwr2OtzjI4gR2H0N_84nXm6x2msRzobVH7k33jBREgYSldpme_u97bcsNmMz77fWF4tHizlNK7SPFUMtRfLHpwK7C3IGSykqOBtk1vFYglcDkGDQguz7atnW88wf3fT0N5RDpIcfn3740VIm_y2glnpEeHOsyQNEHQ-g2HST0j4thBvUA-esyUDWtga-ORU4yxPj6O93gU7MADI9VD0KwhDR-bzJNsit0P8OEvQMd6jUbpsfKa-WisWWFsp0F5BwarPraXyUB0d5y3oLiXbVWRkh7sVk6idsD5zgXsnTw18NPgkstRbtXOok14b83MYE-xunhavvXCjR4DXuWuoqoXMA3Bw/p.png?fv_content=true&size_mode=5" width="200px"></a>

<a href="https://www.producthunt.com/posts/wikifoxjs?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wikifoxjs" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=318256&theme=dark" alt="WikifoxJS - Connecting your app with Wikipedia made easy! | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

<hr>
<p align="center">
Made with ❤ · 🧑 By Harry · 💪 Powered by WikiPedia
</p>
