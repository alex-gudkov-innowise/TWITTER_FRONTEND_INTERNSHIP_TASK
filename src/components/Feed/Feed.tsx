import React from 'react';

import './Feed.css';
import Post from '../Post/Post';
import { RecordsEntity } from '../Post/RecordsEntity';

import { records } from './RecordsEntityArray';

function Feed() {
    return (
        <div className="Feed">
            <div className="Feed__header">
                <h2>Home</h2>
            </div>

            {records.map((record: RecordsEntity) => (
                <Post record={record} key={record.id} />
            ))}
        </div>
    );
}

export default Feed;
