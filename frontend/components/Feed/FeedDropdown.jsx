import React from 'react';
import { withRouter } from 'react-router';

class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            modal: false,
            dropdown: true
        };

        this.node = React.createRef();
        // this.modal = React.createRef();
        this.hideDropdown = this.hideDropdown.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.triggerEditModal = this.triggerEditModal.bind(this);
        }
    
    componentDidMount() { //add event listener to the entire document, to see where they click
        document.addEventListener("click", this.hideDropdown);
        this.setState({type: this.props.type});
        
    }
    componentWillUnmount() { //clean up event listener when component is removed
        document.removeEventListener("click", this.hideDropdown);

    }
    
    hideDropdown(e){
        if (!this.node.current.contains(e.target)){
            this.props.hideDropdown();
        }
    }

    deletePost(){
        this.props.deletePost(this.props.post.author, this.props.post.id);
    }

    triggerEditModal(){
        this.props.triggerEditModal();
    }

    hideModal(){
        this.props.hideModal();

    }

    deletePostComment(){
        this.props.deletePostComment(this.props.post, this.props.comment);
        this.props.closeDropdown();
    }

    triggerPostCommentEditModal(){
        this.props.triggerPostCommentEditModal();
    }


    render() {
        let dropdown = null;
        switch (this.state.type){
            case 'postComment':
                dropdown = 
                    (this.state.dropdown) ?
                        <ul ref={this.node} className='postCommentDropdownContainer'>
                            <li className='postCommentDropdownListItem'
                                onClick={() => this.props.triggerPostCommentEditInline()}>
                                <img className='postCommentIcon'
                                src='/images/comment_edit.png'/>Edit...</li>

                            <li className='postCommentDropdownListItem'
                                onClick={() => this.deletePostComment()}>
                            <img className='postCommentIcon'
                                src='/images/comment_delete.png' />Delete...</li>
                        </ul>
                        : ''
                return dropdown;
            default: 
                dropdown = 
                    (this.state.dropdown) ?
                        <ul ref={this.node} className='dropdownContainer'>
                            <li onClick={() => this.triggerEditModal()}
                                className='dropdownListItem'>Edit Post</li>

                            <div className='dropdownSpacer'></div>
                            <li className='dropdownListItem'
                                onClick={() => this.deletePost()}>Delete</li>
                        </ul>
                        : ''
                return dropdown;
        }}

}

export default withRouter(FeedDropdown);