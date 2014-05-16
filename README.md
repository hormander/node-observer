Observer
-------------

This is an observer pattern module

## Install

```bash
npm install node-observer
```

## Example

Main file: app.js

```app.js
"use strict";

var observer = require("node-observer");
var hello = require("./hello");

observer.subscribe(this, "HELLO", function(who, data) {
	console.log(data);
});

hello.send();
```

File: hello.js

```hello.js
"use strict";

var observer = require("node-observer");

var Hello = function() { };

Hello.prototype.send = function() {
	observer.send(this, "HELLO", "hello world!!!");
};

module.exports = new Hello();
```

Run

```bash
node app.js
```

## API

### subscribe(object, event, callback)

object:object, event:string, callback:function

subscribe event

### unsubscribe(object, event) 

object:object, event:string

unsubscribe event

### send(object, event, data)

object:object, event:string, data:object

send event 'event' with data 'data'

## Contributors

- [Marco Murdocca aka `hormander`](https://github.com/hormander)
