import { Toast } from "../../types";

export const ToastNotificaiton = ({ message, isError }: Toast) => {
    // React uses 'className' rather than 'class'
    <div className={`toast show${isError ? ' error' : ''}`}>
        {message}
    </div>
}