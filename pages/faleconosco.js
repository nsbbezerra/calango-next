import {
  Container,
  Heading,
  Box,
  Grid,
  Text,
  Flex,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import HeaderApp from "../components/header";
import Image from "next/image";
import Link from "next/link";

export default function FaleConosco() {
  return (
    <>
      <HeaderApp />
      <Container maxW="7xl" mt={10}>
        <Center>
          <Heading fontSize={["3xl", "5xl", "5xl", "5xl", "5xl"]}>
            Tá com duvidas?
          </Heading>
        </Center>
        <Center>
          <Heading fontSize={["3xl", "5xl", "5xl", "5xl", "5xl"]}>
            Entre em contato.
          </Heading>
        </Center>
        <Center mt={5} mb={5}>
          <Text
            fontSize={["lg", "2xl", "2xl", "2xl", "2xl"]}
            textAlign="center"
          >
            Clique no botão e fale pelo whatsapp.
          </Text>
        </Center>
        <Flex justify="center" align="center">
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>
                <Box w="200px" h="200px">
                  <Image
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    src="/img/whatsapp.svg"
                  />
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
        </Flex>
      </Container>

      <Box pt={10} pb={10} bg="purple.400" mt={10}>
        <Container maxW="7xl">
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
      <Box
        bg="green.400"
        p={5}
        textAlign="center"
        color="white"
        fontSize={["sm", "sm", "md", "md", "md"]}
      >
        © 2021 - RIFA PMW, Todos os Direitos Reservados!
      </Box>
    </>
  );
}
