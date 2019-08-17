import React from 'react';
import LanguageWidget from '../Widgets/LanguageWidget';
import FooterWidget from '../Widgets/FooterWidget';
import BioWidget from '../Widgets/BioWidget';

export default () => {
    return (
        <div className='widget-main-body'>
            <BioWidget />
            <LanguageWidget />
            <FooterWidget />
        </div>
    );
};