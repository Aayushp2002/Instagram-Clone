import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap='2'>
              <SkeletonCircle size='10' />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height='10px' w={"200px"} />
                <Skeleton height='10px' w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      } 
      {!isLoading && (
        <>
          <FeedPost image='/img1.png' username='Kohli' avatar='/img1.png'/>
          <FeedPost image='/img2.png' username='Aayush' avatar='/img2.png'/>
          <FeedPost image='/img3.png' username='Nish' avatar='/img3.png'/>
          <FeedPost image='/img4.png' username='Khushi' avatar='/img4.png'/>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
