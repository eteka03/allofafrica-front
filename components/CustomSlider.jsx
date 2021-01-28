import React from 'react'
import SwiperCore, { Virtual, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {useBreakpointValue,IconButton ,Button , Box ,Img, Text , Tag , TagLeftIcon ,TagLabel ,Divider} from '@chakra-ui/react'
import {StarIcon,ArrowForwardIcon,ArrowBackIcon} from '@chakra-ui/icons'
import {MdPool} from '@react-icons/all-files/md/MdPool'
import {MdRoomService} from '@react-icons/all-files/md/MdRoomService'

SwiperCore.use([Virtual, Navigation]);
const CustomSlider = ({datas}) => {
     const breakPoint = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 4,
  });

 console.log(datas)
    return (
        <Swiper
        slideClass="teston"
              style={{ padding: "25px 0px" }}
              slide="true"
              slidesPerView={breakPoint}
              slides
              virtual
              navigation={{
                nextEl: `.next-button`,
                prevEl: `.prev-button`,
              }}
            >
                {datas.map((d)=>{
                  return(
                    <SwiperSlide >
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
                              {Math.random() * 10 > 5 ? "Dakar-Senegal" : "Ouagadougou-Burkina"}
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
                              router.push({pathname:`${router.pathname}/${d.nom}`,query:{categorie:d.cat}})
                            }
                          >
                            Voir
                          </Button>
                        </Box>
                      </Box>
    
                    </SwiperSlide>)
                })}
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
                      className={`prev-button`}
                      borderRadius="50px"
                      icon={<ArrowBackIcon />}
                    />
                    <IconButton
                      _focus={{ boxShadow: "0 0 0 3px rgba(0,0,0,.5)" }}
                      _hover={{ bgColor: "rgba(255,255,255,.8)" }}
                      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      float="right"
                      bgColor="#ffffff"
                      className={`next-button `}
                      borderRadius="50px"
                      icon={<ArrowForwardIcon />}
                    />
                  </Box>
            </Swiper>
    )
}

export default CustomSlider
