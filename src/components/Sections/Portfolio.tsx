import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {dataAnalysisItems, portfolioItems, SectionId} from '../../data/data';
import {DataAnalysisItem,PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8 items-center">
        {/* Data Analysis Projects Section */}
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Data Analysis Projects</h2>
          <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {dataAnalysisItems.map((item, index) => (
              <DataAnalysisCard item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </div>

        {/* Other Portfolio Items */}
        <h2 className="text-center text-xl font-bold text-white">Check out some of my other work</h2>
        <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

const DataAnalysisCard: FC<{item: DataAnalysisItem}> = memo(({item}) => {
  const {title, description, image, url} = item;

  const CardContent = () => (
    <>
      <div className="relative aspect-[4/3]">
        <Image
          alt={title}
          className="h-full w-full object-cover"
          fill
          placeholder="blur"
          src={image}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">
            {description}
          </p>
        </div>
        {url && (
          <ArrowTopRightOnSquareIcon className="absolute top-4 right-4 h-5 w-5 text-neutral-300 group-hover:text-white transition-colors duration-200" />
        )}
      </div>
    </>
  );

  return (
    <div className="pb-6">
      {url ? (
        <Link 
          className="group relative block h-full rounded-xl border border-neutral-500 bg-neutral-700 overflow-hidden transition-shadow hover:shadow-lg hover:shadow-neutral-500/20"
          href={url}
          passHref
        >
          <CardContent />
        </Link>
      ) : (
        <div className="group relative h-full rounded-xl border border-neutral-500 bg-neutral-700 overflow-hidden">
          <CardContent />
        </div>
      )}
    </div>
  );
});

const PortfolioCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div className="pb-6">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
        <div className="relative aspect-[4/3]">
          <Image 
            alt={item.title} 
            className="h-full w-full object-cover"
            fill
            placeholder="blur" 
            src={item.image}
          />
        </div>
        <a
          className={classNames(
            'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
            {'opacity-0 hover:opacity-80': !mobile},
            showOverlay ? 'opacity-80' : 'opacity-0',
          )}
          href={item.url}
          onClick={handleItemClick}
          ref={linkRef}
          rel="noopener noreferrer"
          target="_blank">
          <div className="relative h-full w-full p-4">
            <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
              <h2 className="text-center font-bold text-white opacity-100">{item.title}</h2>
              <p className="text-xs text-white opacity-100 sm:text-sm">{item.description}</p>
            </div>
            <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
          </div>
        </a>
      </div>
    </div>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;