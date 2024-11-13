import { useEffect, useMemo, useRef, useState } from "react";
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  IconClose,
} from "../assets";
import { ToastProps, ToastType } from "./index";

const ToastIcon = ({ type }: { type: ToastType }) => {
  return (
    <div className={`Toastify__toast-icon Toastify__toast-icon--${type}`}>
      {type === "success" && <SuccessIcon />}
      {type === "info" && <InfoIcon />}
      {type === "warning" && <WarningIcon />}
      {type === "error" && <ErrorIcon />}
    </div>
  );
};

const Toast = ({
  title,
  message,
  position,
  type = 'success',
  id,
  timeout = 5000,
  onClose,
}: ToastProps) => {
  const [progress, setProgress] = useState(0);
  const [isHover, setHover] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = () => {
    const increment = 100 / (timeout / 100);
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
  }, [onClose, id, timeout]);

  return (
    <div
      className={`Toastify__toast Toastify__toast--${type} Toastify__toast--${position} ${
        isClosing ? `close-${position}` : ""
      }`}
    >
      <div className="Toastify__toast-body">
        <div className="Toastify__toast-title-container">
          <ToastIcon type={type} />
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
