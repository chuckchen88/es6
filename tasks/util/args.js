import yargs from 'yargs';   //处理命令行参数

const args = yargs

	.option('production',{
		boolean:true,
		default:false,
		describe:'min all scripts'
	})

	.option('watch',{
		boolean:true,
		default:false,
		describe:'watch all files'
	})

	.option('verbose',{    //日志
		boolean:true,
		default:false,
		describe: "log" 
	})

	.option('soursemaps',{
		describe: "force the creation of soursemaps" 
	})

	.option('port',{
		string:true,
		default:8080,
		describe: "server port at 8080" 
	})

	.argv   //以字符串进行解析

 export default args