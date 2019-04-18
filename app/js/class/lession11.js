/**proxy reflect**/

/*概念
应用场景
*/

{
	//原始数据对象
	let obj = {
		time:'2017-03-11',
		name:'net',
		_r:123
	}
	//代理 读取
	let monitor = new Proxy(obj,{
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018');
		},
		//拦截对象设置属性
		set(target,key,value){     //target => obj    key=>obj.key   value值
			if(key ==='name'){
				return target[key] = value;
			}else{
				return target[key];
			}
		},
		//判断对象是否存在某个属性
		has(target,key){
			if(key === 'name'){   //仅暴露name属性
				return target[key];
			}else{
				return false;
			}
		},
		//拦截删除
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){  //_开头
				delete target[key];
				return true;
			}else{
				return target[key];
			}
		},
		//拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time');  //如果是time 不返回
		}
	})

	//用户访问对象
	console.log(monitor.time); //2018-03-11
	monitor.time = '2019';
	monitor.name = 'chuckchen';
	console.log(monitor.name);   //chuckchen


	console.log('name' in monitor,'time' in monitor);  //true  false
/*
	delete monitor.time;
	console.log(monitor); //{time: "2017-03-11", name: "chuckchen", _r: 123}

	delete monitor._r;
	console.log(monitor); //{time: "2017-03-11", name: "chuckchen"}*/

	console.log(Object.keys(monitor));  //["name", "_r"]
}	



//reflect

{
	//原始数据对象
	let obj = {
		time:'2017-03-11',
		name:'net',
		_r:123
	}

	console.log(Reflect.get(obj,'time')); //2017-03-11
	Reflect.set(obj,'name','hello');
	console.log(obj); //{time: "2017-03-11", name: "hello", _r: 123}
	console.log(Reflect.has(obj,'name')); //true
}


//解耦
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`不能设置${key}到${value}`);
					}
				}else{
					throw Error(`${key}不存在`);
				}
			}
		})
	}

	const personValdators = {
		name(val){
			return typeof val === 'string';
		},
		age(val){
			return typeof val === 'number' && val>18;
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValdators);
		}
	}

	const person = new Person('chuck',24);
	console.info(person);
	person.name = 'hahahaha';
	console.info(person);

	//person.name = 123;  //不能设置name到123
}























