import { Button } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';

import './SignUpWidget.css';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal';

function SignUpWidget() {
    const [isVisibleSignUpModal, setVisibleSignUpModal] = useState(false);
    const [isVisibleLogInModal, setVisibleLogInModal] = useState(false);

    return (
        <div className="SignUpWidget">
            <div className="SignUpWidget__header">
                <TwitterIcon className="SignUpWidget__header__logo" />
                <div className="SignUpWidget__header__text">See what&apos;s happening in the world now </div>
            </div>
            <div className="SignUpWidget__body">
                <div className="SignUpWidget__body__text">Join Twitter today!</div>

                <Button
                    variant="outlined"
                    className="SignUpWidget__body__signUp"
                    fullWidth
                    onClick={() => {
                        setVisibleSignUpModal(true);
                    }}
                >
                    Sign Up
                </Button>
                <Button
                    variant="outlined"
                    className="SignUpWidget__body__LogIn"
                    fullWidth
                    onClick={() => {
                        setVisibleLogInModal(true);
                    }}
                >
                    Log in
                </Button>

                <SignUpModal visible={isVisibleSignUpModal} setVisible={setVisibleSignUpModal} />

                <LogInModal visible={isVisibleLogInModal} setVisible={setVisibleLogInModal} />
                {/* <LogInWindow /> */}
            </div>
        </div>
    );
}

export default SignUpWidget;
