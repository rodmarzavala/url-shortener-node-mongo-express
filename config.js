var config = {};

config.db = {};
config.webhost = 'https://mini-praga.herokuapp.com/';

config.db.host = 'localhost';
config.db.name = 'url_shortener';
config.db.uri = process.env.MONGODB_URI || 'mongodb://localhost/url_shortener';
config.port = 3000;

module.exports = config;
