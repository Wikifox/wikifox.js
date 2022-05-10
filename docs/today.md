# Today

This module is for scrapping On-This-Day from wikipedia. This also supports three categories, and also customizable dates. You will get avarage 100 events per category usually!

#

### 📃 TABLE OF CONTENT

-   [ Importing Module](#🪣-importing-module)
-   [Usage](#usage)

## 🪣 Importing module

To set up this module to work , you have to import the module first.

```js
import { Today } from "wikifox";
```

## Usage

#### `GetOnThisDay`

This method will give you all the events from wikipedia from specific date. You can conigure it with an object. If unconfigured, it will give you today's events.

```js
Today.GetOnThisDay(<configs>, <callback> [data])
```

You can configure it with an object and pass it as first parameter.

| Parameter    | Description                                 | type    | Possible Values              | optional |
| ------------ | ------------------------------------------- | ------- | ---------------------------- | -------- |
| `day`        | The day in which you want the events from   | `int`   | 1 - 31                       | true     |
| `month`      | The month in which you want the events from | `int`   | 1 - 12                       | true     |
| `categories` | Categories as list                          | `array` | `events`, `births`, `deaths` | true     |

##### Exmaple

```js
import { Today } from "wikifox";

var config = {
	day: 26,
	month: 12,
	categories: ["events"],
};

Today.GetOnThisDay(config, (result) => {
	console.log(result);
});


/* OUTPUT */
{
	"success": true,
	"data": {
		"events": [
			{
				"year": "28 BC",
				"article": "/wiki/Sunspot",
				"snippet": "A sunspot is observed by Han dynasty astronomers during the reign of Emperor Cheng of Han, one of the earliest dated sunspot observations in China."
			},
			{
				"year": "1291",
				"article": "/wiki/Nobles",
				"snippet": "Scottish nobles recognize the authority of Edward I of England pending the selection of a king."
			}
			// .. and much more
		]
        // births and deaths if given in configs object
	"categories": [
			"events"
	],
		"date": "December 26"
	}
}
```
