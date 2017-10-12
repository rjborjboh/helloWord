var amomemt = require('moment');
import '../css/cd.css';
exports.nowTime = function(){
	var time = amomemt().format();
	console.log(time);
};