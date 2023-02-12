import './post-header.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDateString } from '../../../formatters/format-date-string';
import { RecordsEntity } from '../../../interfaces/records.entity';

interface PostHeaderProps {
    record: RecordsEntity;
}

function PostHeader({ record }: PostHeaderProps) {
    const navigator = useNavigate();

    function navigateToAuthor() {
        navigator('/profile/' + record.author.id);
    }

    return (
        <div className="PostHeader">
            <div className="PostHeader__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="PostHeader__avatar"
                    onClick={navigateToAuthor}
                />
                <div className="PostHeader__user-name" onClick={navigateToAuthor}>
                    {record.author.name}
                </div>
                <div className="PostHeader__created-at">
                    <span>{formatDateString(record.createdAt)}</span>
                </div>
            </div>

            <MoreHorizIcon className="PostHeader__more" />
        </div>
    );
}

export default PostHeader;
