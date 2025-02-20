import * as styles from './MyPageRightSide.css';
import { Calendar } from '../ui/calendar';

export default function MypageRightSide(){
    return(
        <div className={styles.sidebar}>
          <div className={styles.profile}>
            <h2 className={styles.profileTitle}>プロフィール</h2>
            <div className={styles.profileContent}>
              <div className={styles.profileIcon}>
                <img src="/profile-icon.png" alt="Profile" />
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.userName}>熊本 学ぶ</div>
                <div className={styles.levelWrapper}>
                  <span>Lv.</span>
                  <span className={styles.levelNumber}>25</span>
                </div>
                <div className={styles.registrationDate}>2025/01/20に登録</div>
              </div>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>総新規カード</span>
                <span className={styles.statNumber}>160</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>総復習カード</span>
                <span className={styles.statNumber}>201</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>学習日数</span>
                <span className={styles.statNumber}>96</span>
              </div>
            </div>
          </div>

          <div className={styles.sideSection}>
            <h2 className={styles.sideSectionTitle}>カレンダー</h2>
            <Calendar />
          </div>

          <div className={styles.sideSection}>
            <h2 className={styles.sideSectionTitle}>称号</h2>
            {/* Titles implementation */}
          </div>
        </div>
    )
}