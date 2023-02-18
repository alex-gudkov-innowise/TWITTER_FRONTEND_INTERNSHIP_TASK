import './post.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useNavigateTo } from '../../hooks/use-navigate-to';
import { RecordsEntity } from '../../interfaces/records-entity';

import PostBody from './post-body/post-body';
import PostFooter from './post-footer/post-footer';
import PostHeader from './post-header/post-header';

interface PostProps {
    record: RecordsEntity;
    isClickable?: boolean;
}

function Post({ isClickable = true, record }: PostProps): JSX.Element {
    const navigate = useNavigate();

    function navigateToRecordId() {
        navigate('/record/' + record.id);
    }

    function PostOnClick() {
        if (isClickable) {
            navigateToRecordId();
        }
    }

    return (
        <div className={isClickable ? 'Post Post_hoverable' : 'Post'} onClick={PostOnClick}>
            <PostHeader record={record} />
            <PostBody record={record} />
            <PostFooter record={record} />
        </div>
    );
}

export default Post;
