import React from 'react';
import { withRouter } from 'react-router';


class PostCreateWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUser.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPost(this.props.currentUser, this.state);
    }

    update(e){
        this.setState({body: e.target.value});
    }

    render() {
        return (
            <div className="post-widget">
                <form className="post-form" onSubmit={this.handleSubmit}>
                <ul className="create-post-header">
                    <li > Create Post </li>
                    <li ><a href="#"> Photo/Video </a></li>
                    <li ><a href="#"> Live Video </a></li>
                    <li ><a href="#"> Life Event</a> </li>
                </ul>
                <div className="post-input-container">
                    <img className="post-profile" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png"/>
                    <textarea className="post-create-input" 
                              onChange={e=>this.update(e)} 
                              value={this.state.body}
                              placeholder="What's on your mind?"/>

                <button type="submit" >Submit</button>
                </div>
                </form>
                    {/* <input type="hidden" value={this.props.currentUser.id}/> */}
                    {/* <br /> */}

                    {/* onClick={this.handleSubmit} */}
                <ul className="create-post-options">
                    <li className="create-post-option" >
                    <img className="create-post-icon" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />Photo/Video</li>
                    <li className="create-post-option" >
                    <img className="create-post-icon" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />Tag Friends</li>
                    <li className="create-post-option" >
                    <img className="create-post-icon" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />Feeling/Acti...</li>
                    <li className="create-post-option" >...</li>
                </ul>
            </div>

        )
    }

}

export default withRouter(PostCreateWidget);