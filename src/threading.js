var React = require('react'),
    DOM = React.DOM,
    div = DOM.div;

// This is just a simple example of a component that can be rendered on both
// the server and browser
var messages = [
  {'id': '0.2.0.1', 'parent': '0.2.0', 'msg': "Is that all they do?", 'order': 11},
  {'id': '0.1.1.0', 'parent': '0.1.1', 'msg': "Is there anything you'd like to change?", 'order': 10},
  {'id': '0.2.0.0', 'parent': '0.2.0', 'msg': "Oh that's kind of neat.", 'order': 9},
  {'id': '0.1.1', 'parent': '0.1', 'msg': "I agree with that sentiment.", 'order':8},
  {'id': '0.1.0', 'parent': '0.1', 'msg': "What kind of issues?", 'order': 7},
  {'id': '0.0.1', 'parent': '0.0', 'msg': "Is there anything that bothers you about them?", 'order': 6},
  {'id': '0.2.0', 'parent': '0.2', 'msg': "They transition between list and threading.", 'order': 5},
  {'id': '0.0.0', 'parent': '0.0', 'msg': "Have you seen the threaded display?", 'order': 4},
  {'id': '0.2', 'parent': '0', 'msg': "What's different about them?", 'order': 3},
  {'id': '0.1', 'parent': '0', 'msg': "There's still some issues.", 'order': 2},
  {'id': '0.0', 'parent': '0', 'msg': "I think they work alright.", 'order': 1},
  {'id': '0', 'parent': null, 'msg': "What do you think of my threaded comments?", 'order': 0},
]

var msgs = {};
messages.forEach(function (val) {
  msgs[val['id']] = val;
});

var sort_by_date = function(a, b) { return a-b;};



var getChildren = function(id) {
  return messages.filter(function (msg) { return msg['parent'] == id; });
};
  
var getAncestors = function(id) {
  var results = []
  if (msgs[id]['parent'] != null) {
    results = [msgs[id]['parent']];
    results = results.concat(getAncestors(msgs[id]['parent']));
  }
  return results;
}

var Comment = React.createClass({
  getInitialState: function() {
    return {focus: false, id: this.props.id,
            ancestors: []};
  },
  
  
  render_comment_context: function(id) {
    
  },
  
  render: function() {
    
    // Handle the simple case.
    if (!this.state.focus) {
      return (div({className: "container"},
            div({className: "children" }),
            div({className: "msg",
               onClick: this.handleClick},
               '#' + msgs[this.state.id]['msg']
            )
          ))
    }
    
    //Handle if the focus of conversation
    var children = [];
    this.state.children.forEach(function(element) {
      children.push(div({className: "children msg",
                 onClick:this.handleNavigate.bind(null, element.id)},
                 '#' + element.msg
              ));
    }, this)
    
    var ancestors = [];
    this.state.ancestors.forEach(function(element) {
      ancestors.push(div({className: "ancestor msg",
                 onClick: this.handleNavigate.bind(null, element)},
                 '#' +msgs[element]['msg']
              ));
    }, this)
    return (div({className: "container visible"},
          children,
          div({className:"current msg",
             onClick:this.handleClick},
             '#' + msgs[this.state.id]['msg']),
           ancestors
        ));
  },
  
  handleNavigate: function(id) {
    console.log(event);
    this.setState({id: id,
                   children: getChildren(id),
                   ancestors: getAncestors(id)});
  },
  handleClick: function(event) {
    this.setState({focus: !this.state.focus,
                   id: this.props.id,
                   children: getChildren(this.state.id),
                   ancestors: getAncestors(this.state.id)});
    event.stopPropagation();
  }
});

var Thread = React.createClass({
  render: function() {
    var rows = [];
    this.props.comments.forEach(function(key){
      rows.push(Comment({key:key.id, id:key.id}));
    });
    return (div(null,rows));
  }
});

module.exports = Thread;