
import React from 'react';

import './Post.css';
import PostBody from '../PostBody/PostBody';
import PostFooter from '../PostFooter/PostFooter';
import PostHeader from '../PostHeader/PostHeader';

import { RecordImagesEntity } from './RecordImagesEntity';
import { RecordsEntity } from './RecordsEntity';

interface PostProps {
    record: RecordsEntity;
}

function Post({ record }: PostProps) {
    return (
        <div className="Post">
            <PostHeader record={record} />
            <PostBody record={record} />
            <PostFooter record={record} />
        </div>
    );
}

export default Post;
