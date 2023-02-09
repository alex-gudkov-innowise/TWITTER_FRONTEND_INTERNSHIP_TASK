import React from 'react';

import './post-body.css';
import { RecordImagesEntity } from '../../../interfaces/record-images.entity';
import { RecordsEntity } from '../../../interfaces/records.entity';

interface PostBodyProps {
    record: RecordsEntity;
}

function PostBody({ record }: PostBodyProps) {
    return (
        <div className="PostBody">
            <p className="PostBody__text">{record.text}</p>
            <div className="PostBody__images-container">
                {record.images.map((recordImage: RecordImagesEntity) => (
                    <img
                        src={require('../../../static/images/' + recordImage.name)}
                        alt="record-image"
                        key={recordImage.id}
                        className="PostBody__image"
                    />
                ))}
            </div>
        </div>
    );
}

export default PostBody;
