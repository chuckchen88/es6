/**函数扩展**/

/*参数默认值
rest参数    ...
扩展运算符   
箭头函数
this绑定
尾调用*/

{
	function test(x,y = 'chuck'){   //参数默认值
		console.log(x,y);   //undefined 'chuck'
	}
	test('hello');
}

//作用域
{
	let x = 'test';
	function test2(x,y=x){  //优先内部
		console.log(x,y);   //kill kill
	}
	test2('kill');
}

{
	function test3(...arg){    //伪数组  转化为数组
		for(let v of arg){
			console.log(v);
		}
	}
	test3(1,2,3,4,4,5);
}

//扩展运算符
{
	console.log(...[1,2,3]); // 1 2 3
	console.log('a',...[1,2,3]);
}

{
	let arrow = v => v*2;   //箭头函数   v参数
	console.log(arrow(3));  //6
	let arrow2 = ()=> 5;
	console.log(arrow2());
}

//尾调用   提升性能
{ 
	function tail(x){
		console.log(x);
	}
	function fx(x){
		return tail(x);   //尾调用
	}
	fx(123);
}








