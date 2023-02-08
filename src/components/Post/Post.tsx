import React from 'react';

import { RecordsEntity } from '../../interfaces/records.entity';

import PostBody from './post-body/post-body';
import PostFooter from './post-footer/post-footer';
import PostHeader from './post-header/post-header';
import './post.css';

interface PostProps {
    record: RecordsEntity;
}

function Post({ record }: PostProps) {
    return (
        <div className="Post">
            <PostHeader record={record} />
            <PostBody record={record} />
            <PostFooter />
        </div>
    );
}

export default Post;
