import React from 'react';
import { connect } from 'react-redux';
import Login from './compoent/login/Login';

import Main from './compoent/Main'

const App=(props)=>{
  const {authrizations }=props.LoginState
  return (authrizations && authrizations !=="") ? <Main />: <Login />
}

const mapStateToProps=state=>{return state}
export default connect(mapStateToProps)(App);
