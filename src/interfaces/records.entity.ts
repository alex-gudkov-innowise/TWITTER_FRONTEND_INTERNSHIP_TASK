import { RecordImagesEntity } from './record-images.entity';
import { UsersEntity } from './users.entity';

export interface RecordsEntity {
    id: string;
    text: string;
    createdAt: string;
    isComment: boolean;
    isRetweet: boolean;
    isDeleted: boolean;
    author: UsersEntity | null;
    parent: RecordsEntity | null;
    images: RecordImagesEntity[];
    children?: RecordsEntity[];
}
