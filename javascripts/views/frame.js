(function(){
    window.svgb.FrameView = Backbone.View.extend({
    tagName: 'svg',
    className: this.model ? 'svgb ' + this.model.attributes.css : 'svgb',
    
    mousemove: function(evt){
      this.coord = {};
      evt = evt || window.event;
      if(evt.pageX || evt.pageY){
        this.coord =  { x:evt.pageX , y:evt.pageY };
      }
      this.model.coord =  {
        x:evt.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:evt.clientY + document.body.scrollTop  - document.body.clientTop
      };
      
    },  
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template($('#tmpl-svgb-frame').html());
      if (this.options.stages) this.options.stages.bind('reset', this.render);
      if (this.options.controls) this.options.controls.bind('reset', this.render);
    },
    render: function(){
      var $stages_el,
        $controls_el,
        stages = this.options.stages,
        controls = this.options.controls;
      this.template = _.template($('#tmpl-svgb-frame').html());
      
      $(this.el).html(this.template(this.model.toJSON()));

      $stages_el = this.$('.stages');

      stages.each(function(stage){
        var view = new svgb.StageView({
          model: stage,
          collection: stages
        });
        var view = view.render().el;
        $stages_el.append(view);
      });
      
      $controls_el = this.$('.controls');
      if (controls) controls.each(function(control){
        var view = new svgb.ControlView({
          model: control,
          collection: controls,
          events: this.mousemove
        });
        var view = view.render().el;
        $controls_el.append(view);
      });
      

      $(this.el).mousemove(_.bind(this.mousemove,this));
      
      return this;
    },
    updateView: function(context){
      context.append(this.render().el);      
    },
    append: function(content, stage_name, layer ){
      if (typeof stage_name != "undefined"){
        $(this.el).find("g." + stage_name + " g."+ layer).append(content);  
      } else {
        $(this.el).append(content);  
      }
    }
  });
})();