import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Avis from "./Avis";

const ReviewsPeople = () => {
  return (
    <VStack mt={8} w="100%">
      <Box w="100%" mb={4} textAlign="left">
        <Heading as="h3" fontSize="1.6em">
          Avis
        </Heading>
        <Divider />
      </Box>
      <VStack justifyContent="center" alignItems="center" spacing={8} w="100%">
        {Array.from({ length: 10 }).map((data) => (
          <Avis />
        ))}
      </VStack>
    </VStack>
  );
};

export default ReviewsPeople;
