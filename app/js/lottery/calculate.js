class calculate{
	//计算注数
	computeCount(active,play_name){
		let count = 0;
		const exist = this.play_list.has(play_name);
		const arr = new Array(active).fill(0);//指定长度为active的元素都为0的数组
		if(exist && play_name.at(0) === 'r'){
			count = Calculate.combine(arr,play_name.split('')[1]);   //以类名引用的方法必须为静态方法
		}
		return count;
	}

	//组合运算
	static combine(arr,size){
		let allResult = [];
		(function(arr,size,result){
			let arrLen = arr.length;
			if(size>arrLen){
				return;
			}
			if(size === arrLen){
				allResult.push([].concat(result,arr));
			}else{
				for(let i=0;i<arrLen;i++){
					let newResult = [].concat(result);
					newResult.push(arr[i]);
					if(size === 1){
						allResult.push(newResult);
					}else{
						let newArr = [].concat(arr);
						newArr.splice(0,i+1);
						f(newArr,size-1,newResult);
					}
				}
			}
		})(arr,size,[])
	}
}