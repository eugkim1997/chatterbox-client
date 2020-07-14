var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(messages) {
    // use initialize to load messages to
    //iterate through messages
      //call messageview on each of the messages
      //console.log('hi');
      //console.log(messages[0])
      // //console.log(MessageView.render(messages[0]));
      //console.log(this.$chats.children())
    if (Array.isArray(messages)) {
      for (var i = 0; i < messages.length; i++) {
        // handle objects with no username
        if(messages[i].username === undefined) {
          messages[i].username = 'temp';
        }
        if(messages[i].text === undefined) {
          messages[i].text = 'temptext';
        }
        $('#chats').append(MessageView.render(messages[i]));
      }
    } else {
      $('#chats').append(MessageView.render(messages));
    }
  }
};