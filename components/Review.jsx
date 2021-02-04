import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewsAll from "./ReviewsAll";

const Review = () => {
  return (
    <Tabs
      borderTopRadius=".375rem"
      border="1px solid rgba(0,0,0,.5)"
      defaultIndex={1}
      isFitted
      variant="enclosed"
      colorScheme="black.500"
    >
      <TabList bgColor="rgba(0,0,0,.1)" mb="1em" borderColor="#000000">
        <Tab
          fontWeight="700"
          _focus={{ boxShadow: "none" }}
          _selected={{
            bgColor: "#ffffff",
            border: "1px solid",
            borderBottom: "none",
          }}
          fontSize="20px"
        >
          Reviews
        </Tab>
        <Tab
          fontWeight="700"
          _focus={{ boxShadow: "none" }}
          _selected={{
            bgColor: "#ffffff",
            border: "1px solid",
            borderBottom: "none",
          }}
          fontSize="20px"
        >
          Écrire une review
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ReviewsAll />
        </TabPanel>
        <TabPanel>
          <ReviewForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Review;
