import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './confirm-email-modal.css';

interface ConfirmEmailModalProps {
    setVisible?: any;
    visible: boolean;
}

function ConfirmEmailModal({ setVisible, visible }: ConfirmEmailModalProps) {
    function closeConfirmEmailModal() {
        setVisible(false);
    }

    return (
        <div
            className={visible ? 'ConfirmEmailModal ConfirmEmailModal_active' : 'ConfirmEmailModal'}
            onClick={closeConfirmEmailModal}
        >
            <div
                className="ConfirmEmailModal__container"
                onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
            >
                <div className="ConfirmEmailModal__header">
                    <CloseIcon className="ConfirmEmailModal__close" onClick={closeConfirmEmailModal} />
                    <h1 className="ConfirmEmailModal__title">Enter verification code</h1>
                </div>
                <div className="ConfirmEmailModal__body">
                    <form action="POST" className="ConfirmEmailModal__form">
                        <span className="ConfirmEmailModal__text">
                            We just sent a verification code to your email. Enter that code below.
                        </span>
                        <input type="text" placeholder="code" className="ConfirmEmailModal__input" />
                    </form>
                    <Button variant="outlined" className="ConfirmEmailModal__sign-up-button">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmEmailModal;
