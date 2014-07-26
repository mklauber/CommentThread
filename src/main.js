var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");
var api = require('./api');


var handle = {}
handle["/"] = handlers.thread;
handle['/bundle.js'] = handlers.bundle;
handle['/style.css'] = handlers.style;
handle['/api/children'] = api.children;

server.start(router.route, handle);
