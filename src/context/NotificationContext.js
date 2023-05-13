import { createContext } from "react";
import useNotification from "../hooks/useNotification";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [Notification, showNotification] = useNotification();
  return (
    <NotificationContext.Provider
      value={{
        showNotification,
      }}
    >
      {Notification}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
