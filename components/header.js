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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaBars } from "react-icons/fa";
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
            <Flex display={["flex", "flex", "none", "none", "none"]}>
              <Menu placement="bottom-end">
                <MenuButton
                  as={IconButton}
                  icon={<FaBars />}
                  size="lg"
                  colorScheme="purple"
                  variant="outline"
                  fontSize="2xl"
                />
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                  >
                    SORTEIOS
                  </MenuItem>
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                  >
                    FALE CONOSCO
                  </MenuItem>
                  <MenuItem
                    _focus={{ bg: "transparent", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                  >
                    CRIAR SORTEIO
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                  >
                    CONDIÇÕES DE USO
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              align="flex-end"
              h="100px"
              display={["none", "none", "flex", "flex", "flex"]}
            >
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
