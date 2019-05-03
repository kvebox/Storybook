import React from 'react';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        
        return(e) =>{
            console.log('hello');
            this.setState({[field]: e.target.value});
        };
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
            // .then(() => this.props.history.push('/feed')); // redirect if successful signup
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        return (
            <>
            <h3>Create a new account</h3>
            <div className="signup-form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>First Name:
                        <input type='text' onChange={() => this.update('first_name')} value={this.state.first_name}/>
                    </label>
                    <br />
                    <label>Last Name:
                        <input type='text' onChange={() => this.update('last_name')} value={this.state.last_name}/>
                    </label>
                    <br />
                    <label>Email:
                        <input type='text' onChange={() => this.update('email')} value={this.state.email}/>
                    </label>
                    <br />
                    <label>Password:
                        <input type='password' onChange={() => this.update('password')} value={this.state.password}/>
                    </label>
                    <br />
                    <button type="submit" value="submit">Create Account</button>
                </form>
            </div>
            </>
        )
    }

};

export default SignUp;