import React from 'react';
import { withRouter } from 'react-router';
import EditModal from './EditModal';

class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        // console.log(this.props.post)
        this.props.deletePost(this.props.post.author, this.props.post.id)
            .then(() => window.location.reload());
    }

    triggerEditModal(){
        // document.removeEventListener("click", this.hideDropdown);
        // this.setState({dropdown: !this.state.dropdown});
        // this.setState({modal: !this.state.modal});
        this.props.triggerEditModal();
    }

    hideModal(){
        // if (!this.modal.current.contains(e.target)) {
        // this.setState({modal: false});
        this.props.hideModal();

    }


    render() {
        return (
            <>
            {/* {(this.state.modal) ? 
            
            <EditModal
                forwardRef={this.modal}
                editPost={this.props.editPost}
                currentUser = {this.props.currentUser}
                post={this.props.post}
                hideModal={this.hideModal} />
                
            : ''} */}
            {(this.state.dropdown) ?
            <ul ref={this.node} className='dropdownContainer'>
                <li onClick={() => this.triggerEditModal()}
                    className='dropdownListItem'>Edit Post</li>
                
                <div className='dropdownSpacer'></div>
                <li className='dropdownListItem'
                    onClick={() => this.deletePost()}
                    >Delete</li>
            </ul>
            : ''}

            

        </>
    )}

}

export default withRouter(FeedDropdown);