import React from 'react';
import * as styles from './DeckDetail.css';
import { ArrowLeft } from 'lucide-react';

const DeckDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jar6ecefPvE9meWquWLTVg8AaYQSNm.png" 
                  alt="熊本水検定ロゴ" 
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.creationInfo}>
                <div>作成日：2025/02/07</div>
                <div>作成協力者：</div>
                <div>熊本市役所水保全課</div>
              </div>
            </div>

            <div className={styles.mainContent}>
              <h1 className={styles.title}>熊本水検定_3級</h1>
              <div className={styles.creationDate}>作成日 2025/02/07</div>
              
              <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>熊本水検定とは？</h2>
                <p className={styles.description}>
                  熊本水検定は、熊本の水に関する知識を深めるための検定試験です。熊本の水の歴史や特性、水資源の現状などが出題され、誰でも受験可能です。熊本市は水道水を100%地下水で賄っており、その水質は日本トップクラスとされています。
                </p>
              </section>

              <section className={styles.vocabularySection}>
                <h2 className={styles.sectionTitle}>単語帳情報</h2>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>購入日：</span>
                    <span className={styles.infoValue}></span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>定着率：</span>
                    <span className={styles.infoValue}></span>
                  </div>
                  <div className={styles.cardList}>
                    <span className={styles.infoLabel}>カード一覧</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.cardTitle}>申し込み期限</h3>
              <div className={styles.dateDisplay}>
                <span className={styles.year}>2025</span>
                <span className={styles.date}>9/3</span>
              </div>
              <a href="#" className={styles.link}>お申し込みはこちら →</a>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.cardTitle}>次の試験日</h3>
              <div className={styles.dateDisplay}>
                <span className={styles.year}>2025</span>
                <span className={styles.examDate}>12/7</span>
              </div>
              <a href="#" className={styles.link}>HPにアクセス →</a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DeckDetail;