import { UsersEntity } from '../interfaces/users.entity';

export class LocalStorageService {
    public static getAuthorization(): string | null {
        return localStorage.getItem('authorization');
    }

    public static setAuthorization(authorization: string): void {
        localStorage.setItem('authorization', authorization);
    }

    public static setCurrentUser(currentUser: UsersEntity): void {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    public static getCurrentUser(): UsersEntity {
        const currentUserString: string | null = localStorage.getItem('currentUser');

        if (!currentUserString) {
            throw new Error('current user not found');
        }

        return JSON.parse(currentUserString);
    }
}
