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
        <div className='session-wrapper'>
            <div className="login-form">
            <div className="login-container">

{/* ----------------------------- */}
            <div className="logo">
                <h1>facebook</h1>
            </div>
{/* ----------------------------- */}

            <form className="login-form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <table className="login-table">
                <tbody>
                    <tr>
                        <td className="login-label">Email or Phone</td>
                        <td className="login-label">Password</td>
                    </tr>    
                    <tr>
                        <td>
                        <input className='login-input' type='text' 
                           value={this.state.email} 
                           onChange={this.update('email')}/>
                        </td>
                        <td>
                             <input className='login-input' type='password' 
                           onChange={this.update('password')} 
                           value={this.state.password} />
                        </td>
                            <td>
                            <button className='login-button' type="submit" value="submit">Log In</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a className="login-forgot" href="#">Forgot account?</a></td>
                        </tr>
                </tbody>

            </table>

                {/* <label className="labels"> Email </label>
                    <input className='login-input' type='text' 
                           value={this.state.email} 
                           onChange={this.update('email')}/>
                <label className="labels"> Password </label>
                    <input className='login-input' type='password' 
                           onChange={this.update('password')} 
                           value={this.state.password} /> */}
                {/* <button type="submit" value="submit">Login</button> */}
                {/* <button type="logout" onClick={(e)=> this.logout(e)}>Logout</button> */}
            </form>
            </div>
            </div>
        </div>
        )
    }
        
}

export default withRouter(SessionForm);