import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

import './PostHeader.css';
import { RecordsEntity } from '../Post/RecordsEntity';

interface PostHeaderProps {
    record: RecordsEntity;
}

function PostHeader({ record }: PostHeaderProps) {
    return (
        <div className="Post__header">
            <div className="Post__header__leftContainer">
                <img src={require('../../static/images/avatar.png')} alt="avatar" className="Post__header__avatar" />
                <div className="Post__header__userName">
                    <span>{'Alex'}</span>
                </div>
                <div className="Post__header__userNick">
                    <span>{'@alex423342'}</span>
                </div>
                <div className="Post__header__createdAt">
                    <span>{record.createdAt.toDateString()}</span>
                </div>
            </div>
            <MoreHorizIcon className="Post__header__more" />
        </div>
    );
}

export default PostHeader;
