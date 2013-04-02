var mongo = require('../index'),
	cluster = require('cluster');

var host = 'localhost';
var port = 27017;
var database = 'dev_feedstasher';

var db = new mongo.db(host, port, database);

db.collection('feeds');

db.feeds.find().toArray(function(){
	db.feeds.find().toArray(function(){
		db.collection('posts');
		db.posts.find().toArray(function(){
			console.log(arguments);
		});
	});
});