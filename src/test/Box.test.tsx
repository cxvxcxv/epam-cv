import { render, screen } from '@testing-library/react';
import { Box } from '../components/Box';

describe('box component', () => {
  test('renders the section title and internal children correctly', () => {
    render(
      <Box title="Experience">
        <p>software engineer role</p>
      </Box>,
    );

    const headingEl = screen.getByRole('heading', {
      name: 'Experience',
      level: 2,
    });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveClass('text-primary', 'text-2xl', 'font-bold');

    expect(screen.getByText('software engineer role')).toBeInTheDocument();
  });

  test('applies combined default and custom className styles correctly using cn', () => {
    render(
      <Box title="Skills" className="border bg-slate-50 p-4">
        <div>Content</div>
      </Box>,
    );

    const sectionEl = screen
      .getByRole('heading', { name: 'Skills', level: 2 })
      .closest('section');

    expect(sectionEl).toBeInTheDocument();
    expect(sectionEl).toHaveClass('mb-12');
    expect(sectionEl).toHaveClass('border');
    expect(sectionEl).toHaveClass('p-4');
    expect(sectionEl).toHaveClass('bg-slate-50');
  });

  test('spreads additional attributes using rest props', () => {
    render(
      <Box title="Projects" id="projects-section" data-testid="custom-box">
        <div>Content</div>
      </Box>,
    );

    const sectionEl = screen.getByTestId('custom-box');
    expect(sectionEl).toHaveAttribute('id', 'projects-section');
  });
});
