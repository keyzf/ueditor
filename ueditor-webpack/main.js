require('./less-1.7.0.min.js');
require('./colors.js');
require('./colorPicker.data.js');
require('./colorPicker.js');
require('./jqColor.js');

require('./ueditor.config.js');
require('./ueditor.all.js');

var setBackgroundColor = require("exports-loader?setBackgroundColor!./wwei_editor.js");// 导出全局变量
var parseObject = require("exports-loader?parseObject!./wwei_editor.js");// 导出全局变量
var wwei_editor = new UE.getEditor("container",{"tooltype": "phone"});
window.wwei_editor = wwei_editor;



//添加调色板功能
window.onload = function(){
	var e_color = $('#edui2');
	var c_cont = '<div id="border_color" style="height:30px;line-height:30px">色调：<input class="colorPicker color form-control" maxlength="6" size="6" id="colorpickerField" style="width: 70px;border:1px solid #dfdfdf"  value=""> &nbsp;&nbsp;<label class="checkbox inline"><input type="checkbox" id="replace-color-all" value="1">正文换色</label>  </div>';
	e_color.before(c_cont);
	
	$myColorPicker = $('input.color').colorPicker({
	    customBG: '#222',
	    readOnly: true,
	    init: function(elm, colors) { 
	        elm.style.backgroundColor = elm.value;
	        elm.style.color = colors.rgbaMixCustom.luminance > 0.22 ? '#222' : '#ddd';
	    },
	    renderCallback: function(colors, mode) {
	        var co = "#" + colors.HEX;
	        $('#wy-phone-editor-content li').find('*').each(function() {
	               setBackgroundColor(co,'white', true);
	               parseObject($(this),co,'white');
	        })
	        
	        //色版事件
	        $('.cp-app').mouseup(function(){
				$(this).hide()
			})
	        $("input.color").click(function (e) {
	            $(".cp-app").show();

	        });
	    }
	})
	
	
}
