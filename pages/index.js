import { useState } from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/layout";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";
import Link from "next/link";
import HeaderApp from "../components/header";
import Image from "next/image";
import { Tooltip } from "@chakra-ui/tooltip";
import { GiOnTarget } from "react-icons/gi";
import Icon from "@chakra-ui/icon";

import FooterApp from "../components/footer";
import { Button } from "@chakra-ui/button";

export default function Home() {
  const [total, setTotal] = useState(27);
  return (
    <>
      <HeaderApp />
      <Container maxW="6xl" mt={10}>
        <Center>
          <Heading color="purple.300" fontSize="2xl">
            Em Destaque
          </Heading>
        </Center>

        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 250px))"
          gap="40px"
          mt={10}
          justifyContent="center"
        >
          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>

          <LinkBox rounded="lg" borderWidth="1px" overflow="hidden" w="260px">
            <Box w="260px" h="260px">
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
                  <Grid
                    templateColumns="1fr 70px"
                    gap="15px"
                    alignItems="center"
                  >
                    <Tooltip
                      label="Título da Rifa Título da Rifa Título da Rifa"
                      hasArrow
                    >
                      <Heading
                        color="purple.400"
                        fontSize="md"
                        isTruncated
                        noOfLines={1}
                      >
                        Título da Rifa Título da Rifa Título da Rifa
                      </Heading>
                    </Tooltip>
                    <HStack justify="flex-end">
                      <Text fontWeight="300">R$</Text>
                      <Text fontWeight="800">1000</Text>
                    </HStack>
                  </Grid>
                  <Text fontSize="xs" mt={1}>
                    Sorteio dia 10/10/1010
                  </Text>
                </LinkOverlay>
              </Link>
              <Divider mt={2} mb={2} />
              <Flex align="center" justify="space-between">
                <HStack>
                  <Box w="40px" h="40px" overflow="hidden" rounded="full">
                    <Image
                      src="https://i.pinimg.com/736x/94/57/16/94571608f209b49d5ee2bcc6a9c85fc7.jpg"
                      width={50}
                      height={50}
                      alt="PMW Rifas, rifas online"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </Box>
                  <Text fontSize="xs" isTruncated noOfLines={1}>
                    Nome do usuário
                  </Text>
                </HStack>
                <Tooltip label="Meta" hasArrow>
                  <HStack>
                    <Icon as={GiOnTarget} />
                    <Text fontSize="xs">100%</Text>
                  </HStack>
                </Tooltip>
              </Flex>
            </Box>
          </LinkBox>
        </Grid>

        <Flex justify="center" align="center" mt={10}>
          <Link href="/" passHref>
            <a>
              <Button
                colorScheme="purple"
                variant="link"
                _focus={{ outline: "none" }}
              >
                Veja mais sorteios
              </Button>
            </a>
          </Link>
        </Flex>
      </Container>

      <FooterApp />
    </>
  );
}
