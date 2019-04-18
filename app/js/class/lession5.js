/**数值扩展**/

//新增方法
//方法调整


{
	console.log(0b111110111);//二进制
	console.log(0o767);
}

{
	Number.isFinite(15);//是否是有效的 有限的
	console.log(Number.isFinite(NaN));  //FALSE
	console.log(Number.isFinite(1/0)); //FALSE

	console.log(Number.isNaN(NaN));//true
	console.log(Number.isNaN(0));  //false
}

{
	Number.isInteger(25);//是否是整数
	console.log(Number.isInteger(213));  //true
	console.log(Number.isInteger(213.0));  //true
	console.log(Number.isInteger(213.1));  //false
	console.log(Number.isInteger('213'));  //false
}

{
	//-2的
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);

	console.log(Number.isSafeInteger(10)); //判断是否在上述数字区间，不包括起始和结束的数值 true
	console.log(Number.isSafeInteger('10'));//false
}

{
	Math.trunc();    //取整
	console.log(Math.trunc(4.1));// 4
	console.log(Math.trunc(4.9));//4
}

{
	console.log(Math.sign(-5)); //-1   判断整数 负数 0
	console.log(Math.sign(0)); //0   判断整数 负数 0
	console.log(Math.sign(5)); //1   判断整数 负数 0

	console.log(Math.sign('50')); //  1
	console.log(Math.sign('sfsdf'));   //NaN
}

//立方根
{
	Math.cbrt(-1);
	console.log(Math.cbrt(-1)); // -1
	console.log(Math.cbrt(8)); //8
}