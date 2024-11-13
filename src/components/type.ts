export type ToastType = "success" | "error" | "warning" | "info";
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
  timeout?: number;
  type?: ToastType;
  id: number;
  onClose: (id: number) => void;
};

export type ToastOptions = {
  message?: string;
  position?: ToastPosition;
  type?: ToastType;
  timeout?: number;
};

export type ToastSetting = {
  position: ToastPosition;
  timeout?: number;
  type?: ToastType;
}
