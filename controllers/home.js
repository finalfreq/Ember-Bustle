BustleClone.HomeController = Ember.Controller.extend({
  imgArray: ['http://cdnvideo.dolimg.com/cdn_assets/66c1894e8fb5b98cb722e735712a0ee8c241e23d.jpg', 'http://i.imgur.com/M1pZrAX.png', 'https://thedullwoodexperiment.files.wordpress.com/2014/02/air-bud-spikes-back-scene.jpg' ],
  index: 1,
  imgSource: 'http://i.imgur.com/M1pZrAX.png',
  actions: {
    leftArrow: function() {
      if (this.get('index') === 0) {
        this.set('index', this.get('imgArray').length)
      }
      this.set('index', this.get('index') - 1);
      this.set('imgSource', this.get('imgArray')[this.get('index')]);
      console.log(this.get('index'));
    },
    rightArrow: function() {
      this.set('index', this.get('index') + 1);
      if (this.get('index') === this.get('imgArray').length) {
        this.set('index', 0)
      }
      this.set('imgSource', this.get('imgArray')[this.get('index')]);
      console.log(this.get('index'));
    }
  }
});
