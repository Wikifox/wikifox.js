# Search

Search object lets you search articles by their title. Currently, it has only one method `searchArticleByTitle`. More options coming in the comming weeks! (We are testing it)

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   Methods
    -   [`searchArticleByTitle`](#searcharticlebytitle)

## 🪣 Importing module

To set up this module to work , you have to import the module first. Secondly, You have to initilize the article class with the given paramaters inside an object.

| Parameter  | Description                                                         | Type     | Optional |
| ---------- | ------------------------------------------------------------------- | -------- | -------- |
| `language` | The language/Wikipedia in which you are gonna explore! default `en` | `string` | true     |

```js
import { Search } from "wikifox";

var searchWiki = new Search({
	language: "en", //optional
});
```

## Methods

#### `searchArticleByTitle`

This method lets you search articles by their title. It also provides suggession, total hits, small snippets and page id of results.

##### Exmaple

```js
import { Search } from "wikifox";

var searchWiki = new Search({
	language: "en", //optional
});


var thingToSearch = "Ethereum"
searchWiki.searchArticleByTitle(thingToSearch, (result) => {
	console.log(result);
});

/* OUTPUT */
{
    "success":true,
    "data":{
        "suggession":"ethereal",
        "hits":470,
        "results":{
            "Ethereum":{
                "title":"Ethereum",
                "page":41754003,
                "words":7158,
                "snippet":"Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. Among",
                "url":"https://en.wikipedia.org/?curid=41754003"
            },
            "Ethereum Classic":{
                "title":"Ethereum Classic",
                "page":51159152,
                "words":2299,
                "snippet":"on a public Ethereum Virtual Machine (EVM). Ethereum Classic maintains the original, unaltered history of the Ethereum network. The Ethereum project's mainnet",
                "url":"https://en.wikipedia.org/?curid=51159152"
            },
            "Dogecoin":{
                "title":"Dogecoin",
                "page":41360413,
                "words":5015,
                "snippet":"Dogecoin (renDOGE) to be used on the Ethereum blockchain and access the DeFi network. Most DeFi coins use the Ethereum blockchain network. DeFi linked coins",
                "url":"https://en.wikipedia.org/?curid=41360413"
            }

		// ... And much more!
        }
    }
}

```
