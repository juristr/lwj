import styles from './feature-jokes-list.module.css';

/* eslint-disable-next-line */
export interface FeatureJokesListProps {}

export function FeatureJokesList(props: FeatureJokesListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureJokesList!</h1>
    </div>
  );
}

export default FeatureJokesList;
