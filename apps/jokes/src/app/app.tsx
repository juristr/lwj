// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
// import NxWelcome from './nx-welcome';
import { FeatureJokeOfTheDay } from '@lwj/feature-joke-of-the-day';

export function App() {
  return (
    <>
      {/* <NxWelcome title="jokes" /> */}
      <FeatureJokeOfTheDay />
    </>
  );
}

export default App;
