/*
	author: moghya.me
*/
function validate(value){
	if(value==undefined){
		throw new Error('No or Undefined argument');
	}
	return value;
	/*	Just thought as an addition.
		If variable number of arguments will be passed and have to check each one of it.
	*/

	/*
		var lenOfArguments = arguments.length;	
		if(lenOfArguments==0)	throw new Error('No or Undefined argument');
		for(var i=0;i<lenOfArguments;i++){
			if(arguments[i]==undefined){
				throw new Error('No or Undefined argument');
			}
		}
	*/

}