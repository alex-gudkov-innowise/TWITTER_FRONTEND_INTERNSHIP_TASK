import React, { useEffect, useState } from 'react';

import './profile.css';
import { useFetching } from '../../hooks/use-fetch';
import { RecordsEntity } from '../../interfaces/records.entity';
import { UsersService } from '../../services/users-service';
import Sidebar from '../sidebar/sidebar';
import Widgets from '../widgets/widgets';

import ProfileFeed from './profile-feed/profile-feed';
import ProfileHeader from './profile-header/profile-header';
import ProfileInfo from './profile-info/profile-info';

function Profile() {
    const [records, setRecords] = useState<RecordsEntity[]>([]);
    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        const currentUser = UsersService.getCurrentUser();
        const records = await UsersService.getUserFeed(currentUser.id);

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
