
# Function Currying

### Meaning

Function currying is creating a 'partial' function from another, preassigning some of its arguments. 

### Implementation

There is not native curry function in JS, but here is how you can add it to the function prototye:

``` javascript
	
	function toArray(args){
		return Array.prototype.splice(args);
	}


	Function.prototype.curry = function(){
		var that = this;
		var args = toArray(arguments);

		return function(){
			return that.apply(this, args.concat(toArray(arguments)))
		}
	}

``` 

Notes:
* when you create a function, you can now call .curry on it with any number of arguments
* the that=this statement preserves the original methods state
* the args = toArray(arguments) statement preserves the origin arguments
* We return a function that has the original functions state and arguments in its closure space
* when the new function is called, it calls the origin function, but always concatates the original functions arguments into the new arguments.

Resources:
* https://javascriptweblog.wordpress.com/2010/04/05/curry-cooking-up-tastier-functions/

* Javascript the good parts