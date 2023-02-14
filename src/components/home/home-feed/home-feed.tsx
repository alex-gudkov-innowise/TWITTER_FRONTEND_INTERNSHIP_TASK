import './home-feed.css';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

import { useFetching } from '../../../hooks/use-fetch';
import { useNavigateTo } from '../../../hooks/use-navigate-to';
import { RecordsEntity } from '../../../interfaces/records-entity';
import { TweetsService } from '../../../services/tweets-service';
import Post from '../../post/post';

function HomeFeed() {
    const [records, setRecords] = useState<RecordsEntity[]>([]);
    const navigateToAuth = useNavigateTo('/auth');
    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        try {
            const records = await TweetsService.getAllTweets();

            setRecords(records);
        } catch (error) {
            navigateToAuth();
        }
    });

    useEffect(() => {
        fetchAllFeed();
    }, []);

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
