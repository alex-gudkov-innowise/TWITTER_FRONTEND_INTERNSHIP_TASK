import Twitter from '@mui/icons-material/Twitter';
import React from 'react';

import AuthInfoWidget from './auth-info-widget/auth-info-widget';
import AuthWidget from './auth-widget/auth-widget';
import './auth.css';

function Auth() {
    return (
        <div className="Auth">
            <div className="Auth__left-container">
                <Twitter className="Auth__left-container__background" />
                <AuthInfoWidget />
            </div>
            <div className="Auth__right-container">
                <AuthWidget />
            </div>
        </div>
    );
}

export default Auth;
