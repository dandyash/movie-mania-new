import { useState } from "react";
import Notification from "../components/Notification";

const useNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const showNotification = (message, type) => {
    setIsVisible(true);
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return [
    <Notification message={message} isVisible={isVisible} type={type} />,
    showNotification,
  ];
};

export default useNotification;
