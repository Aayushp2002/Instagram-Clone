import React from 'react';
import { Flex, Box, Text, InputGroup, InputRightElement, Button, Input } from '@chakra-ui/react';
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constants';

const PostFooter = () => {
    const [liked, setLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(1000);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <Box my={4}>
            <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>

                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>

            <Text fontSize={"sm"} fontWeight={700}>
                Kohli{" "}
                <Text as='span' fontWeight={400}>
                    Feeling Happy
                </Text>
            </Text>

            <Text fontSize='sm' color={"gray"}>
                View all 1,000 comments
            </Text>

            <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
                <InputGroup>
                    <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14}/>
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={"blue.500"}
                            fontWeight={600}
                            cursor={"pointer"}
                            _hover={{ color: "white" }}
                            bg={"transparent"}
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    );
};

//1:29:14

export default PostFooter;
