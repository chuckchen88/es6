/**Decorators**/

/*
函数
修改行为  
修改类的行为  
*/


{
	let readonly = function(target,name,descriptor){
		descriptor.writable = false;
		return descriptor;
	}
	class Test{
		@readonly   //与上方一致  修饰器
		time(){
			return '2018-03-11';
		}
	}

	let test = new Test();
	console.log(test.time());

	/*test.time = function(){
		console.log('reset time');
	}*/

	console.log(test.time());  //Cannot assign to read only property 'time' of object
}

{
	let typename = function(target,name,descriptor){
		target.myname = 'hello';
	}
	@typename
	class Test{

	}

	console.log(Test.myname);

	//第三方库 core-decorators
}

{
	let log = (type) => {
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.info('ad is show');
		}
		@log('click')
		click(){
			console.info('ad is click');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}



