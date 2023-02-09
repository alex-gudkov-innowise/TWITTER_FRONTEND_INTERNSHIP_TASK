import { RecordsEntity } from '../interfaces/records.entity';

import { user } from './user';

export const records: RecordsEntity[] = [
    {
        id: '1',
        text: 'Elon Musk works 25 hours a day',
        createdAt: new Date(),
        isComment: false,
        isRetweet: false,
        isDeleted: false,
        author: user,
        parent: null,
        images: [
            {
                id: '1',
                name: '1.jpg',
            },
        ],
    },
];
