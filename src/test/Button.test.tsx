import { Button } from '@/components/Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  test('renders button text correctly', () => {
    render(<Button>Click Me</Button>);

    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
