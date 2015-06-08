BustleClone.ApplicationController = Ember.Controller.extend({
  notClicked: true,
  actions: {
    socialMedia: function() {
      this.set('notClicked', false);
    }
  }

});
