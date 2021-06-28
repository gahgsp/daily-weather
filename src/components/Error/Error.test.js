import { render } from '@testing-library/react';
import Error from './Error';

describe('<Error />', () => {
  it('should render Error component', () => {
    const { asFragment } = render(<Error />);
    expect(asFragment()).toBeTruthy();
  });

  it('should render Error component with correct title', () => {
    const { getByText } = render(<Error title="Error Title" />);
    expect(getByText(/Error Title/i)).toBeTruthy();
  });

  it('should render Error component with correct description', () => {
    const { getByText } = render(<Error description="Error Description" />);
    expect(getByText(/Error Description/i)).toBeTruthy();
  });
});
