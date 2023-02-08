import { RecordImagesEntity } from './record-images.entity';
import { UsersEntity } from './users.entity';

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
