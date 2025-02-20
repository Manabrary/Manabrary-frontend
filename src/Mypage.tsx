
import * as styles from './Mypage.css';
import MypageLeftSide from './components/MypageLeftSide';
import MypageRightSide from './components/MyPageRightSide/MypageRightSide';

export default function Mypage(){
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MypageLeftSide />

        <MypageRightSide />

      </div>
    </div>
  );
};

