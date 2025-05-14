import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    
    // Filter out the DataProjects and MachineLearning from regular nav items
    const mainNavSections = navSections.filter(section => 
      section !== SectionId.DataProjects && section !== SectionId.MachineLearning
    );

    return (
      <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block" id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {mainNavSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
          <DropdownNavItem 
            activeClass={activeClass}
            currentSection={currentSection}
            inactiveClass={inactiveClass}
          />
        </nav>
      </header>
    );
  },
);

const DropdownNavItem: FC<{
  currentSection: SectionId | null;
  activeClass: string;
  inactiveClass: string;
}> = memo(({currentSection, activeClass, inactiveClass}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className={classNames(
          currentSection === SectionId.DataProjects || currentSection === SectionId.MachineLearning 
            ? activeClass 
            : inactiveClass,
          'flex items-center'
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Data Projects
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      </button>
      <div
        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
          isOpen ? 'block' : 'hidden'
        } group-hover:block`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          className={`block px-4 py-2 text-sm rounded-md ${
            currentSection === SectionId.MachineLearning
              ? 'bg-orange-500 text-white'
              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          href={`/${SectionId.MachineLearning}`}
        >
          Student Performance
        </Link>
      </div>
    </div>
  );
});

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    
    // Filter out the DataProjects and MachineLearning from regular nav items
    const mainNavSections = navSections.filter(section => 
      section !== SectionId.DataProjects && section !== SectionId.MachineLearning
    );

    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {mainNavSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                  <button
                    className={classNames(
                      dropdownOpen || currentSection === SectionId.MachineLearning 
                        ? activeClass 
                        : inactiveClass,
                      'flex justify-between items-center'
                    )}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Data Projects
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="ml-4 space-y-1">
                      <Link
                        className={`block px-4 py-2 text-sm rounded-md ${
                          currentSection === SectionId.MachineLearning
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-200 hover:bg-neutral-700'
                        }`}
                        href={`/${SectionId.MachineLearning}`}
                        onClick={toggleOpen}
                      >
                        Student Performance
                      </Link>
                    </div>
                  )}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
