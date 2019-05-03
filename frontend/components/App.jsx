import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignUpContainer from './SignUpContainer';
import Home from './Home';
import Profile from './Home';

const App = () => (
    <div>
        <Route path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
    </div>
    /* <Switch>
        <Route path="/" component={Feed}/>
        <Route path="/signup" component={SignUp}/>
        <Route component={NoMatch}/>
    </Switch> */

);


export default App;