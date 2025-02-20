import * as styles from './Studying.css';
  
interface StudyDeck {
  name: string;
  icon: string;
  newCards: number;
  reviewCards: number;
  progress: number;
}

export default function Studying({
  studyDecks
}:{
    studyDecks:StudyDeck[]
  }
){

    return(
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
    )
    
}
