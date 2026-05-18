//------------------------------------------------------
// Toast hook
//------------------------------------------------------
import { useState, useCallback } from "react";

// Data type to hold information on the message and state of hook
interface Toast {
    message: string;
    isError: boolean;
}

/**
 * useCallback - does not execute function, only "remembers" it
 * In this case, the Toast notfication only needs to be rendered when the isError state changes
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