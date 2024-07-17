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
        <Center marginTop="70px" marginBottom="40px">
          <Box position="relative" width="200px" height="200px">
            <MotionBox
              width="100%"
              height="100%"
              borderRadius="50%"
              bg="linear-gradient(90deg, #00A86B 0%, #0B1E33 100%)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <Image
              src="https://cdn.intra.42.fr/users/030ff0887fa9da4a18460f7014d15f86/ebakchic.jpg"
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
                        _hover={{ bg: '#00A86B', color: '#ffffff' }}
                        colorScheme='white'
                        aria-label='Linkedin'
                        icon={<FaGithub fontSize="20px"/>}
                    />
                </Circle>
                <Circle size='40px' color='#D3D3D3'>
                    <IconButton
                        variant='outline'
                        _hover={{ bg: '#00A86B', color: '#ffffff' }}
                        colorScheme='white'
                        aria-label='Linkedin'
                        icon={<FaLinkedin fontSize="20px"/>}
                    />
                </Circle>
            </HStack>
        </Center>
        <Center>
            <Button leftIcon={<MdOutlineArrowCircleDown fontSize="20px"/>}
                position="absolute"
                bottom="4"
                left="50%"
                transform="translateX(-50%)"
                color="#D3D3D3"
                variant="link"
                _hover={{ color: '#00A86B' }}
                transition="background-color 0.3s ease"
             >SCROLL DOWN</Button>
        </Center>
    </>
  )
}

export default Body