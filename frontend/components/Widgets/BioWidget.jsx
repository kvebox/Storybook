import React from 'react';

class BioWidget extends React.Component{

    bioInfo(){
        return(
        <p className='bio-info'>Add a short bio to tell people more about yourself.</p>
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
                    <img className='bio-header-icon' src='/images/widget_bio.png'/>
                    <div className='bio-info'>Add a short bio to tell people more about yourself.</div>
                    <a className='add-bio-button'>Add Bio</a>
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