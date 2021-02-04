import { EmailIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Heading,
  Icon,
  HStack,
  Text,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ImageGallery from "react-image-gallery";
import FaLocationArrow from "@react-icons/all-files/fa/FaLocationArrow";
import FaFacebook from "@react-icons/all-files/fa/FaFacebook";
import FaInstagram from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdPool } from "@react-icons/all-files/md/MdPool";
import { MdRoomService } from "@react-icons/all-files/md/MdRoomService";
import { FaBed } from "@react-icons/all-files/fa/FaBed";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import { FaParking } from "@react-icons/all-files/fa/FaParking";
import { FaAccessibleIcon } from "@react-icons/all-files/fa/FaAccessibleIcon";
import { MdRestaurantMenu } from "@react-icons/all-files/md/MdRestaurantMenu";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";
import { MdSmokingRooms } from "@react-icons/all-files/md/MdSmokingRooms";
import { MdFreeBreakfast } from "@react-icons/all-files/md/MdFreeBreakfast";
import { MdFitnessCenter } from "@react-icons/all-files/md/MdFitnessCenter";
import { MdLocalBar } from "@react-icons/all-files/md/MdLocalBar";
import { MdSecurity } from "@react-icons/all-files/md/MdSecurity";
import { CgSmartHomeRefrigerator } from "@react-icons/all-files/cg/CgSmartHomeRefrigerator";
import { CgScreen } from "@react-icons/all-files/cg/CgScreen";
import { FaTemperatureLow } from "@react-icons/all-files/fa/FaTemperatureLow";
import { GiBathtub } from "@react-icons/all-files/gi/GiBathtub";
import { GiVacuumCleaner } from "@react-icons/all-files/gi/GiVacuumCleaner";
import CustomSlider from "../../components/CustomSlider";

import fakeCardData from "../../datas/randomCardDatas";
import Review from "../../components/Review";

const Detail = () => {
  const router = useRouter();
  const [fakeData, setFakeData] = useState(fakeCardData);
  const { detailService, categorie } = router.query;

  const nbEtoile = Array.from({ length: Math.floor(Math.random() * 6) });

  useEffect(() => {}, []);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Layout>
      <Box
        className="content detail-service"
        p={{ base: "50px 10px", lg: "50px 50px" }}
      >
        <Box
          textAlign="center"
          w={{ base: "100%", lg: "35%" }}
          bg="#ffffff"
          border="3px solid #333333"
          mb="20px"
          borderRadius=" 2% 6% 5% 4% / 1% 1% 2% 4%"
          p="25px"
          pos="relative"
          _before={{
            content: '""',
            border: "2px solid #353535",
            display: "block",
            borderRadius: " 1% 1% 2% 4% / 2% 6% 5% 4%",
            w: "100%",
            h: "100%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg)",
          }}
          className="detail-service presentation"
        >
          <Heading lineHeight="1.2em" fontSize="2.1em">
            {detailService}
          </Heading>
          <Text m="7px 0px 0px">
            {nbEtoile.map((etoile) => (
              <StarIcon
                key={etoile}
                fontSize={{ base: "14px", md: "16px" }}
                color="#fff000"
              />
            ))}
          </Text>
        </Box>
        <Box
          className="detail-service about"
          bgColor="#ffffff"
          border=".2px solid rgba(0,0,0,.3)"
          borderRadius="25px"
          p="20px 15px"
          mt="100px"
          width={["100%", "100%", "75%", "75%"]}
        >
          <Heading as="h5" mb="25px">
            Informations
          </Heading>
          <Box
            display="flex"
            alignItems={{ base: "flex-start", lg: "center" }}
            flexDir={{ base: "column-reverse", lg: "row" }}
            justifyContent="space-between"
          >
            <Box flexBasis={{ base: "100%", lg: "40%" }}>
              <address>
                <Text mb={4} fontStyle="italic">
                  <Icon
                    fontSize="18px"
                    as={FaLocationArrow.FaLocationArrow}
                    mr={4}
                  />
                  <a
                    className="detail adress-link"
                    href="https://www.google.com/maps/search/?api=1&query=dakar%2CSenegal"
                  >
                    Dakar , Senegal
                  </a>
                </Text>
                <Text mb={4}>
                  <PhoneIcon fontSize="18px" mr={4} />
                  <a className="detail adress-link" href="tel:+15142681318">
                    +1 (514) 268 1318
                  </a>
                </Text>
                <Text mb={4}>
                  <Icon mr={4} fontSize="18px" as={BiLinkExternal} />
                  <a className="detail adress-link" href="www.google.ca">
                    detail.ca
                  </a>
                </Text>
                <Text mb={4}>
                  <EmailIcon fontSize="18px" mr={4} />
                  <a
                    className="detail adress-link"
                    href="mailto:eteka03.akpaki@gmail.com"
                  >
                    eteka03.akpaki@gmail.com
                  </a>
                </Text>
                <Stack
                  flexDir={{ base: "column", lg: "row" }}
                  mt={8}
                  alignItems={{ lg: "center" }}
                  justifyContent="space-between"
                  className="social-media container"
                >
                  <Button
                    mt=".5rem"
                    colorScheme="facebook"
                    leftIcon={<FaFacebook.FaFacebook />}
                  >
                    Facebook
                  </Button>
                  <Button
                    color="#ffffff"
                    _hover={{
                      bgGradient: "linear(to-l, #7928CA, #FF0080)",
                      opacity: 0.9,
                    }}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    leftIcon={<FaInstagram.FaInstagram />}
                  >
                    Instagram
                  </Button>
                  <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                    Twitter
                  </Button>
                </Stack>
              </address>
            </Box>
            <Box
              borderLeft={{ base: "none", lg: ".5px solid #000000" }}
              pl={{ base: "0px", lg: "10px" }}
              mb={{ base: "35px", lg: "0px" }}
              flexBasis={{ base: "100%", lg: "55%" }}
              justifyContent="space-between"
              d="flex"
              flexDir={{ base: "column", lg: "column" }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          mt="70px"
          padding="20px 0px"
          width="100%"
          bgColor="#ffffff"
          border=".2px solid rgba(0,0,0,.3)"
          className="detail-service gallery"
        >
          <Heading padding="0px 15px" className="" mb={3}>
            Gallerie
          </Heading>
          <Box mt="30px" padding={{ base: "10px", lg: "20px" }}>
            <ImageGallery items={images} />
          </Box>
        </Box>

        <Box
          bgColor="#ffffff"
          border=".2px solid rgba(0,0,0,.3)"
          borderRadius="25px"
          p="20px 15px"
          mt="100px"
          width={["100%", "100%", "75%", "75%"]}
          className="detail-service about"
        >
          <Heading lineHeight="1.2em" fontSize="2.1em">
            À propos
          </Heading>
          <Box
            marginTop={4}
            paddingTop="20px"
            borderTop="1px solid rgba(0,0,0,.5)"
          >
            <Stack
              className="proprietes-container"
              mt="20px"
              flexDirection={{ base: "column", lg: "row" }}
              justify="space-between"
              spacing={{ base: 8, lg: 0 }}
            >
              <Box>
                <Text fontWeight="600" fontSize="18px" mb={4}>
                  Hotel{" "}
                </Text>
                <Stack>
                  <Tag colorScheme="none">
                    <TagLeftIcon mr={10} as={MdPool} fontSize="20px" />
                    <TagLabel>Piscine</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon
                      mr={10}
                      as={MdRestaurantMenu}
                      fontSize="20px"
                    />

                    <TagLabel>Restaurant</TagLabel>
                  </Tag>

                  <Tag colorScheme="none">
                    <TagLeftIcon mr={10} as={FaParking} fontSize="20px" />
                    <TagLabel>Parking</TagLabel>
                  </Tag>

                  <Tag colorScheme="none">
                    <TagLeftIcon
                      mr={10}
                      as={FaAccessibleIcon}
                      fontSize="20px"
                    />
                    <TagLabel>Accomodité</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon mr={10} as={FaWifi} mr={10} fontSize="20px" />

                    <TagLabel>Wifi</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon
                      mr={10}
                      as={MdSmokingRooms}
                      mr={10}
                      fontSize="20px"
                    />
                    <TagLabel>Chambre fumeur</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon
                      mr={10}
                      as={MdFreeBreakfast}
                      mr={10}
                      fontSize="20px"
                    />
                    <TagLabel>Petit-déjeuner</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon
                      mr={10}
                      as={MdLocalBar}
                      mr={10}
                      fontSize="20px"
                    />
                    <TagLabel>Bar / lounge</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon mr={10} as={MdFitnessCenter} />
                    <TagLabel>Fitness</TagLabel>
                  </Tag>
                  <Tag colorScheme="none">
                    <TagLeftIcon mr={10} as={MdSecurity} />
                    <TagLabel>Sécurité 24/24</TagLabel>
                  </Tag>
                </Stack>
              </Box>
              <Box>
                <Stack>
                  <Text fontWeight="600" fontSize="18px" mb={4}>
                    Chambre
                  </Text>
                  <Stack>
                    <Tag colorScheme="none">
                      <TagLeftIcon
                        mr={10}
                        fontSize="20px"
                        as={CgSmartHomeRefrigerator}
                      />
                      <TagLabel>Refrigirateur</TagLabel>
                    </Tag>
                    <Tag colorScheme="none">
                      <TagLeftIcon fontSize="20px" mr={10} as={CgScreen} />
                      <TagLabel>Smart TV</TagLabel>
                    </Tag>
                    <Tag colorScheme="none">
                      <TagLeftIcon
                        mr={10}
                        fontSize="20px"
                        as={FaTemperatureLow}
                      />
                      <TagLabel>Climatisation / Chauffage</TagLabel>
                    </Tag>
                    <Tag colorScheme="none">
                      <TagLeftIcon mr={10} fontSize="20px" as={MdRoomService} />
                      <TagLabel>Service de chambre</TagLabel>
                    </Tag>
                    <Tag colorScheme="none">
                      <TagLeftIcon mr={10} fontSize="20px" as={GiBathtub} />
                      <TagLabel>Baignoir</TagLabel>
                    </Tag>

                    <Tag colorScheme="none">
                      <TagLeftIcon
                        mr={10}
                        fontSize="20px"
                        as={GiVacuumCleaner}
                      />
                      <TagLabel>Service de nettoyage</TagLabel>
                    </Tag>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box mt="70px" width="100%" className="same-style-container">
          <Heading padding="0px 15px" className="" mb={3}>
            Vous aimeriez aussi
          </Heading>
          <CustomSlider datas={fakeData[categorie]} />
        </Box>
        <Box mt="50px" bgColor="#ffffff" className="">
          <Review />
        </Box>
      </Box>
    </Layout>
  );
};

export default Detail;
