import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Portfolio } from '../components/Portfolio';

vi.mock('@/constants/portfolio.constants', () => ({
  FILTER_BUTTONS: [
    { label: 'All', scope: null },
    { label: 'Frontend', scope: 'frontend' },
    { label: 'Backend', scope: 'backend' },
  ],
  PORTFOLIO_DATA: [
    {
      title: 'app one',
      description: 'desc one',
      source: 'src1.com',
      photo: 'photo1.jpg',
      scope: 'frontend',
    },
    {
      title: 'app two',
      description: 'desc two',
      source: 'src2.com',
      photo: 'photo2.jpg',
      scope: 'backend',
    },
  ],
}));

describe('portfolio component', () => {
  test('renders all filter buttons and shows all projects by default', () => {
    render(<Portfolio />);

    expect(screen.getByRole('button', { name: 'All' })).toHaveClass(
      'text-primary',
      'font-bold',
    );
    expect(
      screen.getByRole('button', { name: 'Frontend' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Backend' })).toBeInTheDocument();

    expect(screen.getByText('app one')).toBeInTheDocument();
    expect(screen.getByText('app two')).toBeInTheDocument();

    const screenshots = screen.getAllByRole('img');
    expect(screenshots).toHaveLength(2);
    expect(screenshots[0]).toHaveAttribute('src', 'photo1.jpg');
  });

  test('filters projects dynamically and updates button classes when a filter is clicked', async () => {
    render(<Portfolio />);

    const frontendBtn = screen.getByRole('button', { name: 'Frontend' });
    const allBtn = screen.getByRole('button', { name: 'All' });

    await userEvent.click(frontendBtn);

    expect(frontendBtn).toHaveClass('text-primary', 'font-bold');
    expect(allBtn).not.toHaveClass('text-primary', 'font-bold');

    expect(screen.getByText('app one')).toBeInTheDocument();
    expect(screen.queryByText('app two')).not.toBeInTheDocument();
  });
});
