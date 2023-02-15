import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { baseUrl } from '../constants/base-url';
import { RecordsEntity } from '../interfaces/records-entity';

import { LocalStorageService } from './local-storage-service';

export class TweetsService {
    public static async getAllTweets(): Promise<RecordsEntity[]> {
        const requestUrl = baseUrl + '/tweets/all';
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization: 'Bearer ' + LocalStorageService.getAccessToken(),
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
                Authorization: 'Bearer ' + LocalStorageService.getAccessToken(),
            },
        };
        const response = await axios(requestConfig);
        const records: RecordsEntity[] = response.data;

        return records;
    }

    public static createTweet(text: string, imageFiles: File[]) {
        const requestUrl = baseUrl + '/tweets';
        const formData = new FormData();

        formData.append('text', text);

        imageFiles.forEach((imageFile: File) => {
            formData.append('imageFiles', imageFile, imageFile.name);
        });

        const requestConfig: AxiosRequestConfig<FormData> = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization: 'Bearer ' + LocalStorageService.getAccessToken(),
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        };

        return axios(requestConfig);
    }
}
