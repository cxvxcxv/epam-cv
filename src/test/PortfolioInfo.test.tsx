import { PortfolioInfo } from '@/components/PortfolioInfo';
import type { Project } from '@/types/portfolio.types';
import { render, screen } from '@testing-library/react';

const mockProject: Project = {
  title: 'Test title',
  description: 'Test description',
  source: 'somesite.com',
  photo: 'somesite.com',
  scope: 'frontend',
};

describe('PortfolioInfo component', () => {
  test('renders project title, description, and source link correctly', () => {
    render(<PortfolioInfo project={mockProject} />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();

    const linkEl = screen.getByRole('link', { name: /view source/i });
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute('href', 'somesite.com');
    expect(linkEl).toHaveAttribute('target', '_blank');
    expect(linkEl).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('contains the correct utility classes for group-hover slide transitions', () => {
    const { container } = render(
      <div className="group">
        <PortfolioInfo project={mockProject} />
      </div>,
    );

    const overlayDiv = container.querySelector('.absolute');

    expect(overlayDiv).toHaveClass('translate-y-full');
    expect(overlayDiv).toHaveClass('group-hover:translate-y-0');
  });
});
