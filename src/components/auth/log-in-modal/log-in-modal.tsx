import './log-in-modal.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { AxiosError } from 'axios';
import React, { BaseSyntheticEvent, useState } from 'react';

import { useNavigateTo } from '../../../hooks/use-navigate-to';
import { AuthService } from '../../../services/auth-service';
import { LocalStorageService } from '../../../services/local-storage-service';

interface LogInModalProps {
    setVisible?: any;
    visible: boolean;
}

function LogInModal({ setVisible, visible }: LogInModalProps) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigateToHome = useNavigateTo('/home');

    function closeLogInModal() {
        setVisible(false);
    }

    function changeUserEmail(event: BaseSyntheticEvent) {
        setUserEmail(event.target.value);
    }

    function changeUserPassword(event: BaseSyntheticEvent) {
        setUserPassword(event.target.value);
    }

    async function logInUser() {
        try {
            const userEntityWithJwtPair = await AuthService.logInUser(userEmail, userPassword);

            LocalStorageService.setCurrentUser(userEntityWithJwtPair.user);
            LocalStorageService.setAccessToken(userEntityWithJwtPair.accessToken);
            LocalStorageService.setRefreshToken(userEntityWithJwtPair.refreshToken);

            navigateToHome();
        } catch (error) {
            if (error instanceof AxiosError) {
                const responseErrorMessage: string = error.response?.data.message;

                setErrorMessage(responseErrorMessage);
            } else {
                setErrorMessage('Log on error.');
            }
        }
    }

    return (
        <div className={visible ? 'LogInModal LogInModal_active' : 'LogInModal'} onClick={closeLogInModal}>
            <div className="LogInModal__container" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="LogInModal__header">
                    <CloseIcon className="LogInModal__close" onClick={closeLogInModal} />
                    <h2 className="LogInModal__title">Log in to Twitter</h2>
                </div>
                <div className="LogInModal__body">
                    <form action="POST" className="LogInModal__form">
                        <input
                            value={userEmail}
                            onChange={changeUserEmail}
                            type="text"
                            placeholder="email"
                            className="LogInModal__input"
                        />
                        <input
                            value={userPassword}
                            onChange={changeUserPassword}
                            type="password"
                            placeholder="password"
                            className="LogInModal__input"
                        />
                        <span className="LogInModal__error-message">{errorMessage}</span>
                    </form>
                    <Button variant="outlined" className="LogInModal__log-in-button" onClick={logInUser}>
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LogInModal;
