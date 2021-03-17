import Head from "next/head";
import {
  Box,
  Flex,
  IconButton,
  Container,
  LinkBox,
  LinkOverlay,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function HeaderApp() {
  return (
    <>
      <Head>
        <title>PWM Rifas | Crie sua rifa online aqui.</title>
      </Head>
      <Box bg="purple.400" h="40px">
        <Container maxW="6xl">
          <Flex justify="flex-end" align="center" h="40px">
            <IconButton
              icon={<FaWhatsapp />}
              variant="link"
              colorScheme="whiteAlpha"
              color="white"
              _focus={{ outline: "none" }}
              fontSize="2xl"
            />
            <IconButton
              icon={<FaInstagram />}
              variant="link"
              colorScheme="whiteAlpha"
              color="white"
              _focus={{ outline: "none" }}
              fontSize="2xl"
            />
          </Flex>
        </Container>
      </Box>

      <Box borderBottomColor="green.400" borderBottomWidth="3px">
        <Container maxW="6xl">
          <Flex h="110px" align="center" justify="space-between">
            <LinkBox h="100px" w="145px" overflow="hidden" p={2}>
              <Link href="/" passHref>
                <LinkOverlay>
                  <Image
                    src="/img/logo-01.svg"
                    width={300}
                    height={200}
                    layout="responsive"
                    alt="PWM Rifas, rifas online"
                  />
                </LinkOverlay>
              </Link>
            </LinkBox>
            <Flex align="flex-end" h="100px">
              <Button
                colorScheme="purple"
                variant="link"
                size="sm"
                _focus={{ outline: "none" }}
              >
                SORTEIOS
              </Button>
              <Divider
                orientation="vertical"
                h="20px"
                ml={3}
                mr={3}
                borderColor="purple.400"
              />
              <Button
                colorScheme="purple"
                variant="link"
                size="sm"
                _focus={{ outline: "none" }}
              >
                FALE CONOSCO
              </Button>
              <Divider
                orientation="vertical"
                h="20px"
                ml={3}
                mr={3}
                borderColor="purple.400"
              />
              <Button
                colorScheme="purple"
                variant="link"
                size="sm"
                _focus={{ outline: "none" }}
              >
                CRIAR SORTEIO
              </Button>
              <Divider
                orientation="vertical"
                h="20px"
                ml={3}
                mr={3}
                borderColor="purple.400"
              />
              <Button
                colorScheme="purple"
                variant="link"
                size="sm"
                _focus={{ outline: "none" }}
              >
                CONDIÇÔES DE USO
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
