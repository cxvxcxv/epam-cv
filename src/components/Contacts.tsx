import { CONTACT_LINKS } from '@/constants/contacts.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contacts = () => {
  return (
    <div>
      {CONTACT_LINKS.map(link => (
        <a
          key={link.href}
          href={link.href}
          className="flex h-16 items-center gap-4 p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={link.icon}
            className="text-primary"
            size="xl"
          />
          <div>
            <p className="font-bold">{link.contact}</p>
            {link.username ? (
              <p className="text-dimmed">{link.username}</p>
            ) : null}
          </div>
        </a>
      ))}
    </div>
  );
};
