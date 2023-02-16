import './post-header.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { baseUrl } from '../../../constants/base-url';
import { formatDateString } from '../../../formatters/format-date-string';
import { RecordsEntity } from '../../../interfaces/records-entity';

interface PostHeaderProps {
    record: RecordsEntity;
}

function PostHeader({ record }: PostHeaderProps) {
    const navigate = useNavigate();

    function navigateToAuthorProfile(event: BaseSyntheticEvent) {
        event.stopPropagation();
        navigate('/profile/' + record.author.id);
    }

    return (
        <div className="PostHeader">
            <div className="PostHeader__body">
                <img
                    src={baseUrl + '/default-user-profile-images/' + 'default-user-avatar.png'}
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
