import React from 'react';

import './home-feed.css';
import { records } from '../../../server-response/records';
import Post from '../../Post/Post';
import { RecordsEntity } from '../../Post/RecordsEntity';

function HomeFeed() {
    return (
        <div className="HomeFeed">
            {records.map(
                (record: RecordsEntity): JSX.Element => (
                    <Post record={record} key={record.id} />
                ),
            )}
        </div>
    );
}

export default HomeFeed;
