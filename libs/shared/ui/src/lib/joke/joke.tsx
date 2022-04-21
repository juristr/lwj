import styles from './joke.module.css';

/* eslint-disable-next-line */
export interface JokeProps {}

export function Joke(props: JokeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Joke!</h1>
    </div>
  );
}

export default Joke;
