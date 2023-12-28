import { Avatar, Box, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  return <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
        <Avatar name='Kohli' size={"lg"} src='/kohli.jpeg' />
        <Text fontSize={12} fontWeight={"bold"}>
            Kohli
        </Text>
    </Flex>
    <Link

    as={RouterLink}
    to={'/auth'}
    fontSize={14}
    fontWeight={"medium"}
    color={"blue.400"}
    cursor={"pointer"}
    
    
    >Log out
    
    </Link>
  </Flex>
}

export default SuggestedHeader