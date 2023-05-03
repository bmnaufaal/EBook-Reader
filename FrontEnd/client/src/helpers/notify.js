import { ToastContainer, toast } from "react-toastify";

const notify = (message) => {
  toast(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export default notify;
