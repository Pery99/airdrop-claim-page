import { useEffect, useState } from 'react';

const Counter = ({ from = 0, to, duration = 2, className }) => {
  const [count, setCount] = useState(from);
  const fps = 60;
  const frameDuration = 1000 / fps;
  const frames = duration * fps;
  const increment = (to - from) / frames;

  useEffect(() => {
    let currentCount = from;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      currentCount += increment;
      setCount(currentCount);

      if (frame >= frames) {
        clearInterval(counter);
        setCount(to);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [from, to, duration, increment, frames, frameDuration]);

  return (
    <span className={className}>
      {Intl.NumberFormat('en-US').format(Math.round(count))}
    </span>
  );
};

export default Counter;
