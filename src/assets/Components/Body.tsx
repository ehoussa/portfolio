import { Box, Center, Text, Image, HStack, Circle, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { IconButton } from '@chakra-ui/react'

const MotionBox = motion(Box);

const Body = () => {


  return (
    <>
        <Center marginTop="200px" marginBottom="40px">
          <Box position="relative" width="200px" height="200px">
            <MotionBox
              width="100%"
              height="100%"
              borderRadius="50%"
              bg="linear-gradient(90deg, #FEDA14 0%, #0B1E33 100%)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <Image
              src="https://via.placeholder.com/80"
              alt="Overlay Image"
              borderRadius="50%"
              boxSize="170px"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Center>
        <TypingAnimation />
        <Center  marginTop="40px" marginBottom="20px">
            <HStack>
                <Circle size='40px' color='#D3D3D3'>
                    <IconButton
                        variant='outline'
                        _hover={{ bg: '#FEDA14', color: '#263571' }}
                        colorScheme='white'
                        aria-label='Linkedin'
                        icon={<FaGithub fontSize="20px"/>}
                    />
                </Circle>
                <Circle size='40px' color='#D3D3D3'>
                    <IconButton
                        variant='outline'
                        _hover={{ bg: '#FEDA14', color: '#263571' }}
                        colorScheme='white'
                        aria-label='Linkedin'
                        icon={<FaLinkedin fontSize="20px"/>}
                    />
                </Circle>
            </HStack>
        </Center>
        <Center>
            <Button leftIcon={<MdOutlineArrowCircleDown fontSize="20px"/>}
                color="#D3D3D3"
                variant="ghost"
                _hover={{ bg: 'rgba(0, 0, 0, 0)', color: '#FEDA14' }}
                transition="background-color 0.3s ease"
             >SCROLL DOWN</Button>
        </Center>
    </>
  )
}

export default Body