define(["UIView",getAppUITemplatePath("ui.switch")],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.template=b,this.datamodel={checkedFlag:!1,checkedClass:"current"}},initialize:function($super,a){$super(a)},changed:function(a){0},initElement:function(){this.el=this.$(".cui-switch"),this.switchBar=this.$(".cui-switch-bg")},checked:function(){this.getStatus()||(this.el.addClass("current"),this.switchBar.addClass("current"),this.datamodel.checkedFlag=!0,this._triggerChanged())},unChecked:function(){this.getStatus()&&(this.el.removeClass("current"),this.switchBar.removeClass("current"),this.datamodel.checkedFlag=!1,this._triggerChanged())},_triggerChanged:function(){"function"==typeof this.changed&&this.changed.call(this,this.getStatus())},getStatus:function(){return this.datamodel.checkedFlag},addEvent:function($super){$super(),this.on("onCreate",function(){this.$el.addClass("cui-switch")}),this.on("onShow",function(){_.flip(this.$el,"left",$.proxy(function(){this.unChecked()},this)),_.flip(this.$el,"right",$.proxy(function(){this.checked()},this)),_.flip(this.$el,"tap",$.proxy(function(){this.getStatus()?this.unChecked():this.checked()},this))}),this.on("onHide",function(){_.flipDestroy(this.$el)})}})});