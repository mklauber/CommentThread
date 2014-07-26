var api = require('./api'),
    React = require('react'),
    DOM = React.DOM,
    div = DOM.div,
    br  = DOM.br
    span = DOM.span;


var messages = api.messages;
// This is just a simple example of a component that can be rendered on both
// the server and browser
//var messages = [
//  {'id': '0.2.0.1', 'parent': '0.2.0', 'message': "Is that all they do?", 'order': 11},
//  {'id': '0.1.1.0', 'parent': '0.1.1', 'message': "Is there anything you'd like to change?", 'order': 10},
//  {'id': '0.2.0.0', 'parent': '0.2.0', 'message': "Oh that's kind of neat.", 'order': 9},
//  {'id': '0.1.1', 'parent': '0.1', 'message': "I agree with that sentiment.", 'order':8},
//  {'id': '0.1.0', 'parent': '0.1', 'message': "What kind of issues?", 'order': 7},
//  {'id': '0.0.1', 'parent': '0.0', 'message': "Is there anything that bothers you about them?", 'order': 6},
//  {'id': '0.2.0', 'parent': '0.2', 'message': "They transition between list and threading.", 'order': 5},
//  {'id': '0.0.0', 'parent': '0.0', 'message': "Have you seen the threaded display?", 'order': 4},
//  {'id': '0.2', 'parent': '0', 'message': "What's different about them?", 'order': 3},
//  {'id': '0.1', 'parent': '0', 'message': "There's still some issues.", 'order': 2},
//  {'id': '0.0', 'parent': '0', 'message': "I think they work alright.", 'order': 1},
//  {'id': '0', 'parent': null, 'message': "What do you think of my threaded comments?", 'order': 0},
//]

console.log("Messages: " + messages.length);


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
      console.log("ID: " + this.state.id);
      return (div({className: "container"},
            div({className: "children" }),
            div({className: "msg",
                 onClick: this.handleClick},
                div({className: "index"}, '#'),// + msgs[this.state.id]['order']),
                span({className: "author"},msgs[this.state.id]['author']['name']),
                br(),
                msgs[this.state.id]['raw_message']
            )
          ))
    }
    
    //Handle if the focus of conversation
    var children = [];
    this.state.children.forEach(function(element) {
      children.push(div({className: "children msg",
                         onClick:this.handleNavigate.bind(null, element.id)},
                        div({className: "index"}, '#'),// + element.order),
                        span({className: "author"},element['author']['name']),
                        br(),
                        element['raw_message']
              ));
    }, this)
    
    var ancestors = [];
    this.state.ancestors.forEach(function(element) {
      ancestors.push(div({className: "ancestor msg",
                          onClick: this.handleNavigate.bind(null, element)},
                         div({className: "index"}, '#'),// + msgs[element].order),
                         span({className: "author"},msgs[element]['author']['name']),
                         br(),
                         msgs[element]['raw_message']
              ));
    }, this)
    return (div({className: "container visible"},
          children,
          div({className:"current msg",
               onClick:this.handleClick},
              div({className: "index"}, '#'),// + msgs[this.state.id]['order']),
              span({className: "author"},msgs[this.state.id]['author']['name']),
              br(),
              msgs[this.state.id]['raw_message']),
           ancestors
        ));
  },
  
  handleNavigate: function(id) {
    console.log(event);
    var _this = this;
    $.getJSON('/api/message/' + id, function(data) {
      _this.setState({id:id,
                     children: data['children'],
                     ancestors: data['ancestors']
                    });
    });
  },
  handleClick: function(event) {
    var _this = this;
    $.getJSON('/api/message/' + this.props.id, function(data) {
      _this.setState({focus: !_this.state.focus,
                      id:_this.props.id,
                      children: data['children'],
                      ancestors: data['ancestors']
                    });
    });
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
