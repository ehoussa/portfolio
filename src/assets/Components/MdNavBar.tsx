import { Box, Center, HStack, Text } from "@chakra-ui/react"

const MdNavBar = () => {

  return (
    <>
        <Box w='100%' p={4} color='white'>
        <Center>
          <HStack spacing='24px'>
            <Text color="#FEDA14">HOME</Text>
            <Text color="#FEDA14">HOME2</Text>
            <Text color="#FEDA14">HOME3</Text>
          </HStack>
        </Center>
    </Box>
    </>
  )
}

export default MdNavBar