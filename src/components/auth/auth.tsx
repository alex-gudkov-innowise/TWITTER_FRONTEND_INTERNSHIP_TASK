import Twitter from '@mui/icons-material/Twitter';
import React from 'react';

import SignUpInfoList from './SignUpInfoList/SignUpInfoList';
import SignUpWidget from './SignUpWidget/SignUpWidget';

import './auth.css';

function Auth() {
    return (
        <div className="Auth">
            <div className="Auth__left-container">
                <Twitter className="Auth__left-container__background" />
                <SignUpInfoList />
            </div>
            <div className="Auth__right-container">
                <SignUpWidget />
            </div>
        </div>
    );
}

export default Auth;
