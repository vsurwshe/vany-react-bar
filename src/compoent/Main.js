import React from 'react';
import { Route, Switch } from 'react-router';
import Routes from '../routes/Routes';
import Footer from './footer/Footer';
import NotFound from './notFound/NotFound';
import SideNavBar from './sidebarNav/SidebarNav';
import TopNabBar from './topNavBar/TopNavBar';

const Main=(props)=>{
    return <div className="wrapper">
        <SideNavBar />
        <div className="main">
            <TopNabBar/>
            <main className="content">
                <Switch>
                  {Routes.map((route, index) => { return <Route key={index} path={route.path} exact component={route.component} /> })}
                  <Route component={NotFound} />
                </Switch>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    </div>
}

export default Main;