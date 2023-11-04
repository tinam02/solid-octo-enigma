import { useStyle } from '@/hooks/StyleProvider';
import { useMemo } from 'react';

export function RandomizeFont({
  text,
  fonts = [],
}: {
  text: string;
  fonts?: string[];
}): JSX.Element {
  const { fonts: ctxFonts } = useStyle();
  const defaultRand = {
    lynojean: ctxFonts.lynojean,
    lynostan: ctxFonts.lynostan,
    lynowalt: ctxFonts.lynowalt,
    lynoulys: ctxFonts.lynoulys,
  };
  if (!fonts || fonts.length === 0) fonts = Object.values(defaultRand);

  const randomizedText = useMemo(() => {
    return text.split('').map((char, i) => (
      <span key={i} className={fonts[Math.floor(Math.random() * fonts.length)]}>
        {char}
      </span>
    ));
  }, []);

  return <>{randomizedText}</>;
}
