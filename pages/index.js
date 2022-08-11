import styles from '../styles/Home.module.css'
import Styled from 'styled-components'

export default function Home() {
  const ImportantH1 = Styled.h1`
    color:black;
  `;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to test of <ImportantH1>Multiapoyo!</ImportantH1>
        </h1>


        <p className={styles.description}>
          One moment, please. you will be redirected...
        </p>
        <a
            href="login"
          >Login</a>
      </main>
    </div>
  )
}
