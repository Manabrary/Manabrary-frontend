import * as React from 'react';
import { Navigate } from 'react-router-dom';
import * as styles from './Mypage.css';
import MypageLeftSide from './mypageleft/MypageLeftSide';
import MypageRightSide from './MyPageRightSide/MypageRightSide';
import { useAuth } from '../../hooks/useAuth';
import { Spinner } from '../../common/spinner/Spinner';

export default function Mypage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MypageLeftSide />
        <MypageRightSide />
      </div>
    </div>
  );
}

