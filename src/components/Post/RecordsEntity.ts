import { RecordImagesEntity } from './RecordImagesEntity';
import { UsersEntity } from './UsersEntity';

export interface RecordsEntity {
    author: UsersEntity | null;
    children?: RecordsEntity[];
    createdAt: Date;
    id: string;
    images: RecordImagesEntity[];
    isComment: boolean;
    isDeleted?: boolean;
    isRetweet: boolean;
    parent?: RecordsEntity | null;
    text: string;
}
