import { RecordsEntity } from './RecordsEntity';

export interface RecordImagesEntity {
    id: string;
    name: string;
    record?: RecordsEntity;
}
