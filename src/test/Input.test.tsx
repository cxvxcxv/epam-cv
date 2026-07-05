import { Input } from '@/components/Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  test('renders input with correct label and placeholder', () => {
    render(
      <Input
        name="test-input"
        label="Username"
        placeholder="Enter username"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
  });

  test('displays error message when error prop is provided', () => {
    render(
      <Input
        name="test-input"
        label="Username"
        error="This field is required"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
  });

  test('triggers onChange handler when user types', async () => {
    const handleChange = vi.fn();
    render(
      <Input
        name="test-input"
        label="Username"
        value=""
        onChange={handleChange}
      />,
    );

    const inputEl = screen.getByLabelText(/username/i);
    await userEvent.type(inputEl, 'A');

    expect(handleChange).toHaveBeenCalled();
  });
});
