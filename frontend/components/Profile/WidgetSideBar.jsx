import React from 'react';
import LanguageWidget from '../Widgets/LanguageWidget';
import FooterWidget from '../Widgets/FooterWidget';

export default () => {
    return (
        <div className='widget-main-body'>
            <LanguageWidget />
            <FooterWidget />
        </div>
    );
};