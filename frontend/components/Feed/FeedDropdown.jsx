import React from 'react';
import { withRouter } from 'react-router';
import EditModal from './EditModal';

class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.node = React.createRef();
        this.modal = React.createRef();
        this.hideDropdown = this.hideDropdown.bind(this);
        this.dropdownVisibility = this.dropdownVisibility.bind(this);
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
        this.setState({modal: !this.state.modal});
    }

    hideModal(){
        this.setState({modal: false});
    }

    dropdownVisibility(){
        console.log('hi')
        const dropdown = document.getElementsByClassName('dropdownContainer');
        dropdown[0].style.display = 'none';
    }


    render() {
        return (
            <>
        {(this.state.modal) ? <div ref={this.modal}><EditModal
            post={this.props.post}
            hideModal={this.hideModal} /></div> : ''}
        <ul ref={this.node} className='dropdownContainer'>
            <li onClick={() => this.triggerEditModal()}
                className='dropdownListItem'>Edit Post</li>
            <div className='dropdownSpacer'></div>
            <li className='dropdownListItem'
                onClick={() => this.deletePost()}
                // onClick={this.deletePost(this.props.post.postId)}
                >Delete</li>
        </ul>

        </>
    )}

}

export default withRouter(FeedDropdown);