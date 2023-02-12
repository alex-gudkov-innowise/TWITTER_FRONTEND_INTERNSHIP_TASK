import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from '../constants/base-url';
import { UsersEntity } from '../interfaces/users.entity';

export class UsersService {
    public static async getCurrentUser(): Promise<UsersEntity> {
        const requestUrl = baseUrl + '/users/current';
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: requestUrl,
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMGFiZTIyOS1jN2I0LTQ3YjAtOGRiNi04Yzk3OWYxNDRmZTQiLCJ1c2VyUm9sZXMiOltdLCJpYXQiOjE2NzYxNDgyMDYsImV4cCI6MTY3NzAxMjIwNn0.IPjRHtGH3Yba7ImwTLqnlTGcECb5Yk2mYZw-UuCQcNc',
            },
        };
        const response = await axios(requestConfig);
        const currentUser = response.data;

        return currentUser;
    }
}
