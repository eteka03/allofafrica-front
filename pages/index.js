import React, { useState, useEffect, useReducer, useRef } from "react";
import { Box, Flex, Grid, Heading, Image, Img, Text } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Layout from "../components/Layout";
import TransportSvg from "../components/Transport.svg.jsx";
import RestoSvg from "../components/RestoSvg";
import Link from "next/link";
import HotelSvg from "../components/HotelSvg";

const MotionHeading = motion.custom(Heading);

export default function Home() {
  return (
    <Layout>
      <Box className="content home">
        <Box
          className="presentation"
          padding={["0px 5px", "0 10px", "0px 50px", "0 80px"]}
        >
          <Box className="texte-box">
            <Heading className="texte-titre">
              Bienvenue sur le continent mère <br />{" "}
              <span className="texte-big">Africa</span>
            </Heading>
            <Text className="texte-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <a href="" className="button decouvrir">
              Découvrir plus
            </a>
          </Box>

          <Box className="image-box">
            <TransportSvg />
          </Box>
        </Box>

        <Box
          className="services cuisine-container "
          padding={["0px 5px 50px", "0 10px 50px", "0px 50px 50px", "0 80px"]}
        >
          <Box className="image-box">
            <RestoSvg />
          </Box>

          <Box
            className="text-box"
            padding={["50px 0px 0px", "50px 0px 0px", "50px 0px", "10px 50px"]}
          >
            <Heading
              className="section-entete"
              fontWeight="500"
              lineHeight="2.2"
            >
              Dégustez nos meilleurs plats
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <Link href="/">
                <a className="button page-link">Voir plus</a>
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
          className="services hotelerie-container"
          padding={["0px 5px", "0 10px", "0px 50px", "0 80px"]}
        >
          <Box className="text-box" width={["100%", "100%", "100%", "50%"]}>
            <Heading
              className="section-entete"
              fontWeight="500"
              lineHeight="2.2"
            >
              Découvez nos hotels
            </Heading>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <Link href="/">
                <a className="button page-link">Voir plus</a>
              </Link>
            </Text>
          </Box>
          <Box className="image-box">
            <Image
              src="/images/hotelerie.png"
              alt="hotelerie"
              title="hotelerie"
            />
          </Box>
        </Box>
        <Box
          padding={["40px 5px", "40px 10px", "40px 50px", "50px 80px"]}
          bgColor="#ffff"
          textAlign="center"
          className=" culture-container"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            textAlign="center"
            letterSpacing=".1em"
            fontSize="2.5em"
            fontStyle="italic"
            _after={{
              content: `""`,
              display: "block",
              borderBottom: "1px solid #000",
              width: "50px",
              margin: "0 auto",
            }}
            marginBottom="35px"
          >
            Culture
          </Heading>

          <Grid
            width={["60%", "60%", "65%", "85%"]}
            gap="8rem"
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
          >
            <Box position="relative" w="100%" h="320px">
              <Img
                width="100%"
                height="100%"
                src="/images/masques.jpg"
                objectFit="cover"
                alt="masque"
                title="masque"
              />

              <Box
                position="absolute"
                zIndex="5"
                height="25%"
                width="100%"
                bgColor="rgba(0,0,0,.75)"
                bottom="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderTopLeftRadius="50px"
                borderTopRightRadius="50px"
                color="#ffffff"
              >
                <Link href="/">
                  <a className="lien-culture">Voir</a>
                </Link>
              </Box>
            </Box>
            <Box position="relative" w="100%" h="320px" bgColor="#000000">
              <Img
                height="100%"
                width="100%"
                src="/images/girafe.jpg"
                objectFit="cover"
                alt="girafe"
                title="girafe"
              />
              <Box
                position="absolute"
                zIndex="5"
                height="25%"
                width="100%"
                bgColor="rgba(0,0,0,.75)"
                bottom="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderTopLeftRadius="50px"
                borderTopRightRadius="50px"
                color="#ffffff"
              >
                <Link href="/">
                  <a className="lien-culture">Voir</a>
                </Link>
              </Box>
            </Box>
            <Box position="relative" w="100%" h="320px" bgColor="#000000">
              <Img
                height="100%"
                width="100%"
                src="/images/plage.jpg"
                objectFit="cover"
                alt="plage"
                title="plage"
              />
              <Box
                position="absolute"
                zIndex="5"
                height="25%"
                width="100%"
                bgColor="rgba(0,0,0,.75)"
                bottom="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderTopLeftRadius="50px"
                borderTopRightRadius="50px"
                color="#ffffff"
              >
                <Link href="/">
                  <a className="lien-culture">Voir</a>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
