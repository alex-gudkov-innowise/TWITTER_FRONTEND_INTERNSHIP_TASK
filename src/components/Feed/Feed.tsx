import React from 'react';

import './Feed.css';
import Post from '../Post/Post';
import { RecordsEntity } from '../Post/RecordsEntity';

const records: RecordsEntity[] = [
    {
        id: '1',
        // text: 'AAA',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt veniam eius eos dolorum exercitationem repudiandaeconsectetur adipisicing elit. Maiores deserunt veniam eius eos dolorum exercitationem repudiandaeconsectetur adipisicing elit. Maiores deserunt veniam eius eos dolorum exercitationem repudiandae nihil quas at numquam adipisci voluptas, laudantium suscipit velit fugiat dolores ipsa nemo error!',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '2',
        text: 'Elon Musk works 25 hours a day',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '3',
        text: 'CCC',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '4',
        text: 'EEE',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '5',
        text: 'FFF',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '6',
        text: 'GGG',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
    },
    {
        id: '7',
        text: 'HHH',
        images: [],
        author: null,
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        parent: null,
        isDeleted: false,
        children: [],
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
