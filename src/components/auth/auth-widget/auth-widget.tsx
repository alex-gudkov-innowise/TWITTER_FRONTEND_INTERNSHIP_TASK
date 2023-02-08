import { Button } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';

import './auth-widget.css';
import ConfirmEmailModal from '../confirm-email-modal/confirm-email-modal';
import LogInModal from '../log-in-modal/log-in-modal';
import SignUpModal from '../sign-up-modal/sign-up-modal';

function AuthWidget() {
    const [isVisibleSignUpModal, setVisibleSignUpModal] = useState(false);
    const [isVisibleLogInModal, setVisibleLogInModal] = useState(false);
    const [isVisibleConfirmEmailModal, setVisibleConfirmEmailModal] = useState(true);

    return (
        <div className="AuthWidget">
            <div className="AuthWidget__header">
                <TwitterIcon className="AuthWidget__logo" />
                <h1 className="AuthWidget__title">See what&apos;s happening in the world now </h1>
            </div>
            <div className="AuthWidget__body">
                <h2 className="AuthWidget__subtitle">Join Twitter today!</h2>

                <Button
                    variant="outlined"
                    className="AuthWidget__sign-up-button"
                    fullWidth
                    onClick={() => {
                        setVisibleSignUpModal(true);
                    }}
                >
                    Sign Up
                </Button>
                <Button
                    variant="outlined"
                    className="AuthWidget__log-in-button"
                    fullWidth
                    onClick={() => {
                        setVisibleLogInModal(true);
                    }}
                >
                    Log in
                </Button>

                <SignUpModal visible={isVisibleSignUpModal} setVisible={setVisibleSignUpModal} />
                <LogInModal visible={isVisibleLogInModal} setVisible={setVisibleLogInModal} />
                <ConfirmEmailModal visible={isVisibleConfirmEmailModal} setVisible={setVisibleConfirmEmailModal} />
            </div>
        </div>
    );
}

export default AuthWidget;
