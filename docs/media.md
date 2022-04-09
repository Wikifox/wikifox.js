# Media

Media class is used to access media contents fomr wikipedia from a specific article. It includes the methods suck as `getThumbnail`, `getImages` and `getPDF`.

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   Methods
    -   [`getThumbnail`](#getthumbnail)
    -   [`getImages`](#getimages)
    -   [`getPDF`](#getpdf)

## 🪣 Importing module

To set up this module to work , you have to import the module first. Secondly, You have to initilize the article class with the given paramaters inside an object.

| Parameter  | Description                                                         | Type     | Optional |
| ---------- | ------------------------------------------------------------------- | -------- | -------- |
| `language` | The language/Wikipedia in which you are gonna explore! default `en` | `string` | true     |
| `article`  | The title of the article from which you want the information.       | `string` | false    |

```js
import { Media } from "wikifox";

var ethereumWiki = new Media({
	article: "ethereum",
	language: "en", //optional
});
```

## Methods

#### `getThumbnail`

This method is used to get them main picture aka Thumbnail of the article from a given article. You can also provide maximum-size of the image as the second parameter `int`

##### Exmaple

```js
import { Media } from "wikifox";

var ethereumWiki = new Media({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getThumbnail((result) => {
	console.log(result);
}, 1000);

/* OUTPUT */

{
  success: true,
  data: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/33px-Ethereum_logo_translucent.svg.png',
    width: 33,
    height: 50,
    title: 'Ethereum',
    id: 41754003
  }
}
```

#### `getImages`

This method is used to get all the images included in the article. NOTE: The links returned are redirecting links. (nothing to worry about, it's just fine!)

##### Exmaple

```js
import { Media } from "wikifox";

var ethereumWiki = new Media({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getImages((result) => {
	console.log(result);
});

/* OUTPUT */

{
  success: true,
  data: {
    title: 'Ethereum',
    id: 41754003,
    images: [
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Semi-protection-shackle.svg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Ethereum_logo_translucent.svg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Ethereum_logo_print_clearly.webp',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Vitalik_Buterin_TechCrunch_London_2015_(cropped).jpg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:2021-04-18_eth_transactions.jpg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Compound_Finance.jpg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Commons-logo.svg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:OOjs_UI_icon_edit-ltr-progressive.svg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Symbol_category_class.svg',
      'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/File:Symbol_list_class.svg'
    ]
  }
}
```

#### `getPDF`

This method is used to get the full article content as Wikipedia Styled PDF format file. If in browser environment, pass second parameter as `true` to download article instantly.

##### Exmaple

```js
import { Media } from "wikifox";

var ethereumWiki = new Media({
	article: "ethereum",
	language: "en", //optional
});

ethereumWiki.getPDF((result) => {
	console.log(result);
});

/* OUTPUT */

{
  success: true,
  data: { url: 'https://en.wikipedia.org/api/rest_v1/page/pdf/Ethereum' }
}
```
