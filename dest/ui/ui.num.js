define(["UIView",getAppUITemplatePath("ui.num")],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.datamodel={min:1,max:9,curNum:1,addClass:"num-add",minusClass:"num-minus",curClass:"num-value-txt",unit:"个",needText:!0},this.template=b,this.events={"click .num-minus":"minusAction","click .num-add":"addAction","focus .num-value-txt":"txtFocus","blur .num-value-txt":"txtBlur"}},initElement:function(){this.curNum=this.$(".num-value-txt")},txtFocus:function(){this.curNum.val("")},txtBlur:function(){this.setVal(this.curNum.val())},addAction:function(){this.setVal(this.datamodel.curNum+1)},minusAction:function(){this.setVal(this.datamodel.curNum-1)},changed:function(a){0},setVal:function(a){var b=!0,c=this.datamodel.curNum;""==a&&(a=c),a==parseInt(a)&&(a=parseInt(a),this.datamodel.curNum=a,a<this.datamodel.min&&(this.datamodel.curNum=this.datamodel.min),a>this.datamodel.max&&(this.datamodel.curNum=this.datamodel.max),b=this.datamodel.curNum!=c),this.resetNum(b)},resetNum:function(a){this.refresh(),a&&this.changed.call(this,this.datamodel.curNum)},initialize:function($super,a){$super(a)},resetPropery:function(){return this.datamodel.curNum>this.datamodel.max?this.datamodel.curNum=this.datamodel.max:this.datamodel.curNum<this.datamodel.min&&(this.datamodel.curNum=this.datamodel.min),this.datamodel},addEvent:function($super){$super(),this.on("onCreate",function(){this.$el.addClass("cui-add")})}})});