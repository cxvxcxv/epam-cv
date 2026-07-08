import type { Education } from '@/types/timeline.types';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../components/Timeline';

const mockTimelineData: Education[] = [
  {
    title: 'title 1',
    date: '2023',
    content: 'content 1',
  },
  {
    title: 'title 2',
    date: '2024',
    content: 'content 2',
  },
];

describe('timeline component', () => {
  test('renders loading spinner when isLoading is true', () => {
    const { container } = render(
      <Timeline data={[]} loading="pending" error={undefined} />,
    );

    const spinnerWrapper = container.querySelector('.animate-spin');
    expect(spinnerWrapper).toBeInTheDocument();

    expect(screen.queryByText('title 2')).not.toBeInTheDocument();
  });

  test('renders error warning text message when error is present', () => {
    const mockError = { status: 500, data: 'server failure' };
    render(<Timeline data={[]} loading="failed" error={mockError} />);

    const errorMessage = screen.getByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-danger');
  });

  test('renders timeline when data fetches successfully', () => {
    render(
      <Timeline
        data={mockTimelineData}
        loading="succeeded"
        error={undefined}
      />,
    );

    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'title 1',
        level: 3,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 2', level: 3 }),
    ).toBeInTheDocument();

    expect(screen.getByText('content 1')).toBeInTheDocument();
    expect(screen.getByText('content 2')).toBeInTheDocument();
  });

  test('falls back if data is undefined', () => {
    const { container } = render(
      <Timeline data={undefined} loading="succeeded" error={undefined} />,
    );

    const cardElements = container.getElementsByClassName('bg-card');
    expect(cardElements).toHaveLength(0);
  });
});
