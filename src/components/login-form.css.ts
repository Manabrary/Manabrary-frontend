import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

export const header = style({
  height: '64px',
  backgroundColor: '#1e3a8a',
  marginBottom: '2rem',
});

export const main = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 1rem',
});

export const card = style({
  width: '100%',
  maxWidth: '400px',
  backgroundColor: 'white',
});

export const cardTitle = style({
  textAlign: 'center',
  fontSize: '1.25rem',
  fontWeight: '600',
});

export const cardContent = style({
  padding: '1.5rem',
});

export const formGroup = style({
  marginBottom: '1.5rem',
});

export const passwordHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

export const forgotPassword = style({
  fontSize: '0.875rem',
  color: '#2563eb',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const input = style({
  width: '100%',
  marginTop: '0.5rem',
});

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '1.5rem',
});

export const checkboxLabel = style({
  fontSize: '0.875rem',
  userSelect: 'none',
});

export const loginButton = style({
  width: '100%',
  backgroundColor: '#1e3a8a',
  color: 'white',
  marginBottom: '1.5rem',
  ':hover': {
    backgroundColor: '#1e40af',
  },
});

export const dividerContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '1.5rem 0',
});

export const divider = style({
  flex: 1,
});

export const dividerText = style({
  color: '#6b7280',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
});

export const lineButton = style({
  width: '100%',
  backgroundColor: '#00B900',
  color: 'white',
  marginBottom: '1rem',
  ':hover': {
    backgroundColor: '#009900',
  },
});

export const googleButton = style({
  width: '100%',
  marginBottom: '1.5rem',
});

export const signupContainer = style({
  textAlign: 'center',
});

export const signupLink = style({
  color: '#2563eb',
  textDecoration: 'none',
  fontSize: '0.875rem',
  ':hover': {
    textDecoration: 'underline',
  },
});