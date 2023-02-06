import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './LogInModal.css';

interface LogInModalProps {
    setVisible?: any;
    visible: boolean;
}

function LogInModal({ setVisible, visible }: LogInModalProps) {
    function closeLogInModal() {
        setVisible(false);
    }

    return (
        <div className={visible ? 'Container IsActive' : 'Container'} onClick={closeLogInModal}>
            <div className="LogInModal" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="Header">
                    <CloseIcon className="Header__Close" onClick={closeLogInModal} />
                    <h2 className="Header__Title">Create an account</h2>
                </div>
                <form action="POST" className="Form">
                    <input type="text" placeholder="email" className="Form__Input" />
                    <input type="password" placeholder="password" className="Form__Input" />
                </form>
                <Button variant="outlined" className="LogInButton">
                    Log In
                </Button>
            </div>
        </div>
    );
}

export default LogInModal;
