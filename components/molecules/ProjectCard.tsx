import { IProject } from '@/utils/types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import MD from '../atoms/Markdown';

export const ProjectCard: React.FC<IProject> = ({
  title,
  description,
  images,
  link,
  tags,
  year,
  note,
  className,
}) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // calculate the height of the content
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description, expanded]);

  return (
    <article className={classNames('project w-full', className)}>
      <header
        className={classNames(
          'cursor-pointer flex items-center content-center justify-center py-2 w-full relative  '
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <p>{title}</p>
        <div className='absolute right-8 flex h-full items-center'>
          <div className='divider-line mx-8 py-0 my-0 dividerx' />
          <ChevronDownIcon
            className={classNames(
              'w-5 h-5 transition-transform duration-300 ',
              expanded ? 'transform rotate-180' : ''
            )}
          />
        </div>
      </header>

      <AnimatePresence mode='wait'>
        {expanded && (
          <motion.div
            className={classNames('w-[100%]')}
            key='answer'
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: 1,
              maxHeight: contentHeight,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0, maxHeight: 0 }}
            ref={contentRef}
          >
            <MD text={description} />
            <div className='flex items-center'>
              <span className='text-xs'>Year: </span>
              <span className='text-xs'>{year}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
        autoHeight
      >
        {images?.map((img, i) => {
          if (img.hide) return;
          return (
            <SwiperSlide key={img.src} style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'block',
                  height: 'max-content',
                }}
              >
                {img.caption && (
                  <figcaption className='w-full absolute bottom-0 left-0 p-2 text-xs'>
                    {img.caption}
                  </figcaption>
                )}
                <Image
                  quality={100}
                  priority={i === 0}
                  src={img.src}
                  alt={img.caption || title}
                  width='0'
                  height='0'
                  sizes='95vw'
                  loader={({ src, width, quality }) => {
                    return `${src}?w=${width}&q=${quality || 75}`;
                  }}
                  style={{ minWidth: '100%', minHeight: '100%' }}
                  className='w-full h-full'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};
