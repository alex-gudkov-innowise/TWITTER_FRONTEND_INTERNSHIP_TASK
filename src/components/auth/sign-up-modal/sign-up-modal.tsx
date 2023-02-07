import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './sign-up-modal.css';

interface SignUpModalProps {
    setVisible?: any;
    visible: boolean;
}

function SignUpModal({ setVisible, visible }: SignUpModalProps) {
    function closeSignUpModal() {
        setVisible(false);
    }

    return (
        <div className={visible ? 'SignUpModal SignUpModal_active' : 'SignUpModal'} onClick={closeSignUpModal}>
            <div className="SignUpModal__container" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="SignUpModal__header">
                    <CloseIcon className="SignUpModal__close" onClick={closeSignUpModal} />
                    <h2 className="SignUpModal__title">Create an account</h2>
                </div>
                <form action="POST" className="SignUpModal__form">
                    <input type="text" placeholder="name" className="SignUpModal__input" />
                    <input type="text" placeholder="email" className="SignUpModal__input" />
                    <input type="password" placeholder="password" className="SignUpModal__input" />
                </form>
                <Button variant="outlined" className="SignUpModal__sign-up-button">
                    Sign Up
                </Button>
            </div>
        </div>
    );
}

export default SignUpModal;
