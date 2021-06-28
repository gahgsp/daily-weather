import { render } from '@testing-library/react';
import SummarySlider from './SummarySlider';

describe('<SummarySlider />', () => {
  it('should render SummarySlider component', () => {
    const { asFragment } = render(<SummarySlider />);
    expect(asFragment()).toBeTruthy();
  });
});
