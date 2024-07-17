import { Box, Center, HStack, Text } from "@chakra-ui/react"

const MdNavBar = () => {

  return (
    <>
        <Box w='100%' p={4} color='white'>
        <Center>
          <HStack spacing='24px'>
            <Text color="#00A86B">HOME</Text>
            <Text color="#00A86B">HOME2</Text>
            <Text color="#00A86B">HOME3</Text>
          </HStack>
        </Center>
    </Box>
    </>
  )
}

export default MdNavBar