import { UsersEntity } from '../interfaces/users.entity';

import { LocalStorageService } from './local-storage-service';

export class UsersService {
    public static getCurrentUser(): UsersEntity {
        const currentUser = LocalStorageService.getCurrentUser();

        return currentUser;
    }
}
