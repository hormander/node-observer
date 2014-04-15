"use strict";

var Observer = function() {
  	this.subscriber = [];
};

Observer.prototype.subscribe = function(who, what, cb) {
	if (!this.subscriber[what]) {
		this.subscriber[what] = [];
	}

	for(var i = 0; i < this.subscriber[what].length; i++) {
		var o = this.subscriber[what][i];
		if (o.item == who && o.callback == cb) {
			return;
		}
	}

	this.subscriber[what].push({item: who, callback: cb });	
};

Observer.prototype.unsubscribe = function(who, what) {
	if (!this.subscriber[what]) return;

	for(var i = 0; i < this.subscriber[what].length; i++) {
		var o = this.subscriber[what][i];
		if (o.item == who) {
			this.subscriber[what].splice(i, 1);
			return;
		}
	}

};

Observer.prototype.send = function(who, what, data) {
	if (!this.subscriber[what]) return;

	for(var i = 0; i < this.subscriber[what].length; i++) {
		var o = this.subscriber[what][i];
		o.callback(who, data);
	}
};

module.exports = new Observer();
