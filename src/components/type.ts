export type ToastType = "success" | "error" | "warning" | "info" | "loading";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export type ToastProps = {
  title?: string;
  message?: string;
  position: ToastPosition;
  duration?: number | boolean;
  type?: ToastType;
  id: number;
  onClose: (id: number) => void;
};

export type ToastOptions = {
  message?: string;
  position?: ToastPosition;
  type?: ToastType;
  duration?: number | boolean;
};
