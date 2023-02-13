import './home-feed.css';
import React, { useEffect, useState } from 'react';

import { useFetching } from '../../../hooks/use-fetch';
import { RecordsEntity } from '../../../interfaces/records-entity';
import { TweetsService } from '../../../services/tweets-service';
import Post from '../../post/post';

function HomeFeed() {
    const [records, setRecords] = useState<RecordsEntity[]>([]);
    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        const records = await TweetsService.getAllTweets();

        setRecords(records);
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
