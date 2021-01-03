import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const MotionHeading = motion.custom(Heading);

const randomCountryData = [
  { c: "", t: "Bienvenue" },
  { c: "togo", t: "Woeon" },
  { c: "ghana", t: "Akwaba" },
  { t: "Senegal", t: "salam" },
];
export default function Home() {
  const [countries, setCountries] = useState(randomCountryData);
  const [country, setCountry] = useState({ t: "bienvenue" });
  const [randomN, setRandomN] = useState(0);
  const getRandomData = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    if (randomNumber === randomN) {
      getRandomData();
    } else {
      setRandomN(randomNumber);
      setCountry(countries[randomNumber]);
    }
  };
  useEffect(() => {
    const id = setInterval(getRandomData, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <Box
        w="100%"
        h={["500px", "550px", "550px", "600px"]}
        bgImage={[
          `url("/images/banniere-mobile.jpg")`,
          `url("/images/banniere-mobile.jpg")`,
          `url("/images/banniere.jpg")`,
          `url("/images/banniere.jpg")`,
        ]}
        bgColor="yellow"
        bgPosition={["80%", "85%", "center", "center"]}
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
      >
        <MotionHeading>{country.t}</MotionHeading>
        <MotionHeading
          animate={{
            y: 200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            stiffness: 250,
            type: "spring",
          }}
          initial={{ y: 5 }}
          zIndex="2"
          fontSize={["55px", "65px", "75px", "120px"]}
          letterSpacing="10px"
          textTransform="uppercase"
          color="#6f4e37"
          position="absolute"
          fontWeight="900"
          right={["3", "5", "3", "40"]}
          textShadow="1px 1px 1px #6A2B05,
        1px 2px 1px #6A2B05,
        1px 3px 1px  #6A2B05,
        1px 4px 1px #6A2B05,
        1px 5px 1px #6A2B05,
        1px 6px 1px #6A2B05,
        1px 7px 1px #6A2B05,
        1px 8px 1px#6A2B05,
        1px 9px 1px #6A2B05,
        1px 10px 1px #6A2B05,
    10px 18px 6px rgba(16,16,16,0.25),
    5px 22px 10px rgba(16,16,16,0.15),
    5px 25px 35px rgba(16,16,16,0.15),
    5px 30px 60px rgba(16,16,16,0.25)"
          transform="rotateX(50deg)   skew(10deg) "
        >
          Africa
        </MotionHeading>

        <CustomButton
          animate={{ y: -50, opacity: 1 }}
          initial={{ opacity: 0 }}
          position="absolute"
          bottom="20%"
          right={["100", "100", "100", "250"]}
          size="lg"
          height="48px"
          width={{ base: "150px", md: "200px", lg: "250px" }}
          forme="rounded"
          bg="#d83c23"
          border="2px"
          borderColor="red.500"
          fontSize={["18px", "20px", "22px", "24px"]}
          fontWeight="500"
          fontStyle="italic"
        >
          Découvrir
        </CustomButton>
      </Box>
    </Layout>
  );
}
