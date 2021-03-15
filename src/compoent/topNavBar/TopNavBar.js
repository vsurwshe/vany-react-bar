import React,{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import * as LoginAction from '../../redux/actions/LoginAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const TopNabBar=(props)=>{
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return <nav className="navbar navbar-expand navbar-light navbar-bg">
    <a className="sidebar-toggle d-flex">
        <i className="hamburger align-self-center"></i>
    </a>
    <LoadSerachForm />
    {CallLogOut({ handleClickOpen, open, handleClose, mainProps: props })}
    <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown"> <LoadNotifications /> </li>
            <li className="nav-item dropdown">
                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                    <i className="align-middle" data-feather="settings"></i>
                </a>
                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                    <img src="img/avatars/user.png" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="pages-settings.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={handleClickOpen}>Log out</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
}

// this compoent calling on Logout 
const CallLogOut = (props) => {
    const { open, handleClose } = props
    const { UserLogout } = (props.mainProps && props.mainProps.LoginAction) && props.mainProps.LoginAction
    return <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <p> Are sure want to log out from this account, if yes click logout account ? </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary"> Cancel</Button>
        {/* This user logout function declare in the login action and state action in store */}
        <Button onClick={UserLogout} color="primary"> Logout Account</Button>
      </DialogActions>
    </Dialog>
}

// this compoent will load the serach form on top nav bar
const LoadSerachForm=(props)=>{
    return <form className="d-none d-sm-inline-block">
        <div className="input-group input-group-navbar">
            <input type="text" className="form-control" placeholder="Search item…" aria-label="Search" />
            <button className="btn" type="button"> <i className="align-middle" data-feather="search"></i></button>
        </div>
    </form>
}

// this compoent will help to load notification on top
const LoadNotifications=(props)=>{
    let notification =0 ;
    return <>
    <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
        <div className="position-relative">
            <i className="align-middle" data-feather="bell"></i>
            {/* here show the count of notification */}
            {( notification >0 )&&<span className="indicator"></span>}
        </div>
    </a>
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
        <div className="dropdown-menu-header">
           {(notification >0) ? "4 New Notifications" :"No Notifications"}
        </div>
        {(notification >0 ) &&<>
        
        <div className="list-group">
            <a href="#" className="list-group-item">
                <div className="row g-0 align-items-center">
                    <div className="col-2">
                        <i className="text-danger" data-feather="alert-circle"></i>
                    </div>
                    <div className="col-10">
                        <div className="text-dark">Update completed</div>
                        <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                        <div className="text-muted small mt-1">30m ago</div>
                    </div>
                </div>
            </a>
            <a href="#" className="list-group-item">
                <div className="row g-0 align-items-center">
                    <div className="col-2">
                        <i className="text-warning" data-feather="bell"></i>
                    </div>
                    <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                        <div className="text-muted small mt-1">2h ago</div>
                    </div>
                </div>
            </a>
            <a href="#" className="list-group-item">
                <div className="row g-0 align-items-center">
                    <div className="col-2">
                        <i className="text-primary" data-feather="home"></i>
                    </div>
                    <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.8</div>
                        <div className="text-muted small mt-1">5h ago</div>
                    </div>
                </div>
            </a>
            <a href="#" className="list-group-item">
                <div className="row g-0 align-items-center">
                    <div className="col-2">
                        <i className="text-success" data-feather="user-plus"></i>
                    </div>
                    <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">Christina accepted your request.</div>
                        <div className="text-muted small mt-1">14h ago</div>
                    </div>
                </div>
            </a>
        </div>
        <div className="dropdown-menu-footer">
            <a href="#" className="text-muted">Show all notifications</a>
        </div>
        </> }
    </div>
</>
}

const mapStateToProps = state => { return state }
const mapDispatchToProps = dispatch => ({
  LoginAction: bindActionCreators(LoginAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(TopNabBar);