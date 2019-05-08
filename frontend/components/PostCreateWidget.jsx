import React from 'react';
import { withRouter } from 'react-router';


class PostCreateWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: 0
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
                <h6 className="create-post-header"> Create Post </h6>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={e=>this.update(e)} value={this.state.body}/>
                    <input type="hidden" value={this.props.currentUser.id}/>
                <button onClick={this.handleSubmit}>Add post!</button>
                </form>
            </div>

        )
    }

}

export default withRouter(PostCreateWidget);