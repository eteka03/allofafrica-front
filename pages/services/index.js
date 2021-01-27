import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import { MdPool } from "@react-icons/all-files/md/MdPool";
import { MdRoomService } from "@react-icons/all-files/md/MdRoomService";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Img,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useBreakpoint,
  useBreakpointValue,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import CustomTag from "../../components/CustomTag";
import {
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@chakra-ui/icons";
import SwiperCore, { Virtual, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const countries_data = ["Burkina Faso", "Senegal"];
const categories_data = ["restaurants", "hotels", "culture"];
SwiperCore.use([Virtual, Navigation]);

const fakeData = Array.from({ length: 40 })
  .map((data, i) => {
    let random = Math.random() * 10;
    let dataToreturn;
    random > 5
      ? (dataToreturn = { cat: "restaurant", nom: `restau - ${i}` })
      : (dataToreturn = { cat: "hotels", nom: `hotel - ${i}` });

    return dataToreturn;
  })
  .reduce((tabByCat, obj) => {
    const { nom } = obj;

    tabByCat[obj.cat] = [...(tabByCat[obj.cat] || []), { nom }];

    return tabByCat;
  }, {});

const index = () => {
  const router = useRouter();
  const breakPoint = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 4,
  });
  const [selectedFilters, SetselectedFilters] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { name } = router.query;
  const [fake, setFake] = useState(fakeData);

  const handleTag = (name) => {
    selectedFilters.includes(name)
      ? SetselectedFilters(selectedFilters.filter((f) => f !== name))
      : SetselectedFilters([...selectedFilters, name]);

    console.log(selectedFilters);
  };

  return (
    <Layout>
      <Box className="content services">
        <Box
          width="100%"
          marginTop="50px"
          className=""
          display="flex"
          flexDirection={{ base: "column" }}
          justifyContent="space-between"
        >
          <Button
            ml={{ base: "0px", lg: "50px" }}
            width={{ base: "100%", lg: "15%" }}
            maxWidth={{ lg: "220px" }}
            outline="auto"
            rightIcon={"+"}
            onClick={onOpen}
          >
            Ajouter Filtres
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent pl={4}>
                <DrawerHeader borderBottomWidth="1px">Filtres</DrawerHeader>
                <DrawerBody>
                  <Text fontWeight="550" mb={4}>
                    Pays
                  </Text>
                  <Wrap mb={8} spacing={4}>
                    {countries_data.map((c) => (
                      <WrapItem key={c} _hover={{ cursor: "pointer" }}>
                        <CustomTag
                          name={c}
                          handleTag={(name) => handleTag(name)}
                          isSelected={
                            selectedFilters.includes(c) ? true : false
                          }
                        />
                      </WrapItem>
                    ))}
                  </Wrap>
                  <Text fontWeight="550" mb={4}>
                    Catégorie
                  </Text>
                  <Wrap mb={8} spacing="15px">
                    {categories_data.map((c) => (
                      <WrapItem key={c} _hover={{ cursor: "pointer" }}>
                        <CustomTag
                          name={c}
                          handleTag={(name) => handleTag(name)}
                          isSelected={
                            selectedFilters.includes(c) ? true : false
                          }
                        />
                      </WrapItem>
                    ))}
                  </Wrap>
                </DrawerBody>
                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Fermer
                  </Button>
                  <Button colorScheme="yellow">Sauvegarder</Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
          <Box
            position="relative"
            className="filter-datas-container"
            padding={["0px 5px", "0 10px", "0px 20px", "0 80px"]}
            marginTop={{ base: "30px", lg: "40px" }}
          >
            {Object.keys(fake).map((key, i) => (
              <Box textAlign="left" marginBottom="20px">
                <Heading
                  marginBottom="10px"
                  as="h5"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Sélection {key}
                </Heading>
                <Swiper
                  slideClass="teston"
                  style={{ padding: "25px 0px" }}
                  slide="true"
                  slidesPerView={breakPoint}
                  slides
                  virtual
                  navigation={{
                    nextEl: `.next-button-${i}`,
                    prevEl: `.prev-button-${i}`,
                  }}
                >
                  {fake[key].map((d, index) => (
                    <SwiperSlide key={key + index}>
                      <Box
                        marginRight="25px"
                        className="card"
                        height={{ base: "300px", md: "325px", lg: "350px" }}
                        borderRadius="10px"
                        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        bgColor="#ffffff"
                        width={{ base: "190px", md: "250px", lg: "300px" }}
                      >
                        <Box height="55%" className="card-container image">
                          <Img
                            borderTopRadius="10px"
                            objectFit="cover"
                            objectPosition="center"
                            h="100%"
                            w="100%"
                            src="/images/girafe.jpg"
                            alt=""
                            title=""
                          />
                        </Box>
                        <Box
                          pos="relative"
                          h="45%"
                          className="card-container details"
                        >
                          <Box p="8px" className="presentation">
                            <Text
                              color="#800000"
                              fontSize="lg"
                              fontWeight="600"
                            >
                              {d.nom}
                            </Text>
                            <Text
                              fontWeight="400"
                              fontSize="xs"
                              className="adress"
                            >
                              Dakar-Senegal
                            </Text>
                          </Box>

                          <Box
                            display="flex"
                            p="5px"
                            justifyContent="space-between"
                            className="services"
                            borderTop=".5px solid 	rgba(0,0,0,.1)"
                            borderBottom=".5px solid 	rgba(0,0,0,.1)"
                          >
                            <Tag>
                              <TagLeftIcon color="#fff000" as={StarIcon} />
                              <TagLabel> 5 </TagLabel>
                            </Tag>
                            <Tag>
                              <TagLeftIcon as={MdPool} />
                              <TagLabel>oui</TagLabel>
                            </Tag>
                            <Tag>
                              <TagLeftIcon as={MdRoomService} />
                              <TagLabel>oui</TagLabel>
                            </Tag>
                          </Box>
                          <Divider />
                          <Button
                            _hover={{ cursor: "pointer", bgColor: "#000000" }}
                            mt={{ base: 1, md: 1, lg: 2 }}
                            mr={4}
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="red"
                            size="sm"
                            float="right"
                            onClick={() =>
                              router.push(`${router.pathname}/${d.nom}`)
                            }
                          >
                            Voir
                          </Button>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                  <Box
                    visibility={{ base: "hidden", md: "visible" }}
                    position="absolute"
                    top="100"
                    zIndex="30"
                    className="navigation"
                    w="100%"
                  >
                    <IconButton
                      _hover={{ bgColor: "rgba(255,255,255,.8)" }}
                      float="left"
                      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      bgColor="#ffffff"
                      className={`prev-button-${i} `}
                      borderRadius="50px"
                      icon={<ArrowBackIcon />}
                    />
                    <IconButton
                      _focus={{ boxShadow: "0 0 0 3px rgba(0,0,0,.5)" }}
                      _hover={{ bgColor: "rgba(255,255,255,.8)" }}
                      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      float="right"
                      bgColor="#ffffff"
                      className={`next-button-${i} `}
                      borderRadius="50px"
                      icon={<ArrowForwardIcon />}
                    />
                  </Box>
                </Swiper>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
