import type { FeedbackDatum } from '@/types/feedback.types';
import { render, screen } from '@testing-library/react';
import { Feedback } from '../components/Feedback';

vi.mock('../components/Info', () => ({
  Info: ({ content }: { content: string }) => (
    <div data-testid="mock-info">{content}</div>
  ),
}));

const mockFeedbackData: FeedbackDatum[] = [
  {
    content: 'content 1',
    avatar: 'avatar1.png',
    author: 'author1',
    link: 'https://linkedin.com/in/author1',
  },
  {
    content: 'content2',
    avatar: 'avatar2.png',
    author: 'author2',
    link: 'github.com/author2',
  },
];

describe('feedback component', () => {
  test('renders mock with authors, avatars, and text contents', () => {
    render(<Feedback data={mockFeedbackData} />);

    expect(
      screen.getByText(
        (content, element) =>
          element?.tagName === 'I' && content.startsWith('author1'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        (content, element) =>
          element?.tagName === 'I' && content.startsWith('author2'),
      ),
    ).toBeInTheDocument();

    const avatars = screen.getAllByRole('img', { name: /author's avatar/i });
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute('src', 'avatar1.png');
    expect(avatars[1]).toHaveAttribute('src', 'avatar2.png');

    expect(screen.getByText('content 1')).toBeInTheDocument();
    expect(screen.getByText('content2')).toBeInTheDocument();
  });

  test('handles the absolute vs relative url correctly', () => {
    render(<Feedback data={mockFeedbackData} />);

    const primaryLink = screen.getByRole('link', {
      name: 'https://linkedin.com/in/author1',
    });
    expect(primaryLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/author1',
    );
    expect(primaryLink).toHaveAttribute('target', '_blank');
    expect(primaryLink).toHaveAttribute('rel', 'noopener noreferrer');

    const secondaryLink = screen.getByRole('link', {
      name: 'github.com/author2',
    });
    expect(secondaryLink).toHaveAttribute('href', 'https://github.com/author2');
  });
});
