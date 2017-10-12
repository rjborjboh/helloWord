
var aExpt = require('./ab.js');
var cExpt = require('./cd.js');

document.body.appendChild(aExpt.addDiv());
document.body.appendChild(aExpt.addImg());

cExpt.nowTime();

console.log('页面加载完毕!');