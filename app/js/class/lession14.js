/**Iterator**/

/*概念     操作数据   不同数据结构 
用法
for ... of
*/

{
	let arr = ['hello','workd'];
	let map = arr[Symbol.iterator]();

	console.log(map.next());
	console.log(map.next());
	console.log(map.next());

	/*{value: "hello", done: false}
	{value: "workd", done: false}
	{value: undefined, done: true}*/
}


{
	let obj = {
		start:[1,3,2],
		end:[7,8,9],
		[Symbol.iterator](){
			let self = this;
			let index = 0;
			let arr = self.start.concat(self.end);
			let len = arr.length;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}

	for(let key of obj){
		console.log(key);
	}
}

{
	let arr = ['hello','chuck'];
	for(let value of arr){
		console.log(value);
	}
}



























