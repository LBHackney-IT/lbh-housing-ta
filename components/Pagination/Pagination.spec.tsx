import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import SummaryPanel from './Pagination';


describe('Pagination component', () => {
  it('should render properly', () => {
    render(
      <Pagination />
    );
    expect(screen.getByText('Previous'));
    expect(screen.getByText('Next'));
  });
});
