var messages = [ 
  {'id': '0.2.0.1', 'parent': '0.2.0', 'msg': "Is that all they do?", 'order': 11},
  {'id': '0.1.1.0', 'parent': '0.1.1', 'msg': "Is there anything you'd like to change?", 'order': 10},
  {'id': '0.2.0.0', 'parent': '0.2.0', 'msg': "Oh that's kind of neat.", 'order': 9}, 
  {'id': '0.1.1', 'parent': '0.1', 'msg': "I agree with that sentiment.", 'order':8},
  {'id': '0.1.0', 'parent': '0.1', 'msg': "What kind of issues?", 'order': 7}, 
  {'id': '0.0.1', 'parent': '0.0', 'msg': "Is there anything that bothers you about them?", 'order': 6},
  {'id': '0.2.0', 'parent': '0.2', 'msg': "They transition between list and threading.", 'order': 5},
  {'id': '0.0.0', 'parent': '0.0', 'msg': "Have you seen the threaded display?", 'order': 4},{'id': '0.2', 'parent': '0', 'msg': "What's different about them?", 'order': 3},
  {'id': '0.1', 'parent': '0', 'msg': "There's still some issues.", 'order': 2},
  {'id': '0.0', 'parent': '0', 'msg': "I think they work alright.", 'order': 1}, 
  {'id': '0', 'parent': null, 'msg': "What do you think of my threaded comments?", 'order': 0},
]

children = function(req, res) {
  var id = '0';
  var results = messages.filter(function (msg) { return msg['parent'] == id; });
  res.end(JSON.stringify(results));
};

exports.messages = messages
exports.children = children
