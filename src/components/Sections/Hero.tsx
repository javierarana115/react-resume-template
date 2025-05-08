import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import GridBackground from '../../components/GridBackground';
import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <GridBackground />
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Content Container */}
        <div className="z-10 max-w-screen-lg px-4 lg:px-0 w-full">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm mx-4">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              {name}
            </h1>
            <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              {description}
            </div>
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base transition-colors',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <a
            aria-label="Scroll down"
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 animate-bounce"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;