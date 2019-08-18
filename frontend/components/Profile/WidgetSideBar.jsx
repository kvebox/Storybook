import React from 'react';
import LanguageWidget from '../Widgets/LanguageWidget';
import FooterWidget from '../Widgets/FooterWidget';
import BioWidget from '../Widgets/BioWidget';
import BioWidgetContainer from '../Widgets/BioWidgetContainer';

export default () => {
    return (
        <div className='widget-main-body'>
            <BioWidgetContainer />
            <LanguageWidget />
            <FooterWidget />
        </div>
    );
};