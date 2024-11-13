import { useEffect, useRef, useState } from "react";
import {
  ErrorIcon,
  IconClose,
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  WarningIcon,
} from "../assets";
import { ToastProps, ToastType } from "./index";

const ToastIcon = ({ type }: { type: ToastType }) => {
  return (
   <>
        {type === "success" && <SuccessIcon />}
        {type === "info" && <InfoIcon />}
        {type === "warning" && <WarningIcon />}
        {type === "error" && <ErrorIcon />}
        {type === 'loading' && <LoadingIcon />}
   </>
  );
};

const Toast = ({
  title,
  message,
  position,
  type = "success",
  id,
  duration = 5000,
  onClose,
}: ToastProps) => {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = () => {
    if (typeof duration === "boolean") {
      intervalRef.current = setInterval(() => {
        if (!duration) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          handleClose();
          return;
        }
      }, 100);
      return;
    }
    const increment = 100 / (duration / 100);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          handleClose();
          return 100;
        }
        return prev + increment;
      });
    }, 100);
  };

  const stopProgress = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  useEffect(() => {
    startProgress();

    return () => {
      stopProgress();
    };
  }, [onClose, id, duration]);

  return (
    <div
      className={`Toastify__toast Toastify__toast--${type} Toastify__toast--${position} ${
        isClosing ? `close-${position}` : ""
      }`}
      onMouseEnter={stopProgress}
      onMouseLeave={startProgress}
    >
      <div className="Toastify__toast-body">
        <div className="Toastify__toast-title-container">
          <div
            className={`Toastify__toast-bubble Toastify__toast-bubble--${type}`}
          >
            <ToastIcon type={type} />
          </div>
          <p className="Toastify__toast-title">{title}</p>
        </div>
        <p className="Toastify__toast-message">{message}</p>
      </div>
      <button className="Toastify__close-button" onClick={handleClose}>
        <IconClose size={22} />
      </button>
      <div className={`Toastify__clip toast--clip-${type}`}></div>
      <div className={`Toastify__clip--2 toast--clip-${type}`}></div>
      <div className={`Toastify__clip--3 toast--clip-${type}`}></div>
      {/* <div
          className={`Toastify__progress-bar Toastify__progress-bar--${type}`}
        >
          <div
            className="Toastify__progress-bar-inner"
            style={{ width: `${progress}%` }}
          />
        </div> */}
    </div>
  );
};

export { Toast };
