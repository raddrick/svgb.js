(function(){
  
    window.svgb.Models.Image = window.svgb.Models.Point.extend({
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

})();