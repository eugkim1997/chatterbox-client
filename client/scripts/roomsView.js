var RoomsView = {
  $roomBtn: $('#roomBtn'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $formInput: $('#message'),

  initialize: function() {
    $('#rooms select').append(`<option value = 'lobby'>lobby</option>`);
    console.log(RoomsView.$roomBtn)
    RoomsView.$roomBtn.on('roomBtn', RoomsView.renderRoom);
    // console.log("test: ", RoomsView.$formInput);
  },

  renderRoom: function(room) {
    console.log("ran!")
    $('#rooms select').append(`<option value = '${room}'>${room}</option>`);
  }

};
