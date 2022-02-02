import { render, screen } from '@testing-library/react';
import SummaryPanel from './SummaryPanel';


describe('SummaryPanel component', () => {
  it('should render properly', () => {
    render(
      <SummaryPanel />
    );
    expect(screen.getByText('1 bedroom, 3 bathrooms'));
  });
});
