import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignUpContainer from './SignUpContainer';

const App = () => (
    <div>
        <Route path="/" component={SignUpContainer}/>
    </div>
    /* <Switch>
        <Route path="/" component={Feed}/>
        <Route path="/signup" component={SignUp}/>
        <Route component={NoMatch}/>
    </Switch> */

);


export default App;