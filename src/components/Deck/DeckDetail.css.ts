import { style } from '@vanilla-extract/css';

const BLUE = '#1e3a8a';
const LINK_BLUE = '#3b82f6';
const TEXT_GRAY = '#374151';
const RED = '#ef4444';

export const container = style({
  minHeight: '100vh',
  backgroundColor: 'white',
});

export const header = style({
  backgroundColor: BLUE,
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem',
});

export const backButton = style({
  background: 'none',
  border: 'none',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const main = style({
  padding: '1.5rem',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const contentWrapper = style({
  display: 'grid',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 300px',
    },
  },
});

export const leftContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const logoSection = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
});

export const logo = style({
  width: '180px',
  height: '180px',
  flexShrink: 0,
});

export const logoImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const creationInfo = style({
  fontSize: '0.875rem',
  color: TEXT_GRAY,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const mainContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  color: TEXT_GRAY,
});

export const creationDate = style({
  fontSize: '0.875rem',
  color: TEXT_GRAY,
});

export const descriptionSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const sectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: TEXT_GRAY,
});

export const description = style({
  fontSize: '0.875rem',
  lineHeight: '1.6',
  color: TEXT_GRAY,
});

export const vocabularySection = style({
  borderTop: '1px solid #e5e7eb',
  paddingTop: '1.5rem',
});

export const infoGrid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
});

export const infoItem = style({
  display: 'flex',
  gap: '1rem',
});

export const infoLabel = style({
  fontSize: '0.875rem',
  color: TEXT_GRAY,
});

export const infoValue = style({
  fontSize: '0.875rem',
  color: TEXT_GRAY,
});

export const cardList = style({
  marginTop: '1rem',
});

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const sidebarCard = style({
  backgroundColor: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  padding: '1.25rem',
});

export const cardTitle = style({
  fontSize: '1rem',
  fontWeight: '600',
  color: TEXT_GRAY,
  marginBottom: '1rem',
});

export const dateDisplay = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.5rem',
  marginBottom: '1rem',
});

export const year = style({
  fontSize: '1rem',
  color: TEXT_GRAY,
});

export const date = style({
  fontSize: '2rem',
  fontWeight: '600',
  color: '#ff9047',
});

export const examDate = style({
  fontSize: '2rem',
  fontWeight: '600',
  color: RED,
});

export const link = style({
  color: LINK_BLUE,
  textDecoration: 'none',
  fontSize: '0.875rem',
  ':hover': {
    textDecoration: 'underline',
  },
});