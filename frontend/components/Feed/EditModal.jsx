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
                        <div className='modalHeader'>Edit Post</div>
                        <div className='modalCancel'></div>
                    </div>

                    <div className='modalFormContainer'>
                        <div className='modalCover'><img className='modalImage' src='/images/profile_2.png' /></div>
                        <form>
                            <textarea
                                // onChange={e => this.update(e)}
                                className='modalTextInput'
                                value={this.props.post.body} 
                                />
                        </form>
                    </div>

                    <div className='modalSpacer'></div>

                    <div className='editModalFooter'>
                        <div className='shareDropdown'>
                            <img className='dropdownIcon' src='/images/menu_dropdown.png' />
                            Friends</div>
                        <button className='editModalButton'>Save</button>
                    </div>
                </div>

                <div className='editBackground'></div>
            </div>
        )
    }

}

export default withRouter(EditModal);