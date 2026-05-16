interface ToastProps {
    message: string;
    isError: boolean;
}
export const ToastNotificaiton = ({ message, isError }: ToastProps) => {
    // React uses 'className' rather than 'class'
    return (
        <div className={`toast show${isError ? ' error' : ''}`}>
            {message}
        </div>
    );
}