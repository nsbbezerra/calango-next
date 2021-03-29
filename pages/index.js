import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Image as ChakraImage,
  IconButton,
  Text,
  Divider,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import HeaderApp from "../components/header";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import configsGlobal from "../configs/index";
import FooterApp from "../components/footer";
import { useConfigs } from "../context/Configs";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";

export default function Home({ config, raffles, url, banners }) {
  const { setConfigs } = useConfigs();

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setConfigs(config);
  }, [config]);

  useEffect(() => {
    if (!banners) {
      setBanner([]);
    } else {
      setBanner(banners);
    }
  }, [banners]);

  const CustomArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === "PREV" ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <IconButton
        onClick={onClick}
        disabled={isEdge}
        aria-label="Search database"
        icon={pointer}
        fontSize="3xl"
        variant="link"
        colorScheme="green"
        _focus={{ outline: "none" }}
      />
    );
  };

  const CustomArrowBanner = ({ type, onClick, isEdge }) => {
    const pointer =
      type === "PREV" ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <IconButton
        onClick={onClick}
        disabled={isEdge}
        aria-label="Search database"
        icon={pointer}
        fontSize="3xl"
        variant="link"
        colorScheme="green"
        _focus={{ outline: "none" }}
      />
    );
  };

  return (
    <>
      <HeaderApp />
      <Container maxW="7xl" mt={20}>
        <>
          {banner.length === 0 ? (
            <Box rounded="lg" overflow="hidden">
              <ChakraImage
                src="/img/banner.jpg"
                w="100%"
                h={["15vh", "25vh", "25vh", "30vh", "30vh"]}
              />
            </Box>
          ) : (
            <Carousel
              itemsToShow={1}
              enableAutoPlay
              autoPlaySpeed={5000}
              renderArrow={CustomArrowBanner}
              pagination={false}
            >
              {banner.map((ban) => (
                <LinkBox rounded="lg" overflow="hidden" key={ban.id}>
                  <Link passHref href={`/sorteio/${ban.identify}`}>
                    <LinkOverlay>
                      <ChakraImage
                        src={`${url}/${ban.banner}`}
                        w="100%"
                        h={["15vh", "25vh", "25vh", "30vh", "30vh"]}
                      />
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              ))}
            </Carousel>
          )}
        </>
      </Container>

      <Box pt={10} pb={10} bg="purple.400" mt={20}>
        <Container maxW="7xl">
          {!raffles || raffles.length === 0 ? (
            ""
          ) : (
            <Carousel
              renderArrow={CustomArrow}
              breakPoints={configsGlobal.carousel.carousel}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Flex mt={3}>
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <Box
                          w="12px"
                          h="12px"
                          shadow="sm"
                          bg={isActivePage ? "green.400" : "green.100"}
                          key={page}
                          onClick={() => onClick(page)}
                          borderRadius="50%"
                          mr={2}
                          cursor="pointer"
                        />
                      );
                    })}
                  </Flex>
                );
              }}
            >
              {raffles.map((raf) => (
                <LinkBox
                  rounded="lg"
                  overflow="hidden"
                  w="220px"
                  bg="white"
                  shadow="dark-lg"
                  key={raf.id}
                >
                  <Box w="220px" h="220px">
                    <Image
                      src={`${url}/${raf.thumbnail}`}
                      width={260}
                      height={260}
                      layout="responsive"
                      objectFit="cover"
                      alt="PMW Rifas, rifas online"
                    />
                  </Box>
                  <Box p={2} w="260px">
                    <Link href={`/sorteio/${raf.identify}`} passHref>
                      <LinkOverlay>
                        <Heading
                          color="purple.400"
                          fontSize="md"
                          isTruncated
                          noOfLines={1}
                          w="200px"
                        >
                          {raf.name}
                        </Heading>
                      </LinkOverlay>
                    </Link>
                    <Text fontSize="xs" mt={2} isTruncated noOfLines={1}>
                      Sorteio:{" "}
                      <strong>
                        {format(
                          new Date(raf.draw_date),
                          "dd 'de' MMMM', às ' HH:mm'h'",
                          { locale: pt_br }
                        )}
                      </strong>{" "}
                    </Text>
                    <Flex align="center" mt={1}>
                      <Text fontWeight="300" mr={2}>
                        R$
                      </Text>
                      <Text fontWeight="800">
                        {parseFloat(raf.raffle_value).toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </Text>
                    </Flex>
                    <Divider mt={1} mb={1} />
                    <Flex align="center" fontSize="xs">
                      <Icon as={FaUserAlt} mr={2} />
                      <Text w="180px" isTruncated noOfLines={1}>
                        {raf.name_client}
                      </Text>
                    </Flex>
                  </Box>
                </LinkBox>
              ))}
            </Carousel>
          )}

          <Grid
            templateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
              "repeat(auto-fit, minmax(280px, 280px))",
            ]}
            gap="30px"
            justifyContent="center"
            justifyItems="center"
            alignItems="start"
            mt={10}
          >
            <Flex w="280px" justify="center" align="center" direction="column">
              <Box w="100px" h="100px">
                <Image
                  src="/img/icon_01-01.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Text
                color="white"
                textAlign="center"
                fontSize="sm"
                fontWeight="700"
                mt={5}
              >
                Escolha o prêmio que gostaria de concorrer, verifique a
                descrição, regulamento do sorteio e fotos, em caso de dúvidas
                contate o administrador
              </Text>
            </Flex>
            <Flex w="280px" justify="center" align="center" direction="column">
              <Box w="100px" h="100px">
                <Image
                  src="/img/icon_02-01.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Text
                color="white"
                textAlign="center"
                fontSize="sm"
                fontWeight="700"
                mt={5}
              >
                Você pode escolher quantos números desejar! Mais números,mais
                chances de ganhar
              </Text>
            </Flex>
            <Flex w="280px" justify="center" align="center" direction="column">
              <Box w="100px" h="100px">
                <Image
                  src="/img/icon_03-01.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Text
                color="white"
                textAlign="center"
                fontSize="sm"
                fontWeight="700"
                mt={5}
              >
                Faça o pagamento em uma das contas exibidas. Envie o comprovante
                ao administrador via whatsApp.
              </Text>
            </Flex>
            <Flex w="280px" justify="center" align="center" direction="column">
              <Box w="100px" h="100px">
                <Image
                  src="/img/icon_04-01.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Text
                color="white"
                textAlign="center"
                fontSize="sm"
                fontWeight="700"
                mt={5}
              >
                Aguarde o sorteio pela Loteria Federal, Cruze os dedos, Você
                pode ser o próximo sorteado.
              </Text>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <FooterApp />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${configsGlobal.url}/site`);
  const data = await response.json();
  let conf = !data.configs ? null : data.configs;
  let raf = !data.raffles ? null : data.raffles;
  let url = !data.url ? null : data.url;
  let banners = !data.banners ? null : data.banners;
  return {
    props: {
      config: conf,
      raffles: raf,
      url: url,
      banners,
    },
    revalidate: 10,
  };
};
