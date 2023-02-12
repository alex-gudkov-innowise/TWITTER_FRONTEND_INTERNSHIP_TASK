import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { UsersEntity } from '../interfaces/users.entity';

import { LocalStorageService } from './local-storage-service';

export class UsersService {
    public static async getCurrentUser(): Promise<UsersEntity> {
        const requestUrl = baseUrl + '/users/current';
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization: LocalStorageService.getAuthorization(),
            },
        };
        const response = await axios(requestConfig);
        const currentUser = response.data;

        return currentUser;
    }
}
