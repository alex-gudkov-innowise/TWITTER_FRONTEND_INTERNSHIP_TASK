import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './SignUpModal.css';

interface SignUpModalProps {
    setVisible?: any;
    visible: boolean;
}

function SignUpModal({ setVisible, visible }: SignUpModalProps) {
    function closeSignUpModal() {
        setVisible(false);
    }

    return (
        <div className={visible ? 'Container IsActive' : 'Container'} onClick={closeSignUpModal}>
            <div className="SignUpModal" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="Header">
                    <CloseIcon className="Header__Close" onClick={closeSignUpModal} />
                    <h2 className="Header__Title">Create an account</h2>
                </div>
                <form action="POST" className="Form">
                    <input type="text" placeholder="name" className="Form__Input" />
                    <input type="text" placeholder="email" className="Form__Input" />
                    <input type="password" placeholder="password" className="Form__Input" />
                </form>
                <Button variant="outlined" className="SignUpButton">
                    Sign Up
                </Button>
            </div>
        </div>
    );
}

export default SignUpModal;
