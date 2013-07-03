(function($) {
  //<use x="300" y="25" transform="scale(0.8)" width="25" height="24" class="close" xlink:href="#a_close" />
  window.svgb.Models.Use = window.svgb.Models.Point.extend({ 
    defaults: {
      'tag':'use',
      'name':'',
      'xlink:href':'',
      'id':''   
    },
    initialize: function(){
      return this;
    },
    // render: function(){
    //   window.svgb.Use.call("render",null);
    //   this.el.setAttribute("xlink:href",this.attributes.name);
    //   this.el.removeAttribute("name");
    //   return this.el;
    // }
  });
})();