BustleClone.HomeController = Ember.Controller.extend({
  imgArray: ['http://cdnvideo.dolimg.com/cdn_assets/66c1894e8fb5b98cb722e735712a0ee8c241e23d.jpg', 'http://i.imgur.com/8Pwm8dK.jpg', 'http://imgur.com/M1pZrAX'],
  index: 1,
  imgSource: "http://i.imgur.com/8Pwm8dK.jpg",
  actions: {
    leftArrow: function() {
      var i = this.get('index');
      var img = this.get('imgArray')[i-1];
      console.log(i);
      console.log(img);
      this.set('imgSource', img);
      // this.set('imgSource', this.get('imgArray[this.get('index') - 1]'));
      // this.set('index', this.get('index') - 1);
      // this.set('imgsource', this.get('imgArray[' + this.get("index") + ']'));
    }
  }
});
