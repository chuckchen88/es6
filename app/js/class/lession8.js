/**对象扩展**/


/*简洁表示法
属性表达式
扩展运算符
Object新增方法*/





//简洁表示法
{
	let o = 1;
	let k = 2;
	let es5 = {
		o:o,
		k:k
	}
	let es6={
		o,
		k
	}
	console.log(es5,es6);//{o: 1, k: 2} {o: 1, k: 2}


	let es5_method = {
		hello:function(){
			console.log('hello');
		}
	}
	let es6_method = {
		hello(){
			console.log('hi');
		}
	}
	es5_method.hello();
	es6_method.hello();
}

//属性表达式
{
	let a = 'b';
	let es5_obj = {
		a:'c'
	}

	let es6_obj = {
		[a]:'c'   //表达式  a当做变量
	}
	console.log(es5_obj,es6_obj);  //{a: "c"}  {b: "c"}
}


//新增api
{
	console.log(Object.is('abc','abc'));  //判断是否全等 类似 ===
	console.log(Object.is([],[]),[]===[]);   //false false  两个数组不同地址 所以不等

	console.log(Object.assign({a:'a'},{b:'b'}));  //{a: "a", b: "b"}  拷贝第一参数到第二个参数  不会拷贝继承的属性

	let test = {k:123,o:456};
	console.log(Object.entries(test));// [Array(2), Array(2)]
	for(let [key,value] of Object.entries(test)){   //entries  
		console.log([key,value]);
	}
	
}

//扩展运算符
{
	//let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'};  //babel编译支持不太友好
}










