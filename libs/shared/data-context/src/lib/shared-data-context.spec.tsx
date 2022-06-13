import { render } from '@testing-library/react';

import SharedDataContext from './shared-data-context';

describe('SharedDataContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDataContext />);
    expect(baseElement).toBeTruthy();
  });
});
