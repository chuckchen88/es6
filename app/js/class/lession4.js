/**字符串扩展**/

//Unicode表示法
//遍历接口
//模板字符串
//新增方法（10种）

{
	console.log('a',`\u0061`);
	console.log('s',`\u20BB7`);  //大于两个字节
	console.log('s',`\u{20BB7}`);
}

{
	let s = '𠮷';
	console.log(s.length); //2

	console.log(s.charAt(0));
	console.log(s.charAt(1));

	console.log(s.charCodeAt(0)); //55362
	console.log(s.charCodeAt(1));//57271

	let s1 = '𠮷a';
	console.log(s1.length); //3
	console.log(s1.codePointAt(0));  //134071
	console.log(s1.codePointAt(0).toString(16)); //20bb7

	console.log(s1.codePointAt(1));//57271
	console.log(s1.codePointAt(2));//97

}

{
	console.log(String.fromCharCode('0x20bb7'));
	console.log(String.fromCodePoint('0x20bb7'));
}

{
	let str = '\u{20bb7}abc';
	//es5
	for(let i=0;i<str.length;i++){
		console.log(str[i]);
	}
	//es6
	for(let code of str){
		console.log(code);
	}
}

{
	let str = 'string';
	console.log(str.includes('s'));//true
	console.log(str.startsWith('str'));//true
	console.log(str.endsWith('ng'));//true
}

{
	let str = 'abc';
	console.log(str.repeat(2));//重复次数  abcabc
}

{
	let name = 'list';
	let info = 'hello chuck';
	let m = `i am ${name},${info}`;
	console.log(m);
}

//es7草案
{
	console.log('1'.padStart(2,'0'));  //补空白  第一位长度 第二位参数  01
	console.log('1'.padEnd(2,'0'));  //10
}
//标签模板
{
	let user = {
		name:'list',
		info:'hello chuck'
	}
	console.log(abc`i am ${user.name},${user.info}`);  //i am ,,,listhello chuck
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}


{
	console.log(String.raw`Hi\n${1+2}`); //Hi\n3    对反斜杠进行转义 
	console.log(`Hi\n${1+2}`); //Hi n3
}













