/**
 * Copyright 2017 Initiate Thinking Limited
 * Author: Nigel Daniels
 * License: MIT
 */
var log = (function() {
	var levels = ['TRACE', 'DEBUG', 'ERROR', 'WARN', 'INFO', 'OFF'];
	var logLevel = 'WARN';

	logger = function(level, message) {
				if (levels.indexOf(level) >= levels.indexOf(logLevel)) {
					var now = new Date();

					if (typeof message !== 'string') {
						console.log('[' + now + '] ' + level + ' ' + JSON.stringify(message));
					} else {
						console.log('[' + now + '] ' + level + ' ' + message);
						}
					}
				return;
				};

	return {
		setLevel:	function(level) {
						if (levels.indexOf(level) !== null) {
							logLevel = level;
							}
						return;
						},

		trace:		function(message) {
						logger('TRACE', message);
						return;
						},

		debug:		function(message) {
						logger('DEBUG', message);
						return;
						},

		error:		function(message) {
						logger('ERROR', message);
						return;
						},

		warn:		function(message) {
						logger('WARN', message);
						return;
						},

		info:		function(message) {
						logger('INFO', message);
						return;
						}
	}
}());
