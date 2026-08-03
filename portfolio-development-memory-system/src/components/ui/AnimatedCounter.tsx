import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\d\s,]+)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const numStr = match[1].replace(/[\s,]/g, '');
    const suffix = match[2] || '';
    const num = parseFloat(numStr);

    if (isNaN(num)) {
      setDisplayed(value);
      return;
    }

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const current = Math.floor(eased * num);
      setDisplayed(current.toLocaleString('ru-RU') + suffix);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayed(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayed}</span>;
}
