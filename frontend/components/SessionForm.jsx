import React from 'react';
import {withRouter} from 'react-router';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        );
    }

    logout(e){
        e.preventDefault();
        this.props.logout();
    }




    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push(`/users/feed`));
    }



    render () {
        return (

            <div className="login-form">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label className="labels"> Email </label>
                    <input className='login-input' type='text' 
                           value={this.state.email} 
                           onChange={this.update('email')}/>
                <label className="labels"> Password </label>
                    <input className='login-input' type='password' 
                           onChange={this.update('password')} 
                           value={this.state.password} />
                <button type="submit" value="submit">Login</button>
                <button type="logout" onClick={(e)=> this.logout(e)}>Logout</button>
            </form>
            </div>

        )
    }
        
}

export default withRouter(SessionForm);