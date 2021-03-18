import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Flex,
  Text,
  IconButton,
  LinkBox,
  LinkOverlay,
  HStack,
  Tooltip,
  Heading,
  Divider,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiOnTarget } from "react-icons/gi";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "../components/sliders";

export default function FooterApp() {
  const [total, setTotal] = useState(27);

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

  return (
    <>
      <Box pt={10} pb={10} bg="purple.400" mt={10}>
        <Container maxW="7xl">
          <Carousel
            renderArrow={CustomArrow}
            itemsToShow={4}
            itemsToScroll={4}
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
            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>

            <LinkBox
              rounded="lg"
              overflow="hidden"
              w="220px"
              bg="white"
              shadow="lg"
            >
              <Box w="220px" h="220px">
                <Image
                  src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Slider
                aria-label="slider-ex-4"
                defaultValue={30}
                onChange={(e) => setTotal(e)}
                defaultValue={total}
                mt={-8}
              >
                <SliderTrack bg="purple.100">
                  <SliderFilledTrack bg="purple.400" />
                </SliderTrack>
                <SliderThumb
                  boxSize={8}
                  borderWidth="1px"
                  borderColor="purple.100"
                  _focus={{ outline: "none" }}
                >
                  <Text fontSize="x-small">{total}%</Text>
                </SliderThumb>
              </Slider>
              <Box p={2} mt={-3} w="260px">
                <Link href="/" passHref>
                  <LinkOverlay>
                    <Heading
                      color="purple.400"
                      fontSize="md"
                      isTruncated
                      noOfLines={1}
                      w="200px"
                    >
                      Título da Rifa Título da Rifa Título da Rifa
                    </Heading>

                    <HStack mt={2}>
                      <Flex align="center">
                        <Text fontWeight="300" mr={2}>
                          R$
                        </Text>
                        <Text fontWeight="800">1000</Text>
                      </Flex>
                      <Text fontSize="xs" mt={1}>
                        Sorteio dia 10/10/1010
                      </Text>
                    </HStack>
                  </LinkOverlay>
                </Link>
              </Box>
            </LinkBox>
          </Carousel>

          <Grid
            templateColumns="repeat(auto-fit, minmax(280px, 280px))"
            gap="30px"
            justifyContent="center"
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
      <Box bg="green.400" p={5} textAlign="center" color="white">
        © 2021 - RIFA PMW, Todos os Direitos Reservados!
      </Box>
    </>
  );
}
