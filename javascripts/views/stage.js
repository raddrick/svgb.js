(function($){
  window.svgb.StageView = Backbone.View.extend({
    tagName: 'g',
    className: 'svgb-view',
    name:"",
    transform:null,
    options:{},
    initialize: function(){
      this.template = _.template($('#tmpl-svgb-stage').html());
    },
    render: function(){
      
      this.template = this.template(this.model.toJSON()).split('\n');
      
      //class='<@= name @> stage-data' transform='<@= transform @>' <@= options @>
      this.el = window.svgb.el(this);
      this.el.setAttribute("class",this.model.attributes.name + ' stage-data');

      return this;
    },
    active:function(content){
      $(this.el).find(".active").html(content);
    },
    base:function(content){
      $(this.el).find(".base").html(content);
     }
  });
})(jQuery);