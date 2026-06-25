import { NAVIGATION_TABS } from '@/constants/navigation.constants';
import { cn } from '@/utils/cn';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [activeSection, setActiveSection] = useState('');

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
        'bg-foreground text-background sticky top-0 left-0 h-screen transition-all',
        isOpen ? 'w-20 translate-x-0 lg:w-64' : 'w-0 -translate-x-full lg:w-20',
        'lg:translate-x-0',
      )}
    >
      <div className="flex h-full flex-col overflow-hidden">
        {NAVIGATION_TABS.map(tab => {
          const isActive = activeSection === tab.sectionId;

          return (
            <a
              key={tab.sectionId}
              href={`#${tab.sectionId}`}
              onClick={() => setActiveSection(tab.sectionId)}
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
          className="bg-primary mx-auto mt-auto mb-5 flex items-center rounded-md p-5 py-3 text-sm whitespace-nowrap lg:bg-transparent"
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
        className="bg-foreground text-background absolute top-5 -right-7 flex h-7 w-7 items-center justify-center rounded-r-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </aside>
  );
};
