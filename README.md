# redux/toolkit =
 Redux toolkit is used to state mangement becuase in react usereducers if our application grows state mangement also grows and at some point of time our state grows so huge so that we are not able to manage it anymore that's why react-redux come inot the picture while react/redux is also so complx so thats why we use redux-toolkit instead of all state management , it will give us powerfull api that make our work easy and testable . 

 # 1st step Slices - 
 The 1st step to use redux/toolkit is use the createSlice it is a api build with redux/toolkit and we import it from redux/toolkit the ide behind is to create a reducer function with initial state , with name and type of reducers here  here create slice function tool 3 arguments name , initial state , and reducer object  eg. ==> createslice( name, initial state , reducr{}) , here in name we define the name of slice and in initial state we give the initial state while in reducer we define it as a reducer object where it has key value pairs of action creators , e.g increment : (state,action)+>{return state after perofroming some actions}   hence by this method it is very easy for us to create reducers , and in the end we exports all the named  reducers key from createslice function.action . and the whole createSlice function.rdeucers as export default . 

 # 2nd step : - 
Then in the root componenet e.g index.js we make store with the help of  redux-toolkit we import configurestors it is an api of reduxtoolkit which provides the same functionallity of createstore() and the api took and reducers object with the key value pair of default exported createslice as an reduce .

# 3rd step : - 
    Then in 3rd step we import provider from react-redux which will help us to to drill the whole store in our application . 

# 4th step : - 
    then react give us the two hooks useDispatch() and useSelector() to manupulate our stores , while useDispatch give us a function to invoke the rducers object value function with dispatch(valuename()) here we have to import valuename() from the file and useslector give us the state value . 

 # createAction() : - 
 if you want to Actions without slices you can do it with the help of a createAction("name/reducername") it will took action name/reducername as an argument and we have to export it then it will automatically attach to the reudcer name 

 # createReducer() : - 
it will take two argument initial state and and call back function with the build as an argument than we have to use build.addcase eg ==> const rewardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.points++
      }).addCase(incrementByAmount, (state, action) => {
        state.points += action.payload
      })
     
  })

  as you can see in the example above the builder function took two arguments first the actioncreator and the normal state and action now you can do what you want with it.


  # extraReducer() : - 

  const incrementByAmount = createAction("account/incrementByAmount");
  --------------------------------------------------------------------
    the above line will make a reducer that is attach with name account and reducer incrementByAmount

    now whenever the above reducer will call our below code will execute the action 

    extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1;
      }
    });
  },

