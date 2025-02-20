import { style } from '@vanilla-extract/css';

const BLUE = '#1e3a8a';

export const header = style({
  backgroundColor: BLUE,
  display: 'flex',
  position: 'sticky',
  top: 0,
  color: 'white',
  padding: '1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '1rem 2rem',
    }
  }
});

export const headerTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
});