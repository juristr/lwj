import { render } from '@testing-library/react';

import FeatureJokesList from './feature-jokes-list';

describe('FeatureJokesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureJokesList />);
    expect(baseElement).toBeTruthy();
  });
});
