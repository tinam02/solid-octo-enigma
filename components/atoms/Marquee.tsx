import { motion } from 'framer-motion';

export const Marquee = ({ text='Info', speed = 30, reverse = false }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {Array(20).fill(text).map((text, i) => (
          <span key={i} className="marquee-text">{text}</span>
        ))}
      </div>
      <div className="marquee">
        {Array(20).fill("ARCHIVE").map((text, i) => (
          <span key={i} className="marquee-text">{text}</span>
        ))}
      </div>
    </div>
  );
};

 