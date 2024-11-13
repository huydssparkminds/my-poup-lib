import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { ToastOptions, ToastPosition, ToastProps, ToastType } from ".";
import { Toast } from "./toast";

interface ToastItem extends ToastProps {
  id: number;
}

interface ToastFunction {
  success(title: string, options?: Omit<ToastOptions, "type">): void;
  error(title: string, options?: Omit<ToastOptions, "type">): void;
  warning(title: string, options?: Omit<ToastOptions, "type">): void;
  info(title: string, options?: Omit<ToastOptions, "type">): void;
  loading(title: string, options?: Omit<ToastOptions, "type">): void;
}

interface ToastContextProps {
  addToast: (toast: Omit<ToastProps, "id">) => void;
  closeToast: (id: number) => void;
}

// Context
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

let addToastExternal:
  | ((toast: Omit<ToastProps, "id" | "onClose">) => void)
  | null = null;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastProps, "id" | "onClose">) => {
    setToasts((prev) => [
      ...prev,
      { ...toast, id: Date.now(), onClose: closeToast },
    ]);
  }, []);

  const closeToast = useCallback((id: number) => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 0);
  }, []);

  const renderPositionToasts = () => {
    if (toasts.length === 0) return null;

    // Định nghĩa kiểu cho groupedToasts
    const groupedToasts: Record<ToastPosition, ToastItem[]> = {
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-right": [],
      "bottom-center": [],
      "top-center": [],
    };

    toasts.forEach((toast) => {
      groupedToasts[toast.position].push(toast);
    });

    return Object.entries(groupedToasts).map(([position, toasts]) => {
      if (toasts.length === 0) return null;

      return (
        <div
          key={position}
          className={`Toastify__toast-container Toastify__toast-container--${position}`}
        >
          {toasts.map((toast) => {
            return <Toast key={toast.id} {...toast} onClose={closeToast} />;
          })}
        </div>
      );
    });
  };

  addToastExternal = addToast;

  return (
    <ToastContext.Provider value={{ addToast, closeToast }}>
      <div className="Toastify">{renderPositionToasts()}</div>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to use the Toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

const createToast = (): ToastFunction => {
  const createTypeToast = (
    type: ToastType,
    title: string,
    options?: Omit<ToastOptions, "type">
  ) => {
    if (addToastExternal) {
      addToastExternal({
        title,
        message: options?.message,
        position: options?.position || "top-right",
        duration: options?.duration || 5000,
        type,
      });
    }
  };

  return {
    success: (title: string, options?: Omit<ToastOptions, "type">) =>
      createTypeToast("success", title, options),
    error: (title: string, options?: Omit<ToastOptions, "type">) =>
      createTypeToast("error", title, options),
    warning: (title: string, options?: Omit<ToastOptions, "type">) =>
      createTypeToast("warning", title, options),
    info: (title: string, options?: Omit<ToastOptions, "type">) =>
      createTypeToast("info", title, options),
    loading: (title: string, options?: Omit<ToastOptions, "type">) =>
      createTypeToast("loading", title, options),
  };
};

export const toast = createToast();
