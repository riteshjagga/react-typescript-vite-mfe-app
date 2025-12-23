import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Underwriting MFE', () => {
  it('renders the Dashboard component', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
