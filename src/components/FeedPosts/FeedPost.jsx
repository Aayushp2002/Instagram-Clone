import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'


const FeedPost = ({ image, username, avatar }) => {
  // console.log("Image URL:", image); // Debugging line
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image src={image} alt={username} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};


export default FeedPost