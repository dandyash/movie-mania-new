import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const Notification = ({ message, type, isVisible }) => {
  return (
    <div
      className={`fixed ${isVisible ? "top-5" : "-top-full"
        } left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white dark:bg-black text-black dark:text-white shadow-lg p-3 rounded-lg z-50 transition-all duration-300`}
    >
      {type === "success" && <CheckCircleIcon color="green" height={30} />}
      {type === "info" && <InformationCircleIcon color="blue" height={30} />}
      {type === "error" && <ExclamationCircleIcon />}
      <p>{message}</p>
    </div>
  );
};
export default Notification;
