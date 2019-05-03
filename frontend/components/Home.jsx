import React from 'react';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignUpContainer';

class Home extends React.Component {
    render () { 
        return (
        <div id="home_global">
            <LoginContainer /> 
            <SignupContainer />
        </div>
        )
    };
};

export default Home;