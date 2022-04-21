import { render } from '@testing-library/react';

import FeatureJokeOfTheDay from './feature-joke-of-the-day';

describe('FeatureJokeOfTheDay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureJokeOfTheDay />);
    expect(baseElement).toBeTruthy();
  });
});
