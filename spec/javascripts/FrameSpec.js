// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

// window.svgb.Models.Frame = Backbone.Model.extend({
//   defaults: {
//     'viewBox': [0,0,200,200],
//     'width':500,
//     'height':500,
//     'masked':true
//   }    

describe("Frame", function(){
  var frame; 
  var options;

  beforeEach(function(){
    frame = new window.svgb.Models.Frame();
    options = {
      'viewBox': [0,0,200,200],
      'width':500,
      'height':500,
      'masked':true
    }    
  });

  it("should create an svg tag", function(){
    
  });

  it ("should update options", function(){

  });
  
});    