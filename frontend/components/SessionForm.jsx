import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.state({ [field]: e.target.value });
        };
    }

    // updateEmail(e){
    //     this.state.email = e.target.value;
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    render () {
        return (

            <div className="login-form">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Email:
                    <input type='text' value={this.state.email} onChange={() => this.update('email')} />
                </label>
                <label>Password:
                    <input type='password' onChange={() => this.update('password')} value={this.state.password} />
                </label>
                <button type="submit" value="submit">Login</button>
            </form>
            </div>

        )
    }
        
}

export default SessionForm;