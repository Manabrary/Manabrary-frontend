import * as styles from './MypageLeftSide.css';
import Studying from '../../Studying';
import TopRetentionList	 from '../../TopRetentionList';
import Deadline	 from '../../Deadline';
import Test_Date	 from '../../TestDate';

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

interface TestDate  {
  name: string;
  icon: string;
  value: string;
  type: 'percentage' | 'date';
}

const testDate: TestDate[] = [
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
]


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


export default function MypageLeftSide(){
    return(
        <main className={styles.mainContent}>
          <Studying studyDecks={studyDecks}/>
          <TopRetentionList	qualifications={qualifications}/>
          <Deadline qualifications={qualifications}/>
          <Test_Date testDate={testDate}/>
        </main>
    )
    
}