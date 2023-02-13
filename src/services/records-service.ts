import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { RecordsEntity } from '../interfaces/records.entity';

import { LocalStorageService } from './local-storage-service';

export class RecordsService {
    public static async getRecordById(recordId: string): Promise<RecordsEntity> {
        const requestUrl = baseUrl + '/records/' + recordId;
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization: LocalStorageService.getAuthorization(),
            },
        };
        const response = await axios(requestConfig);
        const record: RecordsEntity = response.data;

        return record;
    }
}
