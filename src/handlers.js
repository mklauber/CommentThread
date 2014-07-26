var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    fs = require('fs'),
    // This is our React component, shared by server and browser thanks to browserify
    Thread = require('./threading'),
    api = require('./api')


thread = function(req, res) {
  var props = {comments: api.messages}
  var html = React.renderComponentToString(Thread(props))
  res.setHeader('Content-Type', 'text/html')

  res.end(
    '<html><head>\n' +
      '<link rel="stylesheet" type="text/css" href="style.css" />\n' +
    '</head><body>\n' + 
    '<div id=content>\n' + html + '</div>\n' +
    ' <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>\n' +
    '<script src=//fb.me/react-0.11.0.js></script>\n' +
    '<script src=/bundle.js></script>\n' +
    '<script src="/api.js"></script>\n' + 
    '<script>\n' +
      'var Thread = require("./threading.js"), \n' + 
      'container = document.getElementById("content"); \n' +
      'React.renderComponent(Thread(' + safeStringify(props) + '), container)\n' +
    '</script></body></html>'
  )
} 

bundle = function(req, res){
  res.setHeader('Content-Type', 'text/javascript')
  browserify()
    .transform(literalify.configure({react: 'window.React'}))
    .require('./threading.js')
    .bundle()
    .pipe(res)
}

style = function(req, res){
  res.setHeader('Content-Type', 'text/css');
  var content = fs.readFileSync("./style.css");
  res.end(content);
}

// A utility function to safely escape JSON for embedding in a <script> tag
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

clientApi = function(req, res){
	res.setHeader('Content-Type', 'text/javascript');
	res.end(fs.readFileSync('./clientApi.js'));
}

exports.thread = thread;
exports.bundle = bundle;
exports.style = style;
exports.api = clientApi;
