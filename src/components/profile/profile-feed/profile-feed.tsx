import React from 'react';

import './profile-feed.css';
import { records } from '../../../server-response/records';
import Post from '../../Post/Post';
import { RecordsEntity } from '../../Post/RecordsEntity';

function ProfileFeed() {
    return (
        <div className="ProfileFeed">
            {records.map(
                (record: RecordsEntity): JSX.Element => (
                    <Post record={record} key={record.id} />
                ),
            )}
        </div>
    );
}

export default ProfileFeed;
