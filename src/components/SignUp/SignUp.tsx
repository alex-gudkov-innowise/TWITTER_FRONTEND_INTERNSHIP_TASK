import React from 'react';

import SignUpInfoList from '../SignUpInfoList/SignUpInfoList';
import SignUpWidget from '../SignUpWidget/SignUpWidget';
import './SignUp.css';

function SignUp() {
    return (
        <div className="SignUp">
            <div className="SignUp__left">
                <SignUpInfoList />
            </div>
            <div className="SignUp__right">
                <SignUpWidget />
            </div>
        </div>
    );
}

export default SignUp;
