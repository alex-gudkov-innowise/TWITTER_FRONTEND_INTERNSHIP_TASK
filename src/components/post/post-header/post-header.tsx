import './post-header.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

import { formatDateString } from '../../../formatters/format-date-string';
import { useNavigateTo } from '../../../hooks/use-navigate-to';
import { RecordsEntity } from '../../../interfaces/records-entity';

interface PostHeaderProps {
    record: RecordsEntity;
}

function PostHeader({ record }: PostHeaderProps) {
    const navigateToAuthorProfile = useNavigateTo('/profile/' + record.author.id);

    return (
        <div className="PostHeader">
            <div className="PostHeader__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="PostHeader__avatar"
                    onClick={navigateToAuthorProfile}
                />
                <div className="PostHeader__user-name" onClick={navigateToAuthorProfile}>
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
