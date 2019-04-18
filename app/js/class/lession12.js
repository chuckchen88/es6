/**类**/
/*
概念
基本语法
类的继承
静态方法
静态属性
getter
setter
*/


{
	//定义类
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}
	}
	let v_parent = new Parent('v');
	console.log(v_parent);  //Parent {name: "v"}
}

{
	//继承
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}
	}
	class Child extends Parent{

	}
	console.log(new Child());  //Child {name: "chuck"}

}

{
	//继承
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}
	}
	class Child extends Parent{
		constructor(name = 'Child'){
			super(name);  //参数列表
			this.type='child';   //子类添加属性时  必须放在super之后
		}
	}
	console.log(new Child());  //_Child {name: "Child", type: "child"}

}


//getter setter
{
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}

		get longName(){  //属性  并非函数
			return 'ch'+this.name
		}

		set longName(value){
			this.name = value;
		}
	}

	let v = new Parent();
	console.log(v.longName);//chchuck
	v.longName = 'mkhello';
	console.log(v.longName);//chmkhello
}

//静态方法
{
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}

		
		static tell(){   //静态方法  通过类调用 并非通过类实例调用
			console.log('tell');
		}
	}

	Parent.tell();//tell
}

//静态属性
{
	class Parent{
		constructor(name='chuck'){
			this.name = name;
		}

		
		static tell(){   //静态方法  通过类调用 并非通过类实例调用
			console.log('tell');
		}
	}
	Parent.type = 'test';   //直接在类上定义
	console.log(Parent.type);   //test
}





















