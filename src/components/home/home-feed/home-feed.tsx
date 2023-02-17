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
    const [page, setPage] = useState<number>(0);
    const limit = 5;
    const [fetchAllFeed, isAllFeedLoading] = useFetching(async () => {
        try {
            const records = await TweetsService.getPaginatedAllTweets(page, limit);

            setRecords(records);
        } catch (error) {
            navigateToAuth();
        }
    });

    useEffect(() => {
        fetchAllFeed();
    }, []);

    async function viewMoreTweets() {
        try {
            const moreRecords = await TweetsService.getPaginatedAllTweets(page + 1, limit);

            setPage(page + 1);
            setRecords([...records, ...moreRecords]);
        } catch (error) {
            navigateToAuth();
        }
    }

    return (
        <div className="HomeFeed">
            {records.map(
                (record: RecordsEntity): JSX.Element => (
                    <Post record={record} key={record.id} />
                ),
            )}
            <span className="HomeFeed__view-more" onClick={viewMoreTweets}>
                View more
            </span>
        </div>
    );
}

export default HomeFeed;
