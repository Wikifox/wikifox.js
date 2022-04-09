# Validate

This module is used for validateing article. Currently, you can check article by title `checkIfExist`. We are now working on Article validation by id

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   [Usage](#usage)

## 🪣 Importing module

To set up this module to work , you have to import the module first.

```js
import { Validate } from "wikifox";
```

## Usage

#### `checkIfExist`

This method lets you check if article with specific title exist. It will also normalize the casing and all..

```js
Validate.checkIfExists(<title>, <callback> [data])
```

##### Exmaple 1

```js
import { Validate } from "wikifox";

var title = "Ethereum"
Validate.checkIfExists(title, (result) => {
	console.log(result);
});


/* OUTPUT */

{
  exist: true,
  title: 'Ethereum',
  id: 41754003,
  url: 'https://en.wikipedia.org/?curid=41754003'
}

```

#### Example 2

```js
import { Validate } from "wikifox";

var title = "OhMyGawd-ThisDoesn'tExist";
Validate.checkIfExists(title, (result) => {
	console.log(result);
});

/* OUTPUT */
{
	exist: false;
}
```
