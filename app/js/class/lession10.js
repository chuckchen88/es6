/***set map**/

/*Set WeakSet用法
Map WeakMap用法*/    //key可以任何数据类型


{
	let list = new Set();   //集合
	list.add(5);
	list.add(7);
	console.log(list);   //{5,7}  集合
	console.log(list.size);   //长度 2
}

{
	let list = new Set([1,2,3,4,5,5,5,5,5]);
	console.log(list);  //{1,2,3,4,5}  数组转化成集合并去重   
}

{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);
	console.log(list); // {1,2}   元素唯一  不可重复

	let arr = [1,2,3,4,3,2,5,'2'];
	let list2 = new Set(arr);

	console.log([...list2]);  //[1, 2, 3, 4, 5, "2"]    ...表示取出list2所有元素
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);
	console.log(list.has('add'));  // true 判断是否存在add元素
	console.log(list.delete('add'));   //true 
	list.clear();
	console.log(list);  //清空  {}
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);

	//遍历 key of
	for(let key of list.keys()){
		console.log(key);    //'add','delete','clear','has'
	}
	for(let value of list.values()){
		console.log(value);  //'add','delete','clear','has'
	}
	for(let value of list){
		console.log(value);  //'add','delete','clear','has'
	}
	for(let [key,value] of list.entries()){
		console.log(value);  //'add','delete','clear','has'
	}


	list.forEach(function(item){
		console.log(item);  //'add','delete','clear','has'
	});
}


//WeakSet
{
	let weakList = new WeakSet();//与set支持数据类型不一样，1、weakset 支持类型只能是对象；2、弱引用（地址引用） 没有size属性及某些方法

	let arg = {};

	weakList.add(arg);
	console.log(weakList);  //

	//weakList.add(2); //报错 Invalid value used in weak set at WeakSet.add   没有clear   其他都有
}

//Map
{
	let map = new Map();  //key 可以为任何数据类型
	let arr = ['123'];
	map.set(arr,456);  //添加元素  第一个参数是key 第二个是值
	console.log(map,map.get(arr)); //{Array(1) => 456}    456
}

{
	let map = new Map([['a',123],['b',456]]);   //必须是两项
	console.log(map);   //{"a" => 123, "b" => 456}   转化为json对象
	console.log(map.size);  //2
	//set get delete clear
}
{
	//map遍历与set一样
}

//WeakMap
{
	let weakMap = new WeakMap(); // 没有size clear 不能遍历  key只支持对象
	let o = {

	};
	weakMap.set(o,123);
	console.log(weakMap.get(o));  //123
}


/**map-set 数据结构**/
/*
Map与Array的对比
Set与Array的对比*/
{
	//数据结构横向对比 增、删、改、查
	let map = new Map();
	let array = [];

	//增
	map.set('t',1);
	array.push({'t':1});  //或unshift

	console.log(map,array);

	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item=>item.t);

	console.log(map_exist,array_exist);   //true  {t: 1}

	//改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');

	console.log(map,array);

	//删
	map.delete('t');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1); //删除

	console.log(map,array);
}

{
	//数据结构横向对比 增、删、改、查
	let set = new Set();
	let array = [];

	//增
	set.add({t:1});
	array.push({t:1});

	console.log(set,array);

	//查
	let set_exist = set.has({t:1}); //false
	let array_exist = array.find(item=>item.t);

	console.log('==================',set_exist,array_exist);   //true  {t: 1}

	//改
	set.forEach(item=>item.t?item.t=2:'');  //也用foreach
	array.forEach(item=>item.t?item.t=2:'');

	console.log(set,array);

	//删
	set.forEach(item=>item.t?set.delete(item):''); 
	let index = array.findIndex(item=>item.t);
	array.splice(index,1); //删除

	console.log(set,array);
}


/**map set 与 Object对比**/
{
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	set.add(item);
	map.set('t',1);
	obj['t'] = 1;

	console.log(obj,map,set);

	//查
	console.info({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	});


	//改
	map.set('t',2);
	item.t = 2;
	obj['t'] = 2;
	console.log(obj,map,set);

	//删
	map.delete('t'); //成本最低
	set.delete(item);
	delete obj['t'];
	console.log(obj,map,set);
}




















