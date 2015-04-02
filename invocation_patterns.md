
# Invocation

There are four main invocation patterns that you should know. The main difference between them is the value of this.

### Method invocations

The method invocation is when you call a paramter on an object that returns a function, followed by (). The value of this becomes the object that it is apart of.

### Function Invocation

The function invocation is when you simply call a function (like normal). The value of this actually becomes the global object. This was a mistake by the writer of javascript. Be aware of this when you try to call a function within another function and use the this keyword.

### Constructor Invocation

This is when you call the new operator on a function. the this becomes the object is returned. A link to the prototype of that function is also formed. 

### Apply Invocation

This is when you use the .apply() method on a function. The value of this is set with the first argument given, and the arguments with the second argument given. 