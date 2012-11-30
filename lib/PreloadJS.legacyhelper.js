// for no-audio support browsers
if(!window.HTMLAudioElement) {
	window.HTMLAudioElement = function(){};
}

// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function noop() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// ES5 15.4.4.14 Shim for IE 7 & 8
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
		if (this === void 0 || this === null)
			throw new TypeError();
		var self = Object(this);
		var length = self.length >>> 0;
		if (!length)
			return -1;
		var i = 0;
		if (arguments.length > 1)
			i = toInteger(arguments[1]);
		// handle negative indices
		i = i >= 0 ? i : length - Math.abs(i);
		for (; i < length; i++) {
			if (i in self && self[i] === sought) {
				return i;
			}
		}
		return -1;
	}
}
