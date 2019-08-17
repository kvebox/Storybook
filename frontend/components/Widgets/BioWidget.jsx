import React from 'react';

class BioWidget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bioForm: true,
            charRemaining: 101
        };
    }


    bioInfoTrigger(){
        return(
        this.state.bioForm ?
        <form className='bioFormContainer'>
            <textarea className='bioForm'
                      placeholder='Describe who you are'>
            </textarea>

            <div className='bioFormInfo'>
            <div className='bioCharRemaining'>{this.state.charRemaining}</div>

            <div className='bioFormSubmit'>
                <div className='bioVisibility'>
                    <img className='bioVisibilityIcon' src='/images/visibility_world.png'/>
                    <div className='bioVisibilityText'>Public</div>
                </div>
                <div className='bioFormButtons'>
                    <button className='bioFormCancel'>Cancel</button>
                    <button className='bioFormSave'>Save</button>
                </div>
            </div>
            </div>
        </form>
        :
        <><img className='bio-header-icon' src='/images/widget_bio.png' />
        <div className='bio-info'>Add a short bio to tell people more about yourself.</div>
        <a className='add-bio-button'>Add Bio</a></>
        )
    }

    render() {
        return (
            <div className="bio-widget">
                <div className='bio-header-container'>
                    <img className='widget-header-icon' src='/images/widget_event.png'/>
                    <span className='bio-header'> Intro </span>
                </div>

                <div className='bio-content-container'>
                    {this.bioInfoTrigger()}
                </div>

                <div className='bio-follow-container'>
                    <img className='bio-follow-icon' src='/images/widget_follow.png'/>
                    <div className='bio-follow-text'>Follwed by 0 people</div>
                </div>

                <div className='bio-showcase-container'>
                    <img className='bio-showcase-icon' src='/images/widget_showcase.png' />
                    <div className='bio-info'>Showcase what's important to you by adding photos, pages, groups and more to your featured section on your public profile.</div>
                    <a className='add-bio-button'>Add to Featured</a>
                </div>
            </div>
        );
    }
};

export default BioWidget;