import classNames from 'classnames';
import { type ReactNode } from 'react';

import styles from './styles.module.scss';
import type { ButtonProps } from './types.ts';

export function CustomButton({
  children,
  type = 'button',
  onClick,
  className,
  isDisabled = false,
  id = '',
  aria_label = 'Button',
}: ButtonProps): ReactNode {
  return (
    <button
      className={classNames(styles.button, className)}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={id}
      aria-label={aria_label}
    >
      {children}
    </button>
  );
}
