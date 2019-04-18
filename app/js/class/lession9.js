/**Symbol**/

/*Symbol 概念  唯一性
Symbol 作用*/

{
	//声明
	let a1 = Symbol();
	let a2 = Symbol();

	console.log(Object.is(a1,a2));  //false

	let a3 = Symbol.for('a3');  //key值
	let a4 = Symbol.for('a3');

	console.log(a3 === a4);  //true

}

{
	//应用场景
	let a1 = Symbol.for('abc');
	let obj = {
		[a1] : '123',   //不会造成冲突
		'abc' : 345,
		'c' : 436
	}

	console.log(obj);  //{abc: 345, c: 436, Symbol(abc): "123"}

	//但是循环取不到symbol 值
	for(let [key,value] of Object.entries(obj)){
		console.log(key,value);   //abc 345 c 436
	}

	//getOwnPropertySymbols   仅仅取到了symbol的值
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);   // 123
	})

	//获取所有
	Reflect.ownKeys(obj).forEach(function(item){
		console.log(obj[item]);  //345 436 123
	}) 
}