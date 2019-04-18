/**数组扩展**/

/*
Array.from
Array.of
copyWithin
find\findIndex
fill
entries\keys\values
includes*/

{
	let arr = Array.of(3,4,7,9,11);
	console.log(arr); //[3,4,7,9,11]

	let empty = Array.of();
	console.log(empty); //[]
}


{
	let p = document.querySelectorAll('p');  //集合
	let pArr = Array.from(p);   //集合转数组
	pArr.forEach(function(item){
		console.log(item.textContent);   //输出所有p标签里的内容
	})

	console.log(Array.from([1,2,3],function(item){   //相当于map映射
		return item*2;   //[2,4,6]
	}));
}

{
	console.log([1,'a',undefined].fill(7));  //[7,7,7]
	console.log(['a','b','c','d','e','f','g'].fill(7,1,3));  //替换为7 起始位置为1   3为长度    ['a',7,7,'d','e','f','g']
}

{
	for(let index of ['1','c','ks'].keys()){
		console.log(index);    //返回下标   0,1,2
	}
	for(let value of ['1','c','ks'].values()){
		console.log(value);    //返回值  '1','c','ks'
	}
	for(let [index,value] of ['1','c','ks'].entries()){
		console.log(index,value);    //返回键值  
	}
}

{
	console.log([1,2,3,4,5,6,7,8].copyWithin(0,3,5));  //[4, 5, 3, 4, 5, 6, 7, 8]    从0开始替换  复制开始位置3（包括第3）  复制截止位置5 （不包括第5）  
}

//查找 常用
{
	console.log([1,2,3,4,5,6].find(function(item){
		return item>3;   //4    只找出第一个  值
	}));

	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item>3;   //3    只找出第一个  下标
	}));
}

{
	console.log([1,2,3,NaN].includes(NaN));  //是否包括某个元素   true
}





















