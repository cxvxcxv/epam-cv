import { NAVIGATION_TABS } from '@/constants/navigation.constants';
import { cn } from '@/utils/cn';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [activeSection, setActiveSection] = useState('');

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const observers = NAVIGATION_TABS.map(tab => {
      const el = document.getElementById(tab.sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(tab.sectionId);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' },
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => obs?.observer.unobserve(obs.el));
    };
  }, []);

  return (
    <aside
      className={cn(
        'bg-foreground text-background sticky top-0 left-0 z-40 h-screen transition-all',
        'flex flex-col justify-between',
        isOpen ? 'w-20 translate-x-0 lg:w-64' : 'w-0 -translate-x-full lg:w-20',
        'lg:translate-x-0',
      )}
    >
      <div className="mt-4 mb-8 flex shrink-0 flex-col items-center justify-center px-4">
        <a
          href="https://github.com/cxvxcxv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/98476080?v=4"
            alt="Avatar"
            className="border-background max-h-24 w-full max-w-24 rounded-full border"
          />
        </a>
        <p
          className={cn(
            'mt-2 hidden font-bold text-nowrap',
            isOpen && 'lg:block',
          )}
        >
          Alisher Askar
        </p>
      </div>
      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        {NAVIGATION_TABS.map(tab => {
          const isActive = activeSection === tab.sectionId;

          return (
            <a
              key={tab.sectionId}
              href={`#${tab.sectionId}`}
              onClick={e => handleTabClick(e, tab.sectionId)}
              className={cn(
                'flex items-center justify-center gap-5 p-5 whitespace-nowrap transition-colors',
                'text-dimmed hover:text-primary',
                isActive && 'text-primary font-medium',
                isOpen ? 'lg:justify-start' : '',
              )}
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <FontAwesomeIcon icon={tab.icon} />
              </div>

              <span
                className={cn(
                  'hidden transition-all',
                  isOpen
                    ? 'lg:block lg:opacity-100'
                    : 'lg:max-w-0 lg:opacity-0',
                )}
              >
                {tab.name}
              </span>
            </a>
          );
        })}

        <Link
          to="/"
          className="bg-primary mx-auto mt-auto mb-5 flex items-center gap-2 rounded-md p-5 py-3 text-sm whitespace-nowrap lg:bg-transparent"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span
            className={cn(
              'hidden overflow-hidden transition-all',
              isOpen ? 'lg:block lg:opacity-100' : 'lg:max-w-0 lg:opacity-0',
            )}
          >
            Go back
          </span>
        </Link>
      </div>

      <button
        className="bg-foreground text-background absolute top-5 -right-7 flex h-7 w-7 cursor-pointer items-center justify-center rounded-r-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </aside>
  );
};
