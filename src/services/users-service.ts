import { UsersEntity } from '../interfaces/users-entity';

import { LocalStorageService } from './local-storage-service';

export class UsersService {
    public static getCurrentUser(): UsersEntity {
        return LocalStorageService.getCurrentUser();
    }
}
