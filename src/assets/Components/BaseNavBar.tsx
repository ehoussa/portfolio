import { Box, Center, VStack, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const BaseNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <Box w='100%' p={4} color='white'>
    <Button variant="link" onClick={toggleMenu}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MotionBox
                bg="white"
                m={0.5}
                w="24px"
                h="2px"
                animate={{ rotate: isMenuOpen ? 40 : 0, y: isMenuOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <MotionBox
                bg="white"
                m={0.5}
                w="24px"
                h="2px"
                opacity={isMenuOpen ? 0 : 1}
                transition={{ duration: 0.3 }}
              />
              <MotionBox
                bg="white"
                m={0.5}
                w="24px"
                h="2px"
                animate={{ rotate: isMenuOpen ? -40 : 0, y: isMenuOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Box>
          </Button>
    </Box>
    <AnimatePresence>
    {isMenuOpen && (<MotionBox
          // bg='tomato'
          w='100%'
          h='100vh'
          p={4}
          color='white'
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100vw' }}
          transition={{ duration: 0.4 }}
        >
      <Center>
        <VStack spacing='24px'>
          <MotionText
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Text color="#00A86B">HOME</Text>
          </MotionText>
          <MotionText
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text color="#00A86B">HOME2</Text>
          </MotionText>
          <MotionText
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Text color="#00A86B">HOME3</Text>
          </MotionText>
        </VStack>
      </Center>
</MotionBox>)}
</AnimatePresence>
</>
  )
}

export default BaseNavBar