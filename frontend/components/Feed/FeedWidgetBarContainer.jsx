import React from 'react';
import LanguageWidget from '../Widgets/LanguageWidget';

class FeedWidgetBarContainer extends React.Component {
    render() {
        return (
            <div className="feed-widget-container">
                <LanguageWidget />
            </div>
        )
    };
};

export default FeedWidgetBarContainer;