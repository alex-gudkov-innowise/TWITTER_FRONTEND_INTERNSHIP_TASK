import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './create-tweet-modal.css';

interface CreateTweetModalProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetModal({ setVisible, visible }: CreateTweetModalProps) {
    function closeCreateTweetModal() {
        setVisible(false);
    }

    return (
        <div
            className={visible ? 'CreateTweetModal CreateTweetModal_active' : 'CreateTweetModal'}
            onClick={closeCreateTweetModal}
        >
            <div
                className="CreateTweetModal__container"
                onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
            >
                <div className="CreateTweetModal__header">
                    <img
                        src={require('../../static/images/avatar.png')}
                        alt="avatar"
                        className="CreateTweetModal__user-avatar"
                    />
                    <CloseIcon className="CreateTweetModal__close" onClick={closeCreateTweetModal} />
                </div>

                <div className="CreateTweetModal__body">
                    <textarea className="CreateTweetModal__input" placeholder="What's happening?" maxLength={320} />
                </div>

                <div className="CreateTweetModal__footer">
                    <CropOriginalIcon className="CreateTweetModal__attach-image" />
                    <Button variant="outlined" className="CreateTweetModal__tweet-button">
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateTweetModal;
