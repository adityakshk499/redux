# Reducer - 
It is nothing but a simple function that took Action and state as an argument and always return a state object.

# store.getState() - 
always return the object of state.

# store.dispatch({}) - 
will dispatch and store the dispatch object in reducer function argument action and behave the same .

# immuutability -
 Dont change your state directly because objects are immutable and you will not get previous state information.

# store.subscribe -
 it is a callback function which will take a function that function will run every time when your state is going to change.

# middleware -
 the middleware function is the function that will run every time when the state is going to change or any action is going on it will run just before the reducer function calls. it will be declared in store function after the reducer function declarations.

 # Actuion creator function - 
 Same thing happen here the the object will return with all type and payloads and it will call in store.dispatch function

 # action name constant - 
 make the action type name constant so that it can be easy or any type will not give any error


 # action creator should just return the plain object no await is tollerated by redux   

 #Hello world