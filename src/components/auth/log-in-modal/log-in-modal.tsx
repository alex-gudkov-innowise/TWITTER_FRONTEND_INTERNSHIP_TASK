import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './log-in-modal.css';

interface LogInModalProps {
    setVisible?: any;
    visible: boolean;
}

function LogInModal({ setVisible, visible }: LogInModalProps) {
    function closeLogInModal() {
        setVisible(false);
    }

    return (
        <div className={visible ? 'LogInModal LogInModal_active' : 'LogInModal'} onClick={closeLogInModal}>
            <div className="LogInModal__container" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="LogInModal__header">
                    <CloseIcon className="LogInModal__close" onClick={closeLogInModal} />
                    <h2 className="LogInModal__title">Log in to Twitter</h2>
                </div>
                <form action="POST" className="LogInModal__form">
                    <input type="text" placeholder="email" className="LogInModal__input" />
                    <input type="password" placeholder="password" className="LogInModal__input" />
                </form>
                <Button variant="outlined" className="LogInModal__log-in-button">
                    Log In
                </Button>
            </div>
        </div>
    );
}

export default LogInModal;
