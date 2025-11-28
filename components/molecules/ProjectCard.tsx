import { ProjSummary } from '@/styles/theme';
import { IProject } from '@/utils/types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MD from '../atoms/Markdown';

const SMALL_TXT_CLS = 'text-s';
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
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    updateHeight(); // Initial height calculation

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [description, expanded]);

  return (
    <article
      className={classNames(
        'project border-t borderColor w-full mb-10 ',
        className
      )}
    >
      <header
        className={classNames(
          'cursor-pointer flex items-center content-center justify-center py-3 w-full relative  '
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <p className='text-4xl project-title'>{title}</p>
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
            className={classNames('w-[85%] mx-auto')}
            key='answer'
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: 1,
              maxHeight: contentHeight,
              transition: { duration: 0.2, ease: 'easeInOut' },
              overflow: 'hidden',
            }}
            exit={{ opacity: 0, maxHeight: 0 }}
            ref={contentRef}
          >
            <MD
              text={description}
              className='text-4xl py-3 whitespace-pre-wrap'
            />
            <ProjSummary>
              <span className={SMALL_TXT_CLS}>Year</span>
              <span className={SMALL_TXT_CLS}>{year}</span>
              {link && (
                <>
                  <span className={SMALL_TXT_CLS}>Link</span>
                  <a
                    className={`${SMALL_TXT_CLS} w-max`}
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {link}
                  </a>
                </>
              )}
              <span className={SMALL_TXT_CLS}>Stack</span>
              <div className={SMALL_TXT_CLS}>
                {tags?.map((tag, i) => (
                  <span key={i} className='text-s lowercase'>
                    {tag}
                    {i !== tags.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </ProjSummary>
          </motion.div>
        )}
      </AnimatePresence>

      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        className='mySwiper mt-5'
        autoHeight
        effect='fade'
        fadeEffect={{ crossFade: true }}
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
                  <figcaption
                    className='w-full absolute bottom-0 left-0 p-2 text-xs'
                    dangerouslySetInnerHTML={{ __html: img.caption }}
                  />
                )}
                {img.video ? (
                  <div className='w-full h-full '>
                    <video
                      src={img.src}
                      autoPlay
                      muted
                      loop
                      style={{ maxHeight: '80vh', pointerEvents: 'none' }}
                    />
                  </div>
                ) : (
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
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};
