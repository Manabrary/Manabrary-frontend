import * as styles from './TopRetentionList.css';
  

interface QualificationStatus {
  name: string;
  icon: string;
  value: string;
  type: 'percentage' | 'date';
}

export default function TopRetentionList({
    qualifications
}:{
    qualifications:QualificationStatus[]
  }
){

    

    return(
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
           )
    
        }
        