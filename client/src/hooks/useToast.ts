import { useState, useCallback } from "react";

interface Toast {
    message: string;
    isError: boolean;
}

/**
 * useCallback - does not execute function, only "remembers" it
 * Used for efficiency-sake because JavaScript functions are objects
 *  - Prevents re-rendering from the function
 *  - Avoid dependency loops
 *  - Stable custom hooks
 */
export const useToast = () => {
    const [toast, setToast] = useState<Toast | null>(null);

    const showToast = useCallback((message: string, isError: boolean = false) => {
        setToast({ message, isError });
        setTimeout(() => setToast(null), 1800);
    }, []);

    return { toast, showToast };
};