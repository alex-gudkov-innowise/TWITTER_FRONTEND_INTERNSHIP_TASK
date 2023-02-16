import './comment.css';
import React from 'react';

import { RecordsEntity } from '../../interfaces/records-entity';
import PostBody from '../post/post-body/post-body';
import PostFooter from '../post/post-footer/post-footer';
import PostHeader from '../post/post-header/post-header';

interface CommentProps {
    record: RecordsEntity;
}

function Comment({ record }: CommentProps) {
    return (
        <div className="Comment">
            <PostHeader record={record} />
            <span className="CreateCommentModal__replying-to">Replying to{record.author.name}</span>
            <PostBody record={record} />
            <PostFooter record={record} />
        </div>
    );
}

export default Comment;
