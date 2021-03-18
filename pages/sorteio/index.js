import { useEffect, useState } from "react";
import HeaderApp from "../../components/header";
import {
  Box,
  Grid,
  Container,
  Text,
  Flex,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Sorteio() {
  const [numbers, setNumbers] = useState([]);
  const [mynumbers, setMynumbers] = useState([]);

  useEffect(() => {
    generateNumbers();
  }, []);

  useEffect(() => {
    console.log(mynumbers);
  }, [mynumbers]);

  function generateNumbers() {
    let number = [];
    for (let index = 0; index < 100; index++) {
      let info = {
        num:
          (index < 10 - 1 && `00${index + 1}`) ||
          (index < 100 - 1 && `0${index + 1}`) ||
          (index >= 100 - 1 && `${index + 1}`),
      };
      number.push(info);
    }
    setNumbers(number);
  }

  return (
    <>
      <HeaderApp />
      <Container maxW="6xl" mt={10}>
        <Grid
          templateColumns={[
            "1fr",
            "1fr",
            "220px 1fr",
            "220px 1fr",
            "220px 1fr",
          ]}
          gap="40px"
        >
          <Box w="220px" h="220px" overflow="hidden" rounded="lg">
            <Image
              src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
              width={260}
              height={260}
              layout="responsive"
              objectFit="cover"
              alt="PMW Rifas, rifas online"
            />
          </Box>
          <Box>
            <Heading fontSize="3xl" isTruncated noOfLines={1}>
              Título da rifa
            </Heading>
            <Flex mt={3} direction={["column", "column", "row", "row", "row"]}>
              <HStack fontSize="2xl" spacing="15px" mr={20}>
                <Text>R$</Text>
                <Text fontWeight="700">1000</Text>
              </HStack>
              <HStack fontSize="2xl" spacing="15px">
                <Text>Data do Sorteio</Text>
                <Text fontWeight="700">10/10/1000</Text>
              </HStack>
            </Flex>
            <Box borderWidth="1px" mt={3} rounded="lg" p={4}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Box>
          </Box>
        </Grid>
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
          <Grid
            mt={10}
            templateColumns={[
              "repeat(1, 210px)",
              "repeat(2, 210px)",
              "repeat(2, 210px)",
              "repeat(4, 210px)",
              "repeat(4, 210px)",
            ]}
            gap="15px"
          >
            <Box
              rounded="3xl"
              pt={1}
              pb={1}
              pr={3}
              pl={3}
              bg="black"
              color="white"
              textAlign="center"
            >
              Livres (998)
            </Box>
            <Box
              rounded="3xl"
              pt={1}
              pb={1}
              pr={3}
              pl={3}
              bg="orange.400"
              color="white"
              textAlign="center"
            >
              Reservado (998)
            </Box>
            <Box
              rounded="3xl"
              pt={1}
              pb={1}
              pr={3}
              pl={3}
              bg="green.400"
              color="white"
              textAlign="center"
            >
              Pago (998)
            </Box>
            <Box
              rounded="3xl"
              pt={1}
              pb={1}
              pr={3}
              pl={3}
              bg="red.600"
              color="white"
              textAlign="center"
            >
              Meus Números ({mynumbers.length})
            </Box>
          </Grid>
          <Box
            rounded="lg"
            bg="gray.700"
            p={4}
            mt={5}
            shadow="dark-lg"
            h="350px"
            maxH="350px"
            overflow="auto"
          >
            <Grid
              templateColumns="repeat(auto-fit, minmax(75px, 75px))"
              gap="15px"
              justifyContent="center"
            >
              {numbers.map((num) => (
                <Button
                  w="75px"
                  colorScheme="blackAlpha"
                  bg={
                    mynumbers.find((obj) => obj === num.num)
                      ? "red.600"
                      : "black"
                  }
                  _focus={{
                    outline: "none",
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "red.600"
                      : "gray.800",
                  }}
                  _active={{
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "red.600"
                      : "gray.800",
                  }}
                  _hover={{
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "red.600"
                      : "gray.800",
                  }}
                  key={num.num}
                  onClick={() => setMynumbers([...mynumbers, num.num])}
                >
                  {num.num}
                </Button>
              ))}
            </Grid>
          </Box>
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
