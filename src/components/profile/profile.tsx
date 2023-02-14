import './profile.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../../hooks/use-fetch';
import { useNavigateTo } from '../../hooks/use-navigate-to';
import { RecordsEntity } from '../../interfaces/records-entity';
import { UsersEntity } from '../../interfaces/users-entity';
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
    const navigateToAuth = useNavigateTo('/auth');
    const currentUser = UsersService.getCurrentUser();
    if (!currentUser) {
        navigateToAuth();

        return <div className="Profile"></div>;
    }

    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        try {
            const records = await TweetsService.getAllUserTweets(userId);

            setRecords(records);
        } catch (error) {
            navigateToAuth();
        }
    });

    useEffect(() => {
        fetchAllFeed();
    }, []);

    return (
        <div className="Profile">
            <Sidebar activeElement="Profile" />
            <div className="Profile__container">
                <ProfileHeader user={currentUser} />
                <ProfileInfo user={currentUser} />
                <ProfileFeed records={records} />
            </div>
            <Widgets />
        </div>
    );
}

export default Profile;
