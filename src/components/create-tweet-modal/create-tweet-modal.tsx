import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import './create-tweet-modal.css';

import { RequestOptions } from 'https';
import axios from 'axios';

import { baseUrl } from '../../constants/base-url';

interface CreateTweetModalProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetModal({ setVisible, visible }: CreateTweetModalProps) {
    function closeCreateTweetModal() {
        setVisible(false);
    }

    function createTweet() {
        const requestUrl = baseUrl + '/feed/all';
        const requestHeaders = new Headers();

        requestHeaders.append(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMGFiZTIyOS1jN2I0LTQ3YjAtOGRiNi04Yzk3OWYxNDRmZTQiLCJ1c2VyUm9sZXMiOltdLCJpYXQiOjE2NzYxNDgyMDYsImV4cCI6MTY3NzAxMjIwNn0.IPjRHtGH3Yba7ImwTLqnlTGcECb5Yk2mYZw-UuCQcNc',
        );

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: requestHeaders,
            redirect: 'follow',
        };

        fetch(requestUrl, requestOptions)
            .then((response) => {
                return response.text();
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log('error', error);
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
