import React from 'react';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignUpContainer';

class Home extends React.Component {
    render () { 
        return (
        <>
            <LoginContainer /> 
            <SignupContainer />
        </>
        )
    };
};

export default Home;