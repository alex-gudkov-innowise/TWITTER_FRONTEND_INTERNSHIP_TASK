import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './CreateTweetWindow.css';

interface CreateTweetWindowProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetWindow({ setVisible, visible }: CreateTweetWindowProps) {
    function closeTweetWindow() {
        setVisible(false);
    }

    return (
        <div
            className={
                visible ? 'CreateTweetWindow__background CreateTweetWindow__isActive' : 'CreateTweetWindow__background'
            }
            onClick={closeTweetWindow}
        >
            <div className="CreateTweetWindow" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                <div className="header">
                    <img src={require('../../static/images/avatar.png')} alt="avatar" className="header__avatar" />
                    <CloseIcon className="header__close" onClick={closeTweetWindow} />
                </div>
                <div className="body">
                    <textarea className="body__input" placeholder="What's happening?" maxLength={320} />
                </div>
                <div className="footer">
                    <CropOriginalIcon className="footer__attachImage" />
                    <Button variant="outlined" className="TweetButton">
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateTweetWindow;
