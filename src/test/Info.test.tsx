import { render, screen } from '@testing-library/react';
import { Info } from '../components/Info';

describe('info component', () => {
  test('renders the content string correctly inside the paragraph element', () => {
    const testMessage = 'testMessage';
    render(<Info content={testMessage} />);

    const paragraphEl = screen.getByText(testMessage);
    expect(paragraphEl).toBeInTheDocument();
    expect(paragraphEl.tagName).toBe('P');
  });

  test('applies the correct layout and background utility classes to the container', () => {
    render(<Info content="testing container styles" />);

    const containerDiv = screen
      .getByText('testing container styles')
      .closest('div');

    expect(containerDiv).toHaveClass('bg-card');
    expect(containerDiv).toHaveClass('p-4');
  });
});
