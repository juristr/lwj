import styles from './joke.module.css';

/* eslint-disable-next-line */
export interface JokeProps {
  joke: string;
}

export function Joke(props: JokeProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['emoji']}>🤪</div>
      <h2 data-testid="thejoke" className={styles['joke']}>
        {props.joke}
      </h2>
    </div>
  );
}

export default Joke;
