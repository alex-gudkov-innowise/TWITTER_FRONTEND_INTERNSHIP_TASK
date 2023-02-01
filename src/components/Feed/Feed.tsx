import React from 'react';

import './Feed.css';
import Post from '../Post/Post';
import { RecordsEntity } from '../Post/RecordsEntity';

const records: RecordsEntity[] = [
    {
        id: '1',
        // text: 'AAA',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex at ab alias nemo quo voluptate dolores dolor unde repellendus quam nihil, dolorum possimus eum maxime asperiores placeat doloremque voluptatibus.',
        images: [
            {
                id: '1',
                name: '1.jpg',
            },
        ],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
    },
    {
        id: '2',
        text: 'Elon Musk works 25 hours a day',
        images: [
            {
                id: '2',
                name: '2.jpg',
            },
        ],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
    },
    {
        id: '3',
        text: 'Hello world',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
    },
];

function Feed() {
    return (
        <div className="Feed">
            <div className="Feed__header">
                <h2>Home</h2>
            </div>

            {records.map((record: RecordsEntity) => (
                <Post record={record} key={record.id} />
            ))}
        </div>
    );
}

export default Feed;
