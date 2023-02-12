export class LocalStorageService {
    public static getAuthorization(): string | null {
        return localStorage.getItem('Authorization');
    }
}
