import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

import './post-header.css';
import { RecordsEntity } from '../../../interfaces/records.entity';

interface PostHeaderProps {
    record: RecordsEntity;
}

function PostHeader({ record }: PostHeaderProps) {
    return (
        <div className="PostHeader">
            <div className="PostHeader__body">
                <img src={require('../../../static/images/avatar.png')} alt="avatar" className="PostHeader__avatar" />
                <div className="PostHeader__user-name">
                    <span>{'Alex'}</span>
                </div>
                <div className="PostHeader__created-at">
                    <span>{record.createdAt.toDateString()}</span>
                </div>
            </div>
            <MoreHorizIcon className="PostHeader__more" />
        </div>
    );
}

export default PostHeader;