
# Understanding the 'this' object

The this object can be very confusing as it refers to different objects in different contexts. Lets have a look at these contexts.


### Function Calls

In normal function calls, the this is not actually bound to anything and is thus undefined. In non-strict mode, JavaScript defaults a undefined this value to the global object (in the browser this is the window).

``` javascript
	
	function example(){
		console.log(this);
	}

	example(); // prints the global window

```

### Method invocation

Calling a method is much different. The this value gets bound to the object in which it is sitting in.

``` javascript

	var example = {
		method: function(){
			console.log(this)
		}
	}

	example.method() // prints the example object

```

One of the things to remember, however, is that passing a method to a callback function changes the this value. In the example above, we invoked the method on the example object. Lets take a look at anoether example, one that takes a callback.

``` javascript

	var example = {
		method: function(){
			console.log(this)
		}
	}

	function useExample(method){
		method();
	}

	useExample(example.method); // prints global object

```

Example.method does not invoke the method on the object, but instead returns the function that its assigned to. When the function is called, it is no longer bound to the example object, but is invoked like a normal function invocation (see above) and is therefore not bound to any this (defaults to global object). 

This is especially important in using objects and their methods in event listeners where you want change the state of an object. In order to do this you need to use the .bind prototype method.

``` javascript

	var example = {
		method: function(){
			console.log(this)
		}
	}

	function useExample(method){
		method();
	}

	useExample(example.method.bind(example); 
	// prints example object

```


more to come...