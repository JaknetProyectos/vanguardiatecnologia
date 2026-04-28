// types/alert.ts
export type AlertType = 'error' | 'success' | 'warning' | 'info';

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}