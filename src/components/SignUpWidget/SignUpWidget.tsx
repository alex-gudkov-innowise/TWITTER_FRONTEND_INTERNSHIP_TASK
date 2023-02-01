import { Button } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './SignUpWidget.css';

function SignUpWidget() {
    return (
        <div className="SignUpWidget">
            <div className="SignUpWidget__header">
                <TwitterIcon className="SignUpWidget__header__logo" />
                <div className="SignUpWidget__header__text">See what&apos;s happening in the world now </div>
            </div>
            <div className="SignUpWidget__body">
                <div className="SignUpWidget__body__text">Join Twitter today!</div>
                <Button className="SignUpWidget__body__signUp">Sign Up</Button>
                <Button className="SignUpWidget__body__signIn">Log in</Button>
            </div>
        </div>
    );
}

export default SignUpWidget;
