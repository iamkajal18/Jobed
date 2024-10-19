import React, { useState, useEffect } from 'react';

const LetterByLetterJobHeading = ({ speed = 100 }) => {
  const fullText = "Find Your Dream Job!!";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((current) => current + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Reset to start over
      setTimeout(() => {
        setText('F');
        setIndex(1);
      }, speed * 2);
    }
  }, [index, speed]);

  return (
    <h1 className="text-2xl font-bold mb-1 sm:text-2xl lg:text-2xl leading-tight">
      {text.split(' ').map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex === 0 || wordIndex === 1 ? (
            <span className="text-[#dc2626]">{word} </span>
          ) : (
            <span>{word} </span>
          )}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default LetterByLetterJobHeading;