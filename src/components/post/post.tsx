import './post.css';
import React from 'react';

import { useNavigateTo } from '../../hooks/use-navigate-to';
import { RecordsEntity } from '../../interfaces/records-entity';

import PostBody from './post-body/post-body';
import PostFooter from './post-footer/post-footer';
import PostHeader from './post-header/post-header';

interface PostProps {
    record: RecordsEntity;
}

function Post({ record }: PostProps) {
    const navigateToRecordId = useNavigateTo('/record/' + record.id);

    return (
        <div className="Post" onClick={navigateToRecordId}>
            <PostHeader record={record} />
            <PostBody record={record} />
            <PostFooter />
        </div>
    );
}

export default Post;
