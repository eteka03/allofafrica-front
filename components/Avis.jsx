import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import StarRatings from "react-star-ratings";

const Avis = ({ nom, commentaire, nbEtoile, date }) => {
  return (
    <HStack
      p="25px"
      boxShadow="1px 5px 10px rgba(0,0,0,.3)"
      w="100%"
      maxW="900px"
      h="auto"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar src="https://bit.ly/broken-link" />
        <Text mt={3}>Claver Akpaki</Text>
      </Box>
      <Box w="80%">
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          pointerEvents="none"
        >
          <StarRatings
            name="user-rating"
            rating={3}
            starRatedColor="#fff000"
            numberOfStars={5}
            starDimension="26px"
          />
          <Text>{new Date().toDateString()}</Text>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </HStack>
  );
};

export default Avis;
