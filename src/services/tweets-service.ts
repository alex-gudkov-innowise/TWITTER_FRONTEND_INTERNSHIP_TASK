import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { RecordsEntity } from '../interfaces/records.entity';

import { LocalStorageService } from './local-storage-service';

export class TweetsService {
    public static async getAllTweets(): Promise<RecordsEntity[]> {
        const requestUrl = baseUrl + '/tweets/all';
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

    public static async getAllUserTweets(userId: string): Promise<RecordsEntity[]> {
        const requestUrl = baseUrl + '/tweets/user/' + userId;
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
