import { FeatureJokeOfTheDay } from '@lwj/feature-joke-of-the-day';

import { Route, Link, Routes } from 'react-router-dom';
import { FeatureJokesList } from '@lwj/feature-jokes-list';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Joke of the Day</Link>
          </li>
          <li>
            <Link to="/list">List of jokes</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<FeatureJokeOfTheDay />} />
        <Route path="/list" element={<FeatureJokesList />} />
      </Routes>
    </>
  );
}

export default App;
