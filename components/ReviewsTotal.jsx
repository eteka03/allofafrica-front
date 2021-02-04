import { Box, Divider, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const ReviewsTotal = () => {
  return (
    <Box>
      <Heading as="h3" fontSize="1.5em">
        Note générale
      </Heading>

      <Divider />
      <VStack w="70%" margin="20px auto">
        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">5 étoiles</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="70%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            150
          </Box>
        </HStack>
        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">4 étoiles</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="30%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            150
          </Box>
        </HStack>

        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">3 étoiles</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="0%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            600
          </Box>
        </HStack>

        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">2 étoiles</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="45%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            98
          </Box>
        </HStack>

        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">1 étoiles</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="20%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            43
          </Box>
        </HStack>

        <HStack display="flex" justifyContent="space-between" w="100%">
          <Box w="15%">0 étoile</Box>
          <Box w="70%" h="20px" bgColor="rgba(0,0,0,.15)" flexGrow="2">
            <Box w="10%" h="100%" bgColor="#fff000"></Box>
          </Box>
          <Box w="15%" textAlign="right">
            39
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ReviewsTotal;
