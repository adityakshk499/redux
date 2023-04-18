import { createStore, applyMiddleware , combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";
const init = "init";
const store = createStore(combineReducers({account : accountReducer , bonus: bonusReducer}), applyMiddleware(logger.default , thunk.default));

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {

    case init:
        return  {amount: action.payload }

    case inc:
      return { amount: state.amount + 1 };

    case dec:
      return { amount: state.amount - 1 };

    case incByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = { points : 0 }, action) {
    switch (action.type) {
  
   
  
      case inc:
        return {points : state.points + 1 };
  
   
  
  
      default:
        return state;
    }
  }

//Async api call 




// Action creator
 function getUser(id) {
    return async (dispatch , getState) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`)
        dispatch(initUser(data.amount));
    }

}

function initUser(value) {
  return { type: init , payload:value };
}

function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmount(value) {
  return { type: inc, payload: value };
}

// setInterval(() => {
//   store.dispatch(initUser(20));
// }, 2000);

store.dispatch(increment());


// console.log(store.getState())