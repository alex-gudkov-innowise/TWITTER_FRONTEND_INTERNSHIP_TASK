import React from 'react';

import './profile-feed.css';
import { RecordsEntity } from '../../../interfaces/records-entity';
import Post from '../../post/post';

interface ProfileFeedProps {
    records: RecordsEntity[];
}

function ProfileFeed({ records }: ProfileFeedProps) {
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
