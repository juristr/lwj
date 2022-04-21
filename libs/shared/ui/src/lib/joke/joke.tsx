import { useEffect, useState } from 'react';
import styles from './joke.module.css';

/* eslint-disable-next-line */
export interface JokeProps {
  setup: string;
  punchline: string;
  noAnimation?: boolean;
}

export function Joke(props: JokeProps) {
  const [punchlineVisible, setPunchlineVisible] = useState(false);

  // set punchlineVisible after 2 seconds
  useEffect(() => {
    if (props.noAnimation === false) {
      setPunchlineVisible(false);
      const timer = setTimeout(() => setPunchlineVisible(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setPunchlineVisible(true);
      return () => {};
    }
  }, [props.setup, props.punchline, props.noAnimation]);

  return (
    <div className={styles['container']}>
      <span className={styles['emoji']} role="img" aria-label="emoji">
        🤪
      </span>
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
