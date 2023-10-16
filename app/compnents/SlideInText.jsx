// components/SlideInText.js

import { useState, useEffect } from 'react';

const SlideInText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 400); // Delay the animation for 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <p
      className={`transition-transform transform delay-200 duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {text}
    </p>
  );
};

export default SlideInText;
