var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");
var api = require('./api');
var director = require('director');
var http = require('http');

var wrap = function(f) {
	var w = function() {
		console.log("Called");
		return f(this.req, this.res);
	};
	return w;
};

 var router = new director.http.Router();

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }
  });
});

router.get('/api/children/:id', api.children);
router.get('/api/message/:id', api.context);

router.get('/bundle.js', wrap(handlers.bundle));
router.get('/clientApi.js', wrap(handlers.api));
router.get('/style.css', wrap(handlers.style));
router.get('/', wrap(handlers.thread));

server.listen(8000);
