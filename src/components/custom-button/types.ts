export interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: VoidFunction;
  className?: string;
  isDisabled?: boolean;
  id?: string;
  aria_label?: string;
}
