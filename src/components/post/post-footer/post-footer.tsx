import './post-footer.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import RepeatIcon from '@mui/icons-material/Repeat';
import React, { BaseSyntheticEvent, useState } from 'react';

import { RecordsEntity } from '../../../interfaces/records-entity';
import CreateCommentModal from '../../create-comment-modal/create-comment-modal';

interface PostFooterProps {
    record: RecordsEntity;
}

function PostFooter({ record }: PostFooterProps) {
    const [isVisibleCreateCommentModal, setVisibleCreateCommentModal] = useState(false);

    function showCreateCommentModal(event: BaseSyntheticEvent) {
        event.stopPropagation();

        setVisibleCreateCommentModal(true);
    }

    return (
        <div className="PostFooter">
            <div className="PostFooter__comment" onClick={showCreateCommentModal}>
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

            <CreateCommentModal
                isVisibleCreateCommentModal={isVisibleCreateCommentModal}
                setVisibleCreateCommentModal={setVisibleCreateCommentModal}
                parentRecord={record}
            />
        </div>
    );
}

export default PostFooter;
