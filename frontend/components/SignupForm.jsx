import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field){
        
        return(e) =>{
            // console.log('hello');
            this.setState({[field]: e.target.value});
        };
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
            // .then(() => this.props.history.push('/profile')); // redirect if successful signup
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        };
    }

    demoLogin(e) {
        e.preventDefault();
        let demoUser = {
            email: "nhatchat@gmail.com",
            password: "password"
        };
        this.props.login(demoUser)
            .then(() => this.props.history.push('/feed'));
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoSubmit(e) {
        e.preventDefault();

        let demoEmail = 'nhatchat@gmail.com'.split("");
        let demoPassword = 'password'.split("");

        this.setState({
            email: this.state.email,
            password: this.state.password,
        }, () => this.demoLogin(demoEmail, demoPassword));
    }


    demoLogin(email, password) {
        if (email.length > 0) {
            this.setState({ email: this.state.email += email.shift() },
                () => window.setTimeout(() => this.demoLogin(email, password), 60));
        } else if (password.length > 0) {
            this.setState({ password: this.state.password += password.shift() },
                () => window.setTimeout(() => this.demoLogin(email, password), 70));
        } else if (email.length === 0 && password.length === 0) {
            this.props.demoLogin(this.state);
        }
    }


    render () {
        return (
            <>
            <div className="signup-container">
                <div className="signup-main">
                <div className="filler">Other news</div>
                <form className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
                   <h1 className="signup-header">Create a New Account</h1>
                   <p>It's free and always will be.</p>
                        {this.renderErrors()}
                        <input className='input' type='text' 
                               onChange={this.update('first_name')} 
                               value={this.state.first_name}
                               placeholder="First name"/>
                        <input className='input' type='text' 
                               onChange={this.update('last_name')} 
                               value={this.state.last_name}
                               placeholder="Last name"/>
                        
                    <br />
                        <input className='input_long' type='text' 
                               onChange={this.update('email')} 
                               value={this.state.email}
                            placeholder="Email"/>
                    <br />
                        <input className='input_long' type='password' 
                               onChange={this.update('password')} 
                               value={this.state.password}
                               placeholder="Password"/>
                    <br />
                    <p className="signup-policy"> By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                    <button className="signup-button" type="submit" value="submit">Sign Up</button>
                    <br />
                    <button className="signup-button demo" onClick={(e) => this.handleDemoSubmit(e)} value="submit">Demo Login</button>
                </form>
                </div>
            </div>
            </>
        )
    }

};

export default withRouter(SignupForm);