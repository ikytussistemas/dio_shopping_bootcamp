import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    Theme: "Dark"
}

export const successToast = (message: string) => {
    toast.success(message,toastConfig);
}

export const errorToast = (message: string) => {
    toast.error(message,toastConfig);
}

export const infoToast = (message: string) => {
    toast.info(message,toastConfig);
}