import * as React from 'react';
import * as styles from './spinner.css';

export function Spinner() {
  return (
    <div className={styles.spinner} role="status">
      <span className={styles.visuallyHidden}>Loading...</span>
    </div>
  );
} 