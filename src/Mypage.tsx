import React from 'react';
import * as styles from './Mypage.css';

interface StudyDeck {
  name: string;
  icon: string;
  newCards: number;
  reviewCards: number;
  progress: number;
}

interface QualificationStatus {
  name: string;
  icon: string;
  value: string;
  type: 'percentage' | 'date';
}

const Mypage: React.FC = () => {
  const studyDecks: StudyDeck[] = [
    {
      name: '熊本水検定',
      icon: '/kumamoto-icon.png',
      newCards: 27,
      reviewCards: 38,
      progress: 40,
    },
    {
      name: '京都検定',
      icon: '/kyoto-icon.png',
      newCards: 10,
      reviewCards: 25,
      progress: 30,
    },
  ];

  const qualifications: QualificationStatus[] = [
    {
      name: '熊本水検定',
      icon: '/kumamoto-icon.png',
      value: '92%',
      type: 'percentage',
    },
    {
      name: '熊本水検定',
      icon: '/kumamoto-icon.png',
      value: '9/3',
      type: 'date',
    },
    {
      name: '京都検定',
      icon: '/kyoto-icon.png',
      value: '9/19',
      type: 'date',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>学習中</h2>
              <a href="/decks" className={styles.deckLink}>デッキ一覧 {'>'}</a>
            </div>
            
            <div className={styles.decks}>
              {studyDecks.map((deck, index) => (
                <div key={index} className={styles.deckCard}>
                  <div className={styles.deckIconWrapper}>
                    <img src={deck.icon || "/placeholder.svg"} alt={deck.name} className={styles.deckIcon} />
                  </div>
                  <div className={styles.deckInfo}>
                    <h3 className={styles.deckName}>{deck.name}</h3>
                    <div className={styles.cardCounts}>
                      <div className={styles.cardCountItem}>
                        <span className={styles.cardLabel}>新規</span>
                        <span className={styles.cardNumber}>{deck.newCards}</span>
                      </div>
                      <div className={styles.cardCountItem}>
                        <span className={styles.cardLabel}>復習</span>
                        <span className={styles.cardNumber}>{deck.reviewCards}</span>
                      </div>
                    </div>
                    <div className={styles.progressBarWrapper}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${deck.progress}%` }} 
                        />
                      </div>
                      <div className={styles.progressDots}>
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>定着度が90%以上</h2>
            <div className={styles.qualifications}>
              {qualifications.filter(q => q.type === 'percentage').map((qual, index) => (
                <div key={index} className={styles.qualificationCard}>
                  <div className={styles.qualIconWrapper}>
                    <img src={qual.icon || "/placeholder.svg"} alt={qual.name} className={styles.qualIcon} />
                  </div>
                  <div className={styles.qualInfo}>
                    <h3 className={styles.qualName}>{qual.name}</h3>
                    <span className={styles.percentage}>{qual.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>申し込み期限が近い資格</h2>
            <div className={styles.qualifications}>
              {qualifications.filter(q => q.type === 'date').map((qual, index) => (
                <div key={index} className={styles.qualificationCard}>
                  <div className={styles.qualIconWrapper}>
                    <img src={qual.icon || "/placeholder.svg"} alt={qual.name} className={styles.qualIcon} />
                  </div>
                  <div className={styles.qualInfo}>
                    <h3 className={styles.qualName}>{qual.name}</h3>
                    <span className={styles.date}>{qual.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
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
            {/* Calendar implementation */}
          </div>

          <div className={styles.sideSection}>
            <h2 className={styles.sideSectionTitle}>称号</h2>
            {/* Titles implementation */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Mypage;