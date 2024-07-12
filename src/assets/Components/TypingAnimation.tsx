import { useState, useEffect } from 'react';
import { Box, Center, Text, Flex } from '@chakra-ui/react';

const TypingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const text1 = "I'm EL houssaine Bakchich";
  const text2 = "A Full Stack Developer";
  const texts = [text1, text2];

  const [genText, setGenText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = 50; // Typing speed
    const deletingSpeed = 10; // Deleting speed
    const intervalSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const interval = setInterval(() => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing mode
        if (currentCharIndex < currentText.length) {
          setGenText((prev) => prev + currentText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          // Start deleting after a pause
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000); // Pause before starting to delete
        }
      } else {
        // Deleting mode
        if (currentCharIndex > 0) {
          setGenText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          // Switch to the next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, intervalSpeed); // Adjust the speed based on typing or deleting

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, isPaused, isDeleting, texts]);

  

  return (
    <>
        <Center display="flex" justifyContent="center" alignItems="center">
        <Text fontFamily="Roboto" fontSize='4xl'>Hi</Text>

        </Center>
        <Center display="flex" justifyContent="center" alignItems="center">
            <Box
              m={0.5}
              h="50px"
            >
                <Text fontFamily="Roboto" fontSize='4xl'>{genText}</Text>
            </Box>
            <Box
              w="5px"
            >
                {isVisible && (<Box
                  bg="red"
                  m={0.5}
                  w="5px"
                  h="50px"
                />)}
            </Box>
        </Center>
    </>
  );
};

export default TypingAnimation;
