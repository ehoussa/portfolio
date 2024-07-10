import { Box, Center, HStack, Text } from "@chakra-ui/react"

const MdNavBar = () => {

  return (
    <>
        <Box bg='tomato' w='100%' p={4} color='white'>
        <Center>
          <HStack spacing='24px'>
            <Text>HOME</Text>
            <Text>HOME2</Text>
            <Text>HOME3</Text>
          </HStack>
        </Center>
    </Box>
    </>
  )
}

export default MdNavBar