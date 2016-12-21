var ctc = require('./src/csslint-teamcity.js');
var tsm = require('teamcity-service-messages');

var reporter = function (results, filename, options) {
	tsm.stdout = reporter.stdout;
	return ctc(results, filename, options, tsm); 
};
reporter.stdout = true;

module.exports = reporter;