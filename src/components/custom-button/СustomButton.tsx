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
}: ButtonProps): ReactNode {
  return (
    <button
      className={classNames(styles.button, className)}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={id}
    >
      {children}
    </button>
  );
}
