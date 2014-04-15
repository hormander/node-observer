Observer
-------------

This is a observer pattern module

## Install

```bash
npm install node-observer
```

## Introduction

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

var message;

var Hello = function() { };

Hello.prototype.send = function() {
	observer.send(this, "HELLO", "hello world!!!");
};

module.exports = new Hello();
```

## API

### subscribe(object, event, callaback)
subscribe event

### unsubscribe(object, event, callaback)
unsubscribe event

### send(object, event, data)
send event 'event' with data 'data'

## Contributors

- [Marco Murdocca aka `hormander`](https://github.com/hormander)
