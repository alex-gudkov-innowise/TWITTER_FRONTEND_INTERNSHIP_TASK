import React from 'react';

import './home-feed.css';
import { baseUrl } from '../../../constants/base-url';
import { RecordsEntity } from '../../../interfaces/records.entity';
import { records } from '../../../server-response/records';
import Post from '../../post/post';

function HomeFeed() {
    const urlFeedAll = baseUrl + '/feed/all';

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
