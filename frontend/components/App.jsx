import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile/Profile';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Feed from './Feed/Feed';


const App = () => (
    <div>
        <Switch>
            <ProtectedRoute path="/users/:userId" component={Profile}/>
            {/* <ProtectedRoute path="/profile" component={Profile}/> */}
            <ProtectedRoute path="/feed" component={Feed}/>
            <AuthRoute exact path="/" component={Home}/>
            <Redirect to="/" />
        </Switch>
    </div>
);


export default App;