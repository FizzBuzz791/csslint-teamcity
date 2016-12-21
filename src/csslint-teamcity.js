(function(){
	'use strict';
	
	var teamcityReporter = function(results, filename, options, tsm) {
		var messages = [];
		var name = 'CSSLint: ' + filename;
		messages.push(tsm.testStarted({name: name}));
		
		if (results.messages.length > 0) {
			results.messages.forEach(function(result) {
				var details = '[' + 
					(typeof result.line !== 'undefined' ? 'L' + result.line + ':C' + result.col : 'GENERAL') + 
					'] ' + result.message + ' ' + result.rule.desc + ' (' + result.rule.id + ')';
				
				messages.push(tsm.testFailed({
					name: name,
					message: result.message,
					details: details
				}));
			});
		}
		
		messages.push(tsm.testFinished({name: name}));
		
		if (!tsm.stdout) {
			return messages;
		}
	};
	
	module.exports = teamcityReporter;
})();