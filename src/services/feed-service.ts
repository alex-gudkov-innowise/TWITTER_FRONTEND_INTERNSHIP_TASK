import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { RecordsEntity } from '../interfaces/records.entity';

import { LocalStorageService } from './local-storage-service';

export class FeedService {
    public static async getAllFeed(): Promise<RecordsEntity[]> {
        const requestUrl = baseUrl + '/feed/all';
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization: LocalStorageService.getAuthorization(),
            },
        };
        const response = await axios(requestConfig);
        const records: RecordsEntity[] = response.data;

        return records;
    }
}
