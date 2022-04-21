import { Joke } from '@lwj/shared/ui';
import { useState } from 'react';
import styles from './feature-joke-of-the-day.module.css';
import { getRandomJoke, JokeModel } from './jokes';

/* eslint-disable-next-line */
export interface FeatureJokeOfTheDayProps {}

export function FeatureJokeOfTheDay(props: FeatureJokeOfTheDayProps) {
  const [joke, setJoke] = useState<JokeModel | null>(null);

  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureJokeOfTheDay!</h1>
      <button onClick={() => setJoke(getRandomJoke())}>
        Show me a random joke
      </button>
      {joke && (
        <div>
          <Joke setup={joke.setup} punchline={joke.punchline} />
        </div>
      )}
    </div>
  );
}

export default FeatureJokeOfTheDay;
