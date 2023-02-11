import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';

import './home-feed.css';
import { baseUrl } from '../../../constants/base-url';
import { RecordsEntity } from '../../../interfaces/records.entity';
import Post from '../../post/post';

function HomeFeed() {
    const [records, setRecords] = useState<RecordsEntity[]>([]);

    useEffect(() => {
        fetchAllFeed();
    }, []);

    async function fetchAllFeed() {
        const requestUrl = baseUrl + '/feed/all';
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMGFiZTIyOS1jN2I0LTQ3YjAtOGRiNi04Yzk3OWYxNDRmZTQiLCJ1c2VyUm9sZXMiOltdLCJpYXQiOjE2NzYxNDgyMDYsImV4cCI6MTY3NzAxMjIwNn0.IPjRHtGH3Yba7ImwTLqnlTGcECb5Yk2mYZw-UuCQcNc',
            },
        };
        const response = await axios(requestConfig);
        const records: RecordsEntity[] = response.data;

        setRecords(records);
    }

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
