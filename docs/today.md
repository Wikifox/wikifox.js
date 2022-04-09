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
    "success":true,
    "data":{
        "results":{
            "events":[
                {
                    "year":"887",
                    "snippet":"Berengar I is elected as king of Italy by the lords of Lombardy. He is crowned with the Iron Crown of Lombardy at Pavia."
                },
                {
                    "year":"1481",
                    "snippet":"Battle of Westbroek: An army of 4,000 to 5,000 soldiers raised by David of Burgundy, Bishop of Utrecht, attacks an armed mob of people from nearby Utrecht who were trying to avenge the massacre of the inhabitants of Westbroek."
                },
                // .. and much more
            ]
        },
        "categories":[
            "events"
        ],
        "date":"December 26"
    }
}
```
