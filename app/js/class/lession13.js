/**promise**/
/*
异步解决方案  解决异步操作问题  更适合异步操作
作用
用法
*/

{
	//模拟ajax
	let ajax = function(cb){
		console.log('start');
		setTimeout(function(){
            cb&&cb.call()
		},1000);
	}
	ajax(function(){
		console.log('timeout1');    //timeout1
	})
}

{   //可读性 可维护性提高
	let ajax = function(){
		console.log('start2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve('hi');
			}, 1000);
		})
	}
	ajax().then(function(data){
		console.log('timeout2',data); //timeout2 hi
	})
}

{
	let ajax = function(){
		console.log('start3');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve('hi');
			}, 1000);
		})
	}
	ajax().then(function(data){
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve('hi222222');
			}, 2000);
		})
	}).then(function(data){
		console.log('timeout3',data);
	})
}

//捕获错误
{
	let ajax = function(num){
		console.log('start4');
		return new Promise(function(resolve,reject){
			if(num>5){
				resolve();
			}else{
				throw new Error('错误了');
			}
		})
	}
	ajax(3).then(function(){   //错误了
		console.log('6');
	}).catch(function(err){
		console.log(err);
	})
}

//promise.all 
{
	//所有图片加载完
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}

	Promise.all([   //全部加载完后
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg'),
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg'),
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg')
	]).then(showImgs);
}

{
	//所有图片加载完
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(){
				reject(err);
			}
		})
	}

	function showImgs(img){
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	Promise.race([  //只要有一个加载完 仅显示这一个
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg'),
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg'),
		loadImg('http://www.chuckchen.top/static/img/home_works.e86eadc.jpg')
	]).then(showImgs);
}






















