import React from 'react';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignUpContainer';
import HomeFooter from './HomeFooter';

class Home extends React.Component {
    render () { 
        return (
        <div id="home_global">
            <LoginContainer /> 
            <SignupContainer />
            <HomeFooter />
        </div>
        )
    };
};

export default Home;