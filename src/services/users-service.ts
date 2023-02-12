import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { RecordsEntity } from '../interfaces/records.entity';
import { UsersEntity } from '../interfaces/users.entity';

import { LocalStorageService } from './local-storage-service';

export class UsersService {
    public static getCurrentUser(): UsersEntity {
        const currentUser = LocalStorageService.getCurrentUser();

        return currentUser;
    }

    public static async getUserFeed(userId: string): Promise<RecordsEntity[]> {
        const requestUrl = baseUrl + '/feed/user/' + userId;
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
