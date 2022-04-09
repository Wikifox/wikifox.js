# Articles

Articles class is used to get content from wikipedia in text format. It Contains three method `getSummary`, `getContent` and `getHTML`.

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   Methods
    -   [`getContent`](#getcontent)
    -   [`getSummary`](#getsummary)
    -   [`getHTML`](#gethtml)

## 🪣 Importing module

To set up this module to work , you have to import the module first. Secondly, You have to initilize the article class with the given paramaters inside an object.

| Parameter  | Description                                                         | Type     | Optional |
| ---------- | ------------------------------------------------------------------- | -------- | -------- |
| `language` | The language/Wikipedia in which you are gonna explore! default `en` | `string` | true     |
| `article`  | The title of the article from which you want the information.       | `string` | false    |

```js
import { Article } from "wikifox";

var ethereumWiki = new Article({
	article: "ethereum",
	language: "en", //optional
});
```

## Methods

#### `getContent`

This method is used to get full text content excluding some unimportant parts from wikipedia such as "infobox".

##### Exmaple

```js
import { Article } from "wikifox";

var ethereumWiki = new Article({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getContent((result) => {
	console.log(result);
});

/* OUTPUT */

{
  success: true,
  data: {
    id: 41754003,
    title: 'Ethereum',
    content: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization.Ethereum was conceived in 2013 by programmer Vitalik Buterin. Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin. In 2014, crowdfunded development work began; the network went live on 30 July 2015. Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact. Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries like brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest. Ethereum also allows users to create and exchange NFTs, which are non-interchangeable tokens connected to digital works of art or other real-world items and exchanged as a variety of digital property. Additionally, many other cryptocurrencies operate as ERC-20 tokens on top of the Ethereum blockchain and have utilized the platform for initial coin offerings. A series of upgrades called Ethereum 2.0 includes a transition to proof of stake and aims to increase transaction throughput by using sharding.',
    // ... more and more!
    url: 'https://en.wikipedia.org/?curid=41754003',
    wikifox: 'http://wikifox.netlify.app/wiki?Ethereum'
  }
}
```

#### `getSummary`

This method is actually a kind of the previos one, but extremely simplified and more breif as it suggest "summary"

##### Exmaple

```js
import { Article } from "wikifox";

var ethereumWiki = new Article({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getContent((result) => {
	console.log(result);
});

/* OUTPUT */

{
  success: true,
  data: {
    id: 41754003,
    title: 'Ethereum',
    content: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization.Ethereum was conceived in 2013 by programmer Vitalik Buterin. Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin. In 2014, crowdfunded development work began; the network went live on 30 July 2015. Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact. Decentralized finance (DeFi)",
    url: 'https://en.wikipedia.org/?curid=41754003',
    wikifox: 'http://wikifox.netlify.app/wiki?Ethereum'
  }
}
```

#### `getHTML`

This method is used to get full wikipeida-styled html with css of a specific article. This includes all information from the article.

##### Exmaple

```js
import { Article } from "wikifox";

var ethereumWiki = new Article({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getContent((result) => {
	console.log(result);
});

/* OUTPUT */

{
  success: true,
  data: {
    id: 41754003,
    title: 'Ethereum',
    content: '<div class="mw-parser-output"><div class="shortdescription nomobile noexcerpt noprint searchaux" style="display:none">Open-source blockchain computing platform</div>\n<p class="mw-empty-elt">\n\n</p>\n<style data-mw-deduplicate="TemplateStyles:r1066479718">.mw-parser-output .infobox-subbox{padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:100%;clear:none;float:none;background-color:transparent}.mw-parser-output .infobox-3cols-child{margin:auto}.mw-parser-output .infobox .navbar{font-size:100%}body.skin-minerva .mw-parser-output .infobox-header,body.skin-minerva .mw-parser-output .infobox-subheader,body.skin-minerva .mw-parser-output .infobox-above,body.skin-minerva .mw-parser-output .infobox-title,body.skin-minerva .mw-parser-output .infobox-image,body.skin-minerva .mw-parser-output .infobox-full-data,body.skin-minerva .mw-parser-output .infobox-below{text-align:center}</style><table class="infobox vevent"><caption class="infobox-title summary">Ethereum</caption><tbody><tr><td colspan="2" class="infobox-image"><a href="/wiki/File:Ethereum_logo_translucent.svg" class="image"><img alt="Ethereum logo translucent.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/220px-Ethereum_logo_translucent.svg.png" decoding="async" width="220" height="335" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/330px-Ethereum_logo_translucent.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/440px-Ethereum_logo_translucent.svg.png 2x" data-file-width="1202" data-file-height="1828" /></a><div class="infobox-caption"><a href="/wiki/File:Ethereum_logo_print_clearly.webp" class="image" title="Ethereum logo print clearly"><img alt="Ethereum logo print clearly" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ethereum_logo_print_clearly.webp/100px-Ethereum_logo_print_clearly.webp.png" decoding="async" width="100" height="22" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ethereum_logo_print_clearly.webp/150px-Ethereum_logo_print_clearly.webp.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ethereum_logo_print_clearly.webp/200px-Ethereum_logo_print_clearly.webp.png 2x" data-file-width="978" data-file-height="217" /></a></div></td></tr><tr><th scope="row" class="infobox-label" style="white-space: nowrap"><a href="/wiki/Software_design" title="Software design">Original author(s)</a>',
    // More than what you can even think of!!!
    url: 'https://en.wikipedia.org/?curid=41754003',
    wikifox: 'http://wikifox.netlify.app/wiki?Ethereum'
  }
}
```
