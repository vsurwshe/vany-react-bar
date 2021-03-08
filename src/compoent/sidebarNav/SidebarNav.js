import React from 'react';
import Routes from '../../routes/Routes';

const SideNavBar = (props) => {
    return <nav id="sidebar" className="sidebar">
        <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="/"> 
                <span className="align-middle">Welcome</span> 
            </a>
            <LoadSideMenu />
        </div>
    </nav>
}

const LoadSideMenu=(props)=>{
    return <ul className="sidebar-nav">
    { (Routes && Routes.length >0) && Routes.map((item,key)=> 
        <li className="sidebar-item" key={key}>
            <a className="sidebar-link" href={item.path}>
                <i className="align-middle" data-feather={item.icon} />
                <span className="align-middle">{item.name}</span>
            </a>
        </li>
    )}
    {/* <li className="sidebar-item">
        <a href="#auth" data-bs-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="users"></i>
            <span className="align-middle">Auth</span>
        </a>
        <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
        </ul>
    </li> */}
</ul>
}

export default SideNavBar;