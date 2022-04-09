# Language

The 'Language' object has one method and one nested object. The method includes `Search` and Object include `Codes`

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   Objects
    -   [`Codes`](#codes)
-   Methods
    -   [`Search`](#search)

## 🪣 Importing module

To set up this module to work , you have to import the module first.

```js
import { Language } from "wikifox";
```

## Objects and Methods

#### `Codes`

This Object contains all the codes with it's name, language and wikipedia name. It is just a constant and static Javascript object.

##### Exmaple

```js
import { Languages } from "wikifox";

console.log(Language.Codes)

/* OUTPUT */

{ en: { name: 'English Wikipedia', language: 'English' },
  fr: { name: 'WikipÃ©dia en franÃ§ais', language: 'French' },
  de: { name: 'Deutschsprachige Wikipedia', language: 'German' },
  es: { name: 'Wikipedia en espaÃ±ol', language: 'Spanish' },
  ja: { name: 'ã‚¦ã‚£ã‚­ãƒšãƒ‡ã‚£ã‚¢ æ—¥æœ¬èªžç‰ˆ', language: 'Japanese' }

  // ..360 more items
}
```

#### `Search`

This method will let you filter through the above object, so that it makes easy to choose between the codes!

##### Exmaple

```js
import { Languages } from "wikifox";

Languages.Search("ml", (result) => {
	console.log(result);
});

/* OUTPUT */
{
  ml: { name: 'Malayalam Wikipedia', language: 'Malayalam' },
  eml: { name: 'Emilian-Romagnol Wikipedia', language: 'Emilian- Romagnol' }
}
```
