import * as styles from './TestDate.css';
  
interface TestDate {
    name: string;
    icon: string;
    value: string;
    type: 'percentage' | 'date';
  }
  
  export default function TestDate({
    testDate
  }:{
    testDate:TestDate[]
    }
  ){

    return(
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>試験日が近い資格</h2>
            <div className={styles.testDate}>
              {testDate.filter(q => q.type === 'date').map((qual, index) => (
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
