import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './create-tweet-modal.css';

import { RequestOptions } from 'https';
import axios from 'axios';

interface CreateTweetModalProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetModal({ setVisible, visible }: CreateTweetModalProps) {
    function closeCreateTweetModal() {
        setVisible(false);
    }

    function createTweet() {
        console.log('create tweet');

        const config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://a4c1-146-120-15-114.eu.ngrok.io/feed/test',
        };

        axios(config)
            .then(function (response: any) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error: any) {
                console.log(error);
            });
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
                    <Button variant="outlined" className="CreateTweetModal__tweet-button" onClick={createTweet}>
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateTweetModal;
