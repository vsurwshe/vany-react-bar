import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { reducer as reduxFormReducer } from 'redux-form';
import LoginState from './reducres/LoginState';
// this function save state into local storage.
const saveToLocalStorage=(state)=>{
    try{
      const seralizedState= JSON.stringify(state);
      sessionStorage.setItem("globalState",seralizedState);
    //   localStorage.setItem("globalState",seralizedState);
    }catch(error){
      console.error("Error Occured in saveing value to storage",error);
    }
}
  
// this functions return the state value form local stoage.
const loadFormLocalStorgae=()=>{
  try{
    const serializedState= sessionStorage.getItem("globalState");
  //   const serializedState= localStorage.getItem("globalState");
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  }catch(error){
    console.error("Error Occured in fetching value from storage",error)
    return undefined;
  }
}
  
// this is creating perseting state values with store
const persistedState= loadFormLocalStorgae();
  
// in this function we combine the differnt reducer for single store
const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  LoginState
});
  
// this functions apply logger funtionality during development mode 
const enhancer= compose(applyMiddleware(thunk, logger));
  
// this is common action through out application will be used
const initialState = reducer({},{},{},{})
const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    state = initialState
  }
  return reducer(state, action)
}

// this function will be createing store
const store = createStore(rootReducer, persistedState, enhancer);

// this function get the store from local storage
store.subscribe(()=> saveToLocalStorage(store.getState()))
  
export default store
