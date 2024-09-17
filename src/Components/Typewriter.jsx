import React, { useState, useEffect } from "react";

function TypingAnimation() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Shubham Kumar Jha", "A Fullstack Developer"];
  const typingSpeed = 150; // Typing speed in milliseconds
  const delayBetweenPhrases = 1000; // Delay between phrases

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;

    const typePhrase = () => {
      const fullText = phrases[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // Remove last character when deleting
      } else {
        setText((prev) => prev + fullText[currentIndex]); // Add next character when typing
      }

      if (!isDeleting && currentIndex < fullText.length) {
        currentIndex++;
      } else if (isDeleting && currentIndex === 0) {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Switch between phrases
        isDeleting = false;
      } else if (currentIndex === fullText.length) {
        isDeleting = true; // Start deleting after completing the phrase
        setTimeout(typePhrase, delayBetweenPhrases); // Delay before deleting
        return;
      }

      setTimeout(typePhrase, isDeleting ? typingSpeed / 2 : typingSpeed);
    };

    const typingTimeout = setTimeout(typePhrase, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [index]);

  return (
    <div className="text-96 font-extrabold text-white mb-10 text-center">
      <span className="text-white">{text}</span>
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </div>
  );
}

export default TypingAnimation;
