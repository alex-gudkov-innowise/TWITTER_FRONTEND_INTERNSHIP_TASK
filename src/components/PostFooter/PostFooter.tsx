import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import RepeatIcon from '@mui/icons-material/Repeat';
import React from 'react';

import './PostFooter.css';
import { RecordsEntity } from '../Post/RecordsEntity';

interface PostFooterProps {
    record: RecordsEntity;
}

function PostFooter({ record }: PostFooterProps) {
    return (
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
    );
}

export default PostFooter;
