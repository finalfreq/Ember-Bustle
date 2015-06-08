BustleClone.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('article', function() {
    this.resource('article1');
    this.resource('article2');
    this.resource('article3');
    this.resource('article4');
  });
});
