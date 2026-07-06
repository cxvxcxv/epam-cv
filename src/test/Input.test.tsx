import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../components/Input'; // Adjust this path to match your folder structure!

describe('input component', () => {
  test('renders with bare minimum props', () => {
    render(<Input value="" onChange={() => {}} />);

    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
  });

  test('handles id and name combinations', () => {
    const { rerender } = render(
      <Input name="test-name" label="Label" value="" onChange={() => {}} />,
    );
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'test-name');

    rerender(
      <Input
        id="test-id"
        name="test-name"
        label="Label"
        value=""
        onChange={() => {}}
      />,
    );
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'test-id');
  });

  test('applies wrapperClassName to the outer container', () => {
    render(
      <Input
        wrapperClassName="custom-wrapper-class"
        value=""
        onChange={() => {}}
      />,
    );

    const inputEl = screen.getByRole('textbox');
    expect(inputEl.closest('div')).toHaveClass('custom-wrapper-class');
  });

  test('applies custom className directly to the input element', () => {
    render(
      <Input className="custom-input-style" value="" onChange={() => {}} />,
    );

    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toHaveClass('custom-input-style');
  });

  test('handles active and inactive error states', () => {
    const { rerender } = render(<Input value="" onChange={() => {}} />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).not.toHaveClass('border-danger');

    rerender(<Input error="invalid" value="" onChange={() => {}} />);
    expect(screen.getByText('invalid')).toBeInTheDocument();
  });

  test('spreads rest props successfully', () => {
    render(
      <Input
        type="password"
        disabled
        placeholder="placeholder"
        value=""
        onChange={() => {}}
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeDisabled();
    expect(inputEl).toHaveAttribute('type', 'password');
  });

  test('fires onChange callback handler during user input', async () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);

    const inputEl = screen.getByRole('textbox');
    await userEvent.type(inputEl, 'Z');

    expect(handleChange).toHaveBeenCalled();
  });
});
