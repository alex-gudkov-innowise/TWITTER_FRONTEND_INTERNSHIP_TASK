import './comment-header.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

import { formatDateString } from '../../../formatters/format-date-string';
import { useNavigateTo } from '../../../hooks/use-navigate-to';
import { RecordsEntity } from '../../../interfaces/records-entity';

interface CommentHeaderProps {
    record: RecordsEntity;
}

function CommentHeader({ record }: CommentHeaderProps) {
    const navigateToAuthorProfile = useNavigateTo('/profile/' + record.author.id);

    return (
        <div className="CommentHeader">
            <div className="CommentHeader__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="CommentHeader__avatar"
                    onClick={navigateToAuthorProfile}
                />
                <div className="CommentHeader__user-name" onClick={navigateToAuthorProfile}>
                    {record.author.name}
                </div>
                <div className="CommentHeader__created-at">
                    <span>{formatDateString(record.createdAt)}</span>
                </div>
            </div>

            <MoreHorizIcon className="CommentHeader__more" />
        </div>
    );
}

export default CommentHeader;
