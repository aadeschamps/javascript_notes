# The call and apply methods (with the bind mixed in)

### What they are

The call and apply methods are ways to invoke functions with this pointing to specific objects. They only differe in how they take arguments.

### Call

The call method allows you to send a function a context (a 'this'), and argument like another function.

``` javascript	
	
	function test(belongs, to){
		return belongs + ' ' + to + ' ' + this.example
	}

	var object = {
		example: 'example'
	}

	var belongs = 'belongs';
	var to = 'to';

	test(belongs, to)   // returns 'belongs to undefined'
	test.call(object, belongs, to); // returns 'belongs to example'


```
As you can see, the object becomes this for the function, and the belongs and to variables are treated as paramters.

### Apply

The apply method allows you to send a function a context (a 'this'), and all arguments in an array data structure.

``` javascript	
	
	function test(belongs, to){
		return belongs + ' ' + to + ' ' + this.example
	}

	var object = {
		example: 'example'
	}

	var belongs = 'belongs';
	var to = 'to';

	test(belongs, to)   // returns 'belongs to undefined'
	test.apply(object, [belongs, to]); // returns 'belongs to example'

```

As you can see, the object becomes this for the function, and the belongs and to variables are treated as paramters (in the order of the arguments array being given).