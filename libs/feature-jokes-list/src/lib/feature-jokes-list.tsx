import styles from './feature-jokes-list.module.css';
import { JOKES, JokeModel } from '@lwj/data-access-jokes';
import { Joke } from '@lwj/shared/ui';

/* eslint-disable-next-line */
export interface FeatureJokesListProps {}

export function FeatureJokesList(props: FeatureJokesListProps) {
  return (
    <div className={styles['container']}>
      <h1>List of Jokes</h1>
      {JOKES.map((joke: JokeModel) => (
        <Joke
          setup={joke.setup}
          punchline={joke.punchline}
          noAnimation={true}
        />
      ))}
    </div>
  );
}

export default FeatureJokesList;
