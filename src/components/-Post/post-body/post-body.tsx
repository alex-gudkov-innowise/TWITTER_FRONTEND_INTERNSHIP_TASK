import React from 'react';

import './post-body.css';
import { RecordImagesEntity } from '../../../interfaces/record-images.entity';
import { RecordsEntity } from '../../../interfaces/records.entity';

interface PostBodyProps {
    record: RecordsEntity;
}

function PostBody({ record }: PostBodyProps) {
    return (
        <div className="Post__body">
            <p>{record.text}</p>
            <div className="Post__body__images">
                {record.images.map((recordImage: RecordImagesEntity) => (
                    <img
                        src={require('../../../static/images/' + recordImage.name)}
                        alt="recordImage"
                        key={recordImage.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default PostBody;
