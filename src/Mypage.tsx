import Left from './components/Left'
import Right from './components/Right';

import * as styles from './Mypage.css';

function Mypage() {

  return (
    <>
      {/* <Header/> */}
      <h2>マイページ</h2>
      <div className={styles.home}>
        <Left />
        <Right />
      </div>
      {/* <Footer/> */}
    </>
    
  );
}

export default Mypage;