import * as styles from './Deadline.css';
  
interface QualificationStatus {
    name: string;
    icon: string;
    value: string;
    type: 'percentage' | 'date';
  }
  
  export default function Deadline({
      qualifications
  }:{
      qualifications:QualificationStatus[]
    }
  ){

    return(
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

    )
    
}
