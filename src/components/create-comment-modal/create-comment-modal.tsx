import './create-comment-modal.css';
import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import React, { BaseSyntheticEvent, useState } from 'react';

import { useFetching } from '../../hooks/use-fetch';
import { RecordsEntity } from '../../interfaces/records-entity';
import { CommentsService } from '../../services/comments-service';

interface CreateCommentModalProps {
    parentRecord: RecordsEntity;
    setVisibleCreateCommentModal?: any;
    isVisibleCreateCommentModal: boolean;
}

function CreateCommentModal({
    isVisibleCreateCommentModal,
    parentRecord,
    setVisibleCreateCommentModal,
}: CreateCommentModalProps) {
    const [commentText, setCommentText] = useState<string>('');
    const [commentImageFiles, setCommentImageFiles] = useState<File[]>([]);
    const [fetchCreateComment, isCreateCommentLoading, errorMessage] = useFetching(async () => {
        await CommentsService.createComment(parentRecord.id, commentText, commentImageFiles);
    });

    function closeCreateCommentModal() {
        setVisibleCreateCommentModal(false);
    }

    function changeCommentText(event: BaseSyntheticEvent) {
        setCommentText(event.target.value);
    }

    function createComment() {
        fetchCreateComment();
    }

    function changeFilesInput(event: BaseSyntheticEvent) {
        setCommentImageFiles(Array.from(event.target.files));
    }

    return (
        <div
            className={
                isVisibleCreateCommentModal ? 'CreateCommentModal CreateCommentModal_active' : 'CreateCommentModal'
            }
            onClick={closeCreateCommentModal}
        >
            <div
                className="CreateCommentModal__container"
                onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
            >
                <div className="CreateCommentModal__header">
                    <img
                        src={require('../../static/images/avatar.png')}
                        alt="avatar"
                        className="CreateCommentModal__user-avatar"
                    />
                    <CloseIcon className="CreateCommentModal__close" onClick={closeCreateCommentModal} />
                </div>

                <div className="CreateCommentModal__body">
                    <span className="CreateCommentModal__replying-to">Replying to{parentRecord.author.name}</span>
                    <textarea
                        value={commentText}
                        onChange={changeCommentText}
                        className="CreateCommentModal__input"
                        placeholder="Add a comment"
                        maxLength={320}
                    />
                    {isCreateCommentLoading ? (
                        <span>loading...</span>
                    ) : (
                        <span className="CreateCommentModal__error-message">{errorMessage}</span>
                    )}
                </div>

                <div className="CreateCommentModal__footer">
                    {/* <CropOriginalIcon className="CreateCommentModal__attach-image" /> */}
                    <input type="file" onChange={changeFilesInput} accept="image/*" multiple />
                    <Button variant="outlined" className="CreateCommentModal__comment-button" onClick={createComment}>
                        Comment
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateCommentModal;
