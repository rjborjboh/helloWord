var $ = require('jquery');
require('../css/ab.css');
import aImgSrc from './../images/yangzhuangsi.gif';
exports.addDiv = function(){
	return $('<div class="red"></div>').get(0);
};
exports.addImg = function(){
	var img = $('<img class="image"/>').get(0);
	img.src = aImgSrc;
	return img;
};