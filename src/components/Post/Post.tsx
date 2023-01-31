import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
                <div className="Post__header__timestamp">
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
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <ChatBubbleOutlineIcon fontSize="small" />
            </div>
        </div>
    );
}

export default Post;
