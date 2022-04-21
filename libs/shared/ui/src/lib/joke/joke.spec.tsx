import { render } from '@testing-library/react';

import Joke from './joke';

describe('Joke', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Joke />);
    expect(baseElement).toBeTruthy();
  });
});
