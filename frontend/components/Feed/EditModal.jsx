import React from 'react';
import { withRouter } from 'react-router';

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.node = React.createRef();
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() { //add event listener to the entire document, to see where they click
        document.addEventListener("click", this.hideModal);
    }
    componentWillUnmount() { //clean up event listener when component is removed
        document.removeEventListener("click", this.hideModal);
    }

    hideModal(e) {
        if (!this.node.current.contains(e.target)) {
            this.props.hideModal();
        }
    }


    render() {
        return (
            <div ref={this.node} className='editContainer'>
                <div className='editModal'>
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
                                defaultValue={this.props.post.body} 
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
                        <button className='editModalButton'>Save</button>
                    </div>
                </div>

                <div className='editBackground'></div>
            </div>
        )
    }

}

export default withRouter(EditModal);