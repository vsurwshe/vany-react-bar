const initialState={
    authrizations:"",
    username:"",
    userDetails:[],
    message:"",
    color:""
}

const LoginState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SET_AUTHRIZATION":
            return {...state, userDetails:action.loginData.usersDto , authrizations: action.loginData.token}
        case "SET_LOGIN_MESSAGE":
            return {...state, message: action.message, color:action.color}
        default:
            return state;
    }
}

export default LoginState;