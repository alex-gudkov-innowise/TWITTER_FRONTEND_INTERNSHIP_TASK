import './record-page.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../../hooks/use-fetch';
import { useNavigateTo } from '../../hooks/use-navigate-to';
import { RecordsEntity } from '../../interfaces/records-entity';
import { RecordsService } from '../../services/records-service';
import Comment from '../comment/comment';
import Post from '../post/post';
import Sidebar from '../sidebar/sidebar';
import Widgets from '../widgets/widgets';

function RecordPage() {
    const { recordId = '' } = useParams<string>();
    const [record, setRecord] = useState<RecordsEntity>();
    const [recordComments, setRecordComments] = useState<RecordsEntity[]>([]);
    const [fetchRecord, isRecordLoading] = useFetching(async () => {
        const record = await RecordsService.getRecordById(recordId);
        const recordComments = await RecordsService.getRecordComments(recordId);

        setRecord(record);
        setRecordComments(recordComments);
    });
    const navigateToHome = useNavigateTo('/home');

    useEffect(() => {
        fetchRecord();
    }, []);

    return (
        <div className="RecordPage">
            <Sidebar activeElement="RecordPage" />
            <div className="RecordPage__container">
                <div className="RecordPage__header">
                    <ArrowBackIcon className="RecordPage__back-button" onClick={navigateToHome} />
                    <h1 className="RecordPage__title">Tweet</h1>
                </div>
                {record ? <Post record={record} /> : ''}
                <div className="RecordPage__comments-container">
                    <div className="RecordPage__comments-header">
                        <span className="RecordPage__comments-title">Comments:</span>
                    </div>
                    {recordComments.map(
                        (comment: RecordsEntity): JSX.Element => (
                            <Comment record={comment} key={comment.id} />
                        ),
                    )}
                </div>
            </div>
            <Widgets />
        </div>
    );
}

export default RecordPage;
