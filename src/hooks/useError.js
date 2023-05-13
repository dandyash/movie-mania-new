import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useError = (isError, message) => {
  const { showNotification } = useContext(NotificationContext);
  if (isError) {
    showNotification(message, "success");
  }
};
export default useError;
