import './post-footer.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import RepeatIcon from '@mui/icons-material/Repeat';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

import { RecordsEntity } from '../../../interfaces/records-entity';
import CreateCommentModal from '../../create-comment-modal/create-comment-modal';

interface PostFooterProps {
    record: RecordsEntity;
}

function PostFooter({ record }: PostFooterProps) {
    const [isVisibleCreateCommentModal, setVisibleCreateCommentModal] = useState(false);
    const [commentsCount, setCommentsCount] = useState<number>(0);
    const [retweetsCount, setRetweetsCount] = useState<number>(0);
    const [likesCount, setLikesCount] = useState<number>(0);

    function showCreateCommentModal(event: BaseSyntheticEvent) {
        event.stopPropagation();

        setVisibleCreateCommentModal(true);
    }

    function showCreateRetweetModal(event: BaseSyntheticEvent) {
        event.stopPropagation();
    }

    function createLikeOnRecord(event: BaseSyntheticEvent) {
        event.stopPropagation();
    }

    function showShareRecordModal(event: BaseSyntheticEvent) {
        event.stopPropagation();
    }

    return (
        <div className="PostFooter">
            <div className="PostFooter__comment" onClick={showCreateCommentModal}>
                <ChatBubbleOutlineIcon fontSize="small" className="PostFooter__comment-icon" />
                <span>{commentsCount ? commentsCount : ''}</span>
            </div>
            <div className="PostFooter__retweet" onClick={showCreateRetweetModal}>
                <RepeatIcon fontSize="small" className="PostFooter__retweet-icon" />
                <span>{retweetsCount ? retweetsCount : ''}</span>
            </div>
            <div className="PostFooter__like" onClick={createLikeOnRecord}>
                <FavoriteBorderIcon fontSize="small" className="PostFooter__like-icon" />
                <span>{likesCount ? likesCount : ''}</span>
            </div>
            <div className="PostFooter__share">
                <IosShareIcon fontSize="small" className="PostFooter__share-icon" onClick={showShareRecordModal} />
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
