import './profile.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../../hooks/use-fetch';
import { RecordsEntity } from '../../interfaces/records.entity';
import { TweetsService } from '../../services/tweets-service';
import { UsersService } from '../../services/users-service';
import Sidebar from '../sidebar/sidebar';
import Widgets from '../widgets/widgets';

import ProfileFeed from './profile-feed/profile-feed';
import ProfileHeader from './profile-header/profile-header';
import ProfileInfo from './profile-info/profile-info';

function Profile() {
    const { userId = '' } = useParams<string>();
    const [records, setRecords] = useState<RecordsEntity[]>([]);
    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        const records = await TweetsService.getAllUserTweets(userId);

        setRecords(records);
    });

    useEffect(() => {
        fetchAllFeed();
    }, []);

    return (
        <div className="Profile">
            <Sidebar activeElement="Profile" />
            <div className="Profile__container">
                <ProfileHeader user={UsersService.getCurrentUser()} />
                <ProfileInfo user={UsersService.getCurrentUser()} />
                <ProfileFeed records={records} />
            </div>
            <Widgets />
        </div>
    );
}

export default Profile;
