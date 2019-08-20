import React from 'react';
import { withRouter } from 'react-router';

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: `${this.props.post.body}`,
            author_id: this.props.currentUser.id,
            id: `${this.props.post.id}`
        };

        this.update = this.update.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { //add event listener to the entire document, to see where they click
        document.addEventListener("click", this.hideModal);
    }
    componentWillUnmount() { //clean up event listener when component is removed
        document.removeEventListener("click", this.hideModal);
    }

    hideModal(e) {
        if (this.props.forwardRef.current != null && !this.props.forwardRef.current.contains(e.target)) {
            this.props.hideModal();
        }
    }
    handleSubmit(e) {
        // e.preventDefault();
        this.props.editPost(this.props.currentUser, this.state);
        this.props.hideModal();
        this.triggerEdit();
        // this.setState({ modal: false });
    }

    update(e) {
        this.setState({ body: e.target.value });
    }

    triggerEdit(){
        this.props.triggerEdit().then(() => location.reload());
    }


    render() {
        return (
            <div  className='editContainer'>
                <div ref={this.props.forwardRef} className='editModal'>
                    <div className='modalHeadContainer'>
                        <div className='editModalHeader'>Edit Post</div>
                        {/* <div className='modalCancel'> */}
                        <img className='editModalCancel' src='/images/close.png'/>
                    </div>

                    <div className='modalFormContainer'>
                        <div className='modalCover'><img className='modalImage' src='/images/profile_2.png' /></div>
                        <form>
                            <textarea
                                // onChange={e => this.update(e)}
                                className='modalTextInput'
                                onChange={e => this.update(e)}
                                defaultValue={this.state.body} 
                                />
                        </form>
                    </div>

                    <div className='modalSpacer'></div>

                    <table className='editTable'>
                        <tbody className="edit-post-options">
                        <tr>
                        <td className="edit-post-option" >
                            <img className="create-post-icon" src="/images/add_photo.png" />Photo/Video</td>
                        <td className="edit-post-option" >
                            <img className="create-post-icon" src="/images/add_reaction.png" />Feeling/Activity</td>
                            <td className="edit-post-option" >
                                <img className="create-post-icon" src="/images/add_gif.png" />GIF</td>
                        </tr>
                        <tr>
                        <td className="edit-post-option" >
                            <img className="create-post-icon" src="/images/add_tag.png" />Tag Friends</td>
                        <td className="edit-post-option" >
                            <img className="create-post-icon" src="/images/add_checkin.png" />Check in</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className='editModalFooter'>
                        <div className='editDropdown'>
                            <img className='editDropdownIcon editVisibility' src='/images/create_visibility.png' />
                            Friends <img className='editDropdownIcon' src='/images/create_dropdown.png' /></div>
                        <button onClick={() => this.handleSubmit()} className='editModalButton'>Save</button>
                    </div>
                </div>

                <div className='editBackground'></div>
            </div>
        )
    }

}

export default withRouter(EditModal);