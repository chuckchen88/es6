/**结构赋值**/


 //数组结构赋值
 //对象
 //字符串
 //布尔值
 //函数参数
 //数值

{
	let a,b,rest;
	[a,b] = [1,2];    //数组结构赋值
	console.log(a,b);  //1,2
}

{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6]; //数组结构赋值
	console.log(a,b,rest); //1,2,[3,4,5,6]
}

{
	let a,b;
	({a,b}={a:1,b:2});    //对象结构赋值
	console.log(a,b); //1,2
}


/**
* 
*/
{
	let a,b,c,rest;
	[a,b,c=3] = [1,2];    //数组结构赋值   默认值3 ， 如果没有匹配上则为undefined
	console.log(a,b,c);  //1,2,3
}
//结构赋值应用场景
{
	let a = 1;
	let b = 2;
	[a,b] = [b,a];  //变量交换
	console.log(a,b);  //2,1
}

{
	function f(){
		return [1,2];
	}
	let a,b;
	[a,b]=f();
	console.log(a,b); //1,2
}

{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b]=f();
	console.log(a,b); //1,4
}

{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b]=f();
	console.log(a,b); //1,[2,3,4,5]
}

{
	let o = {p:42,q:true};
	let {q,p} = o;
	console.log(p,q);//42,true;
}

{
	let {a=10,b=5} = {a:3};
	console.log(a,b);//3,5
}

{
	let metaData = {
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]} = metaData;
	console.log(esTitle,cnTitle);//abc,test
}














































