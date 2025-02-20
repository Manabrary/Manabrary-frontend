import { style } from '@vanilla-extract/css';

const BLUE = '#1e3a8a';
const ORANGE = '#ff9047';
const BORDER_GRAY = '#e5e7eb';

export const container = style({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#f8fafc',
});

export const content = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '2rem',
      flexDirection: 'row',
      maxWidth: '1200px',
      margin: '0 auto',
    }
  }
});

export const mainContent = style({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const section = style({
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const sectionTitle = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#1f2937',
});

export const deckLink = style({
  color: BLUE,
  fontSize: '0.875rem',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  }
});

export const decks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const deckCard = style({
  display: 'flex',
  padding: '1rem',
  borderRadius: '0.375rem',
  border: `1px solid ${BORDER_GRAY}`,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#f8fafc',
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  '@media': {
    'screen and (max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }
  }
});

export const deckIconWrapper = style({
  width: '60px',
  height: '60px',
  marginRight: '1rem',
  flexShrink: 0,
  '@media': {
    'screen and (max-width: 640px)': {
      marginRight: 0,
      marginBottom: '1rem',
    }
  }
});

export const deckIcon = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const deckInfo = style({
  flex: '1',
});

export const deckName = style({
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
});

export const cardCounts = style({
  display: 'flex',
  gap: '2rem',
  marginBottom: '1rem',
  '@media': {
    'screen and (max-width: 640px)': {
      justifyContent: 'center',
    }
  }
});

export const cardCountItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const cardLabel = style({
  fontSize: '0.875rem',
  color: '#6b7280',
});

export const cardNumber = style({
  color: BLUE,
  fontWeight: '600',
});

export const progressBarWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const progressBar = style({
  flex: '1',
  height: '6px',
  backgroundColor: '#e5e7eb',
  borderRadius: '3px',
  overflow: 'hidden',
});

export const progressFill = style({
  height: '100%',
  backgroundColor: BLUE,
  transition: 'width 0.3s ease',
});

export const progressDots = style({
  display: 'flex',
  gap: '4px',
});

export const dot = style({
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: '#d1d5db',
});

export const sidebar = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '300px',
    }
  }
});

export const profile = style({
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  marginBottom: '2rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});

export const profileTitle = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  marginBottom: '1rem',
});

export const profileContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.5rem',
});

export const profileIcon = style({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: '#f3f4f6',
});

export const profileInfo = style({
  flex: '1',
});

export const userName = style({
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '0.25rem',
});

export const levelWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.25rem',
  marginBottom: '0.25rem',
});

export const levelNumber = style({
  color: ORANGE,
  fontSize: '1.5rem',
  fontWeight: '700',
});

export const registrationDate = style({
  fontSize: '0.875rem',
  color: '#6b7280',
});

export const stats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  textAlign: 'center',
  padding: '1rem 0',
  borderTop: `1px solid ${BORDER_GRAY}`,
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const statLabel = style({
  fontSize: '0.75rem',
  color: '#6b7280',
});

export const statNumber = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#1f2937',
});

export const qualifications = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const qualificationCard = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  borderRadius: '0.375rem',
  border: `1px solid ${BORDER_GRAY}`,
});

export const qualIconWrapper = style({
  width: '40px',
  height: '40px',
  marginRight: '1rem',
  flexShrink: 0,
});

export const qualIcon = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const qualInfo = style({
  flex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const qualName = style({
  fontSize: '0.875rem',
  fontWeight: '500',
});

export const percentage = style({
  color: ORANGE,
  fontSize: '1.125rem',
  fontWeight: '600',
});

export const date = style({
  color: ORANGE,
  fontSize: '1.125rem',
  fontWeight: '600',
});

export const sideSection = style({
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  marginBottom: '1rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});

export const sideSectionTitle = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  marginBottom: '1rem',
});