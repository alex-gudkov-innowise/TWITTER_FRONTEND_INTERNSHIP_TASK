import { AxiosError } from 'axios';
import { useState } from 'react';

import { useNavigateToAuth } from './use-navigate-to-auth';

export function useFetching(callback: any): [() => Promise<void>, boolean] {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigateToAuth = useNavigateToAuth();

    async function fetching() {
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) {
                    navigateToAuth();
                }
            }
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading];
}
