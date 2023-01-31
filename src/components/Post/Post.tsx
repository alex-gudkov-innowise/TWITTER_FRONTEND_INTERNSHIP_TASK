import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import RepeatIcon from '@mui/icons-material/Repeat';
import React from 'react';

import './Post.css';
import { RecordsEntity } from './RecordsEntity';

interface PostProps {
    record: RecordsEntity;
}

function Post({ record }: PostProps) {
    return (
        <div className="Post">
            <div className="Post__header">
                <div className="Post__header__avatar">
                    <Avatar src="" />
                </div>
                <div className="Post__header__userName">
                    <span>{'Alex'}</span>
                </div>
                <div className="Post__header__createdAt">
                    <span>{record.createdAt.toDateString()}</span>
                </div>
            </div>
            <div className="Post__body">
                <p>{record.text}</p>
                <div className="Post__body__images">
                    <img src="" />
                </div>
            </div>
            <div className="Post__footer">
                <div className="Post__footer__comment">
                    <ChatBubbleOutlineIcon fontSize="small" className="Post__footer__comment__icon" />
                    <span>12</span>
                </div>
                <div className="Post__footer__retweet">
                    <RepeatIcon fontSize="small" className="Post__footer__retweet__icon" />
                    <span>34</span>
                </div>
                <div className="Post__footer__like">
                    <FavoriteBorderIcon fontSize="small" className="Post__footer__like__icon" />
                    <span>67</span>
                </div>
                <div className="Post__footer__share">
                    <IosShareIcon fontSize="small" className="Post__footer__share__icon" />
                </div>
            </div>
        </div>
    );
}

export default Post;
