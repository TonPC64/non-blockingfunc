var loop= fucntion(run,done){
	for(var i=0;i<100;i++){
		run(i)
	}
	done()
}

var numFunction=function(number){
	console.log(number)
}
var doneFunction=function(number){
	console.log("Done")
}
loop(numFunction,donFunction)