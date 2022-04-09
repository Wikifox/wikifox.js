# Random

The 'Random' object helps you generate random articles from specific wikipedia. You can also generate random language/wikipedia with this object. This has two methods namely `Article` and `Language`

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   Methods
    -   [`Article`](#article)
    -   [`Language`](#language)

## 🪣 Importing module

To set up this module to work , you have to import the module first.

```js
import { Random } from "wikifox";
```

## Methods

#### `Article`

This method wil give you random article from specified wikipedia.Example from "en" which is "English Wikipedia" or "fr" which is "French Wikipedia" (Refer [Wikipedia Editions](./Wikipedia%20Editions.md) for more). You can pass language code as second parameter

##### Exmaple

```js
import { Random } from "wikifox";

Random.Article((data) => {
	console.log(data);
}, "en");

/* OUTPUT */

{
    success: true,
    data: {
       title: 'The_Old_Guard_(2020_film)',
       id: 60599040,
       language: 'en'
    }
}
```

#### `Language`

This method wil give you random language/wikipedia. Actually it is choosing randomly form this [list](./Wikipedia%20Editions.md)!

##### Exmaple

```js
import { Random } from "wikifox";

Random.Language((data) => {
	console.log(data);
});

/* OUTPUT */
{
  success: true,
  data: {
    name: 'Moldovan Wikipedia (deleted)',
    language: 'Moldovan',
    code: 'mg'
  }
}
```
