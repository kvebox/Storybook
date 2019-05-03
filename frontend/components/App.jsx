import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Feed from './Feed';


const App = () => (
    <div>
        <Switch>
            <ProtectedRoute path="/profile" component={Profile}/>
            <ProtectedRoute path="/feed" component={Feed}/>
            <AuthRoute path="/" component={Home}/>
        </Switch>
    </div>
);


export default App;