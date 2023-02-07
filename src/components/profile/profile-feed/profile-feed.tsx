import React from 'react';

import './profile-feed.css';
import { RecordsEntity } from '../../../interfaces/records.entity';
import { records } from '../../../server-response/records';
import Post from '../../post/post';

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
