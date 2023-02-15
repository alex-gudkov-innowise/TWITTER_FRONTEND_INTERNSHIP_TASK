import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent, useState } from 'react';
import './create-tweet-modal.css';

interface CreateTweetModalProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetModal({ setVisible, visible }: CreateTweetModalProps) {
    const [tweetText, setTweetText] = useState<string>('');
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

    function closeCreateTweetModal() {
        setVisible(false);
    }

    function changeTweetText(event: BaseSyntheticEvent) {
        setTweetText(event.target.value);
    }

    function createTweet() {
        console.log('text:', tweetText);
        console.log('files:', selectedFiles);
    }

    function changeFilesInput(event: BaseSyntheticEvent) {
        setSelectedFiles(event.target.files);
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
                    <textarea
                        value={tweetText}
                        onChange={changeTweetText}
                        className="CreateTweetModal__input"
                        placeholder="What's happening?"
                        maxLength={320}
                    />
                </div>

                <div className="CreateTweetModal__footer">
                    {/* <CropOriginalIcon className="CreateTweetModal__attach-image" /> */}
                    <input type="file" onChange={changeFilesInput} accept="image/*" multiple />
                    <Button variant="outlined" className="CreateTweetModal__tweet-button" onClick={createTweet}>
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateTweetModal;
