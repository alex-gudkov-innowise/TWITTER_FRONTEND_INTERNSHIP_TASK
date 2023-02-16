import './comment.css';
import React from 'react';

import { RecordsEntity } from '../../interfaces/records-entity';
import PostBody from '../post/post-body/post-body';
import PostFooter from '../post/post-footer/post-footer';

import CommentHeader from './comment-header/comment-header';

interface CommentProps {
    record: RecordsEntity;
}

function Comment({ record }: CommentProps) {
    return (
        <div className="Comment">
            <CommentHeader record={record} />
            <PostBody record={record} />
            <PostFooter record={record} />
        </div>
    );
}

export default Comment;
