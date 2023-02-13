import axios from 'axios';

import { baseUrl } from '../constants/base-url';
import { UserEntityWithJwtPair } from '../interfaces/user-entity-with-jwt-pair';
import { UsersEntity } from '../interfaces/users-entity';

import { LocalStorageService } from './local-storage-service';

export class AuthService {
    public static async logInUser(userEmail: string, userPassword: string): Promise<UserEntityWithJwtPair> {
        const data = JSON.stringify({
            email: userEmail,
            password: userPassword,
        });

        const requestConfig = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: baseUrl + '/auth/sign-in',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        };

        const response = await axios(requestConfig);
        const userEntityWithJwtPair: UserEntityWithJwtPair = response.data;

        return userEntityWithJwtPair;
    }

    public static async signUpUser(userName: string, userEmail: string, userPassword: string) {
        const data = JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
        });

        const requestConfig = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: baseUrl + '/auth/sign-up',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        };

        await axios(requestConfig);
    }
}
