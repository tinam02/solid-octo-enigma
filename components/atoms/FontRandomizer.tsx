import { useStyle } from '@/hooks/StyleProvider';
import { useEffect, useMemo, useState } from 'react';

export function RandomizeFont({
  text,
  fonts = [],
  loop = false,
}: {
  text: string;
  fonts?: string[];
  loop?: boolean;
}): JSX.Element {
  const { fonts: ctxFonts } = useStyle();
  const defaultRand = {
    lynojean: ctxFonts.lynojean,
    lynostan: ctxFonts.lynostan,
    lynowalt: ctxFonts.lynowalt,
    lynoulys: ctxFonts.lynoulys,
  };

  if (!fonts || fonts.length === 0) fonts = Object.values(defaultRand);

  const [seed, setSeed] = useState(0);

  useEffect(() => {
    if (loop) {
      const interval = setInterval(() => {
        setSeed(prev => prev + 1); // trigger re-render
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [loop]);

  const randomizedText = useMemo(() => {
    return text.split('').map((char, i) => (
      <span key={i} className={fonts[Math.floor(Math.random() * fonts.length)]}>
        {char}
      </span>
    ));
  }, [seed]); // recompute onseed change

  return <>{randomizedText}</>;
}

//reg
// export function RandomizeFont({
//   text,
//   fonts = [],
// }: {
//   text: string;
//   fonts?: string[];
// }): JSX.Element {
//   const { fonts: ctxFonts } = useStyle();
//   const defaultRand = {
//     lynojean: ctxFonts.lynojean,
//     lynostan: ctxFonts.lynostan,
//     lynowalt: ctxFonts.lynowalt,
//     lynoulys: ctxFonts.lynoulys,
//   };
//   if (!fonts || fonts.length === 0) fonts = Object.values(defaultRand);

//   const randomizedText = useMemo(() => {
//     return text.split('').map((char, i) => (
//       <span key={i} className={fonts[Math.floor(Math.random() * fonts.length)]}>
//         {char}
//       </span>
//     ));
//   }, []);

//   return <>{randomizedText}</>;
// }
