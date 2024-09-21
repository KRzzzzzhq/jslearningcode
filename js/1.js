String.prototype.formatTime = function formatTime(template){

	// 初始化模板
	typeof template ==='undefined'?template ="{0}年{1}月{2}日{3}:{4}:{5}" :null;

	// this:要处理的字符串
	// 获取日期字符串中的数字信息
	let matchAry = this.match(/\d+/g);

	//模板和数据的渲染(引擎机制)
	template =template.replace(/\{(\d+)\}/g,(x,y)=>{
		let val = matchAry[y]|'00';
		val.length<2?val='0'+ val : null;
		return val;
});
	return template;
}

let time = '2024-9-8 22:36:00';
console.log(time.formatTime("{1}-{2} {3}:{4}"));