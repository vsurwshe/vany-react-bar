import React,{useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, reset } from 'redux-form';
import { API_EXE_TIME } from '../../config/Config';
import * as LoginAction from "../../redux/actions/LoginAction";
import { renderSanckBar, renderTextFiled } from '../../utilites/FromUtilites';
import Loader from '../loader/Loader';

const Login = (props) => {
    const [load, setLoad] = useState(false);
    const { GetLogin, saveMessage }=props.LoginAction
    const { message, color }=props.LoginState
    const callLoginAction=async(propsData)=>{
        await setLoad(true);
        await GetLogin(propsData);
        setTimeout(async () => {
            await setLoad(false);
            await saveMessage("", "");
        }, API_EXE_TIME)
    }
    return <div className="row justify-content-md-center">
        <div className="col-sm col-xl-4">
            <div className="card" style={{ marginTop: "10%" }}>
                <div className="card-header">
                    <center><h2>Bar Account Login</h2></center>
                </div>
                {(message && color && message !== "" && color !== "") && renderSanckBar({ open: (message && color && message !== "" && color !== "") ?true :false, color,message})}{(message && color && message !== "" && color !== "") && renderSanckBar({ open: (message && color && message !== "" && color !== "") ?true :false, color,message})}
                <div className="card-body">
                    <LoginFrom
                     loading={load}
                     saveMethod={callLoginAction}
                    />
                </div>
            </div>
        </div>
    </div>
}

// this component will load the Login Form component
let LoginFrom=(props)=>{
    const { saveMethod, pristine, submitting, handleSubmit, loading, message, color } = props
    return <form  onSubmit={handleSubmit(saveMethod)}>
        <Field name="user_email" component={renderTextFiled} placeholder="Enter your registerd email id" type="email" label="Email" />
        <Field name="password" component={renderTextFiled} placeholder="Enter your password" type="password" label="Password" />
        <center>
            {loading ? <Loader size={40}/> :<button type="submit" style={{ marginTop: 20 }} disabled={pristine || submitting} className="btn btn-primary">Log in your account</button> }
        </center>
    </form>
}

// this section will intilized the login from
const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
LoginFrom = reduxForm({ form: "Login", onSubmitSuccess: afterSubmit })(LoginFrom)


// this section will intilized the redux state and action
const mapStateToProps = state => { return state; }
const mapDispatchToProps = dispatch => ({
    LoginAction: bindActionCreators(LoginAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);