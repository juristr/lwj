import { useState } from 'react';
import styles from './joke.module.css';

/* eslint-disable-next-line */
export interface JokeProps {
  setup: string;
  punchline: string;
}

export function Joke(props: JokeProps) {
  const [punchlineVisible, setPunchlineVisible] = useState(false);

  // set punchlineVisible after 2 seconds
  setTimeout(() => setPunchlineVisible(true), 3000);

  return (
    <div className={styles['container']}>
      <div className={styles['emoji']}>🤪</div>
      <div className={styles['jokesContainer']}>
        <h2 data-testid="thejoke" className={styles['joke']}>
          {props.setup}
        </h2>
        {punchlineVisible ? <p>{props.punchline}</p> : <p>???</p>}
      </div>
    </div>
  );
}

export default Joke;
