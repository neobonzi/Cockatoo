var config = require('./config'),
	net = require('net'),
	JsonSocket = require('json-socket'),
	kue = require('kue');
	
var kue = kue.createQueue();

exports.submitTask = function(data, cruncher) {
	
}
