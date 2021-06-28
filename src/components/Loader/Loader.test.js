import { render } from '@testing-library/react';
import Loader from './Loader';

describe('<Loader />', () => {
  it('should render Loader component', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toBeTruthy();
  });
});
