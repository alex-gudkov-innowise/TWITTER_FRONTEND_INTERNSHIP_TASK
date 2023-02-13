import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import RepeatIcon from '@mui/icons-material/Repeat';
import React from 'react';

import './post-footer.css';

function PostFooter() {
    return (
        <div className="PostFooter">
            <div className="PostFooter__comment">
                <ChatBubbleOutlineIcon fontSize="small" className="PostFooter__comment-icon" />
                <span>12</span>
            </div>
            <div className="PostFooter__retweet">
                <RepeatIcon fontSize="small" className="PostFooter__retweet-icon" />
                <span>34</span>
            </div>
            <div className="PostFooter__like">
                <FavoriteBorderIcon fontSize="small" className="PostFooter__like-icon" />
                <span>67</span>
            </div>
            <div className="PostFooter__share">
                <IosShareIcon fontSize="small" className="PostFooter__share-icon" />
            </div>
        </div>
    );
}

export default PostFooter;
