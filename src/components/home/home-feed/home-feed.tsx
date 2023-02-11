import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';

import './home-feed.css';
import { useNavigate } from 'react-router-dom';

import { baseUrl } from '../../../constants/base-url';
import { RecordsEntity } from '../../../interfaces/records.entity';
import Post from '../../post/post';

function HomeFeed() {
    const navigate = useNavigate();
    const [records, setRecords] = useState<RecordsEntity[]>([]);

    useEffect(() => {
        fetchAllFeed();
    }, []);

    function navigateToAuth() {
        navigate('/auth');
    }

    async function fetchAllFeed() {
        try {
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
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) {
                    navigateToAuth();
                }
            }
        }
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
