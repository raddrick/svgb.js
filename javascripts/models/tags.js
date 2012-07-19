SVGNS = "http://www.w3.org/2000/svg";
XLINKNS = "http://www.w3.org/1999/xlink";

window.svgb = {
  Models: {  },
  Collections: {  },
  Routers: {  },
  Views: {  }
};

(function($){
  

  window.svgb.Group = window.svgb.Point.extend({ 
    defaults: {
      'tag':'g'
    },
    initialize: function(){
      
    }
  });
  //<use x="300" y="25" transform="scale(0.8)" width="25" height="24" class="close" xlink:href="#a_close" />
  window.svgb.Use = window.svgb.Point.extend({ 
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

  // <symbol id="s_name) %>">
  //   <image x="0" y="0" width="50" height="50" xlink:href="<%=h path_to_image "icons/s_name.png" %>" />
  // </symbol>
  window.svgb.Image = window.svgb.Point.extend({
    defaults: {
      "tag":"image",
      "width":0,
      "height":0,
      "name":"",
      "url":"assets/default.png" // xlink:href
    },
    initialize: function(){

    },
    render: function(){
      var node = $('def').find("symbol#" + this.attributes.id);
      var n_image = document.createElementNS(SVGNS, this.defaults.tag)
      n_image.setAttribute("width", this.attributes.width);
      n_image.setAttribute("height", this.attributes.height);
      n_image.setAttributeNS(XLINKNS,"xlink:href", this.attributes.url);

      if (node.length == 0){
        //create new sybmol 
        var n_symbol = document.createElementNS(SVGNS, "symbol")
        n_symbol.appendChild(n_image);
        n_symbol.setAttribute('id',this.attributes.name)
        node = n_symbol;
      } else {
        node=node[0].append(n_image);
      }
      this.el=node;
      return this.el;
    } 
  });

})(jQuery);