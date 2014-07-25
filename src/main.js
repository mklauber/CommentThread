var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");

var handle = {}
handle["/"] = handlers.thread;
handle['/bundle.js'] = handlers.bundle;
handle['/style.css'] = handlers.style;

server.start(router.route, handle);