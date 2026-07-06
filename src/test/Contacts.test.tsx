import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';
import { Contacts } from '../components/Contacts';

vi.mock('@/constants/contacts.constants', () => ({
  CONTACT_LINKS: [
    {
      href: 'mailto:test@example.com',
      icon: faEnvelope,
      contact: 'Email',
      username: 'email@example.com',
    },
    {
      href: 'tel:+123456789',
      icon: faPhone,
      contact: 'Phone',
      username: '',
    },
  ],
}));

describe('contacts component', () => {
  test('renders contact links with target attributes and matching text titles', () => {
    render(<Contacts />);

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
    expect(emailLink).toHaveAttribute('target', '_blank');
    expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer');

    const phoneLink = screen.getByRole('link', { name: /phone/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+123456789');
  });

  test('handles the optional username conditional text element branch paths correctly', () => {
    render(<Contacts />);

    expect(screen.getByText('email@example.com')).toBeInTheDocument();

    expect(screen.queryByText('Phone')?.nextSibling).toBeNull();
  });
});
