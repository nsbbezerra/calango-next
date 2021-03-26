import HeaderApp from "../components/header";
import FooterApp from "../components/footerTotal";
import {
  Container,
  Grid,
  LinkBox,
  LinkOverlay,
  Box,
  Text,
  Heading,
  Flex,
  Divider,
  HStack,
} from "@chakra-ui/layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../components/sliders";
import Link from "next/link";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Icon } from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { Button } from "@chakra-ui/button";
import { FaSearch, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import configsGlobal from "../configs/index";

export default function Sorteios({ raffles }) {
  return (
    <>
      <HeaderApp />

      <Container maxW="6xl" mt={10}>
        <Breadcrumb fontSize={["xx-small", "md", "md", "md", "md"]} mb={10}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <a>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link passHref href="/sorteios">
              <a>
                <BreadcrumbLink>Sorteios</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid
          templateColumns={[
            "1fr",
            "1fr 1fr 200px",
            "1fr 2fr 200px",
            "1fr 2fr 200px",
            "1fr 3fr 1fr",
          ]}
          gap="15px"
        >
          <FormControl>
            <FormLabel>Selecione uma opção:</FormLabel>
            <Select
              placeholder="Selecione uma opção"
              focusBorderColor="purple.400"
            >
              <option>Nome do usuário</option>
              <option>Título da Rifa</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Digite para buscar</FormLabel>
            <Input
              focusBorderColor="purple.400"
              placeholder="Digite para buscar"
            />
          </FormControl>
          <FormControl>
            <FormLabel
              color="transparent"
              userSelect="none"
              display={["none", "block", "block", "block", "block"]}
            >
              .
            </FormLabel>
            <Button
              isFullWidth
              leftIcon={<FaSearch />}
              colorScheme="purple"
              variant="outline"
            >
              Buscar
            </Button>
          </FormControl>
        </Grid>

        <Grid
          templateColumns="repeat(auto-fit, minmax(220px, 220px))"
          gap="30px"
          mt={10}
          justifyContent="center"
        >
          <LinkBox
            rounded="lg"
            overflow="hidden"
            w="220px"
            bg="white"
            shadow="lg"
            borderWidth="1px"
          >
            <Flex
              bg="blackAlpha.700"
              position="absolute"
              w="220px"
              h="100%"
              zIndex={1000}
              justify="center"
              align="center"
            >
              <Box
                w="100%"
                bg="green.600"
                p={3}
                textAlign="center"
                fontWeight="700"
                color="white"
              >
                <Text>FINALIZADA</Text>
                <HStack justify="center" mt={2}>
                  <Text>Nº Sorteado:</Text>
                  <Text
                    p={2}
                    bg="white"
                    borderWidth="1px"
                    borderColor="purple.400"
                    rounded="md"
                    color="purple.400"
                    shadow="md"
                  >
                    1000
                  </Text>
                </HStack>
              </Box>
            </Flex>
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
            <Box p={2} w="260px">
              <Link href="/sorteio" passHref>
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
                </LinkOverlay>
              </Link>
              <Text fontSize="xs" mt={2}>
                Sorteio dia <strong>10/10/1010</strong> as{" "}
                <strong>19:00</strong>
              </Text>
              <Flex align="center" mt={1}>
                <Text fontWeight="300" mr={2}>
                  R$
                </Text>
                <Text fontWeight="800">1000</Text>
              </Flex>
              <Divider mt={1} mb={1} />
              <Flex align="center" fontSize="xs">
                <Icon as={FaUserAlt} mr={2} />
                <Text w="180px" isTruncated noOfLines={1}>
                  Nome do usuário
                </Text>
              </Flex>
            </Box>
          </LinkBox>
        </Grid>
      </Container>

      <FooterApp />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${configsGlobal.url}/showRaffles`);
  const data = await response.json();
  let raffles = !data ? null : data;
  console.log(data);
  return {
    props: {
      raffles,
    },
  };
};
