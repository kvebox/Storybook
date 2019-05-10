import React from 'react';
import LanguageWidget from '../Widgets/LanguageWidget';
import FooterWidget from '../Widgets/FooterWidget';

class FeedWidgetBarContainer extends React.Component {
    render() {
        return (
            <div className="feed-widget-container">
                <LanguageWidget />
                <FooterWidget />
            </div>
        )
    };
};

export default FeedWidgetBarContainer;