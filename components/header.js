import { useState } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Grid,
  InputLeftElement,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaInstagram,
  FaBars,
  FaUserAlt,
  FaSave,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MaskedInput from "react-text-mask";
import { AiOutlineLogin } from "react-icons/ai";

export default function HeaderApp() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

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
                  icon={<FaUserAlt />}
                  size="lg"
                  colorScheme="purple"
                  variant="outline"
                  fontSize="2xl"
                >
                  Área do Cliente
                </MenuButton>
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                    onClick={() => setModalRegister(true)}
                  >
                    CADASTRE-SE
                  </MenuItem>
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                    onClick={() => setModalLogin(true)}
                  >
                    FAÇA LOGIN
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu placement="bottom-end">
                <MenuButton
                  as={IconButton}
                  icon={<FaBars />}
                  size="lg"
                  colorScheme="purple"
                  fontSize="2xl"
                  ml={3}
                />
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  <Link href="/sorteios" passHref>
                    <a>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                      >
                        SORTEIOS
                      </MenuItem>
                    </a>
                  </Link>
                  <Link href="/faleconosco" passHref>
                    <a>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                      >
                        FALE CONOSCO
                      </MenuItem>
                    </a>
                  </Link>
                  <Link href="/novosorteio" passHref>
                    <a>
                      <MenuItem
                        _focus={{ bg: "transparent", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                      >
                        CRIAR SORTEIO
                      </MenuItem>
                    </a>
                  </Link>
                  <Link href="/condicoesdeuso" passHref>
                    <a>
                      <MenuItem
                        _hover={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                      >
                        CONDIÇÕES DE USO
                      </MenuItem>
                    </a>
                  </Link>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              justify="space-between"
              direction="column"
              align="flex-end"
              h="100px"
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Menu placement="bottom-end">
                <MenuButton
                  as={Button}
                  leftIcon={<FaUserAlt />}
                  colorScheme="purple"
                  variant="outline"
                  maxW="max-content"
                  mt={3}
                >
                  Área do Cliente
                </MenuButton>
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                    onClick={() => setModalRegister(true)}
                  >
                    CADASTRE-SE
                  </MenuItem>
                  <MenuItem
                    _active={{ bg: "purple.100", color: "white" }}
                    _focus={{ bg: "transparent" }}
                    _hover={{ bg: "purple.100", color: "white" }}
                    onClick={() => setModalLogin(true)}
                  >
                    FAÇA LOGIN
                  </MenuItem>
                </MenuList>
              </Menu>
              <Flex>
                <Link href="/sorteios" passHref>
                  <a>
                    <Button
                      colorScheme="purple"
                      variant="link"
                      size="sm"
                      _focus={{ outline: "none" }}
                    >
                      SORTEIOS
                    </Button>
                  </a>
                </Link>
                <Divider
                  orientation="vertical"
                  h="20px"
                  ml={3}
                  mr={3}
                  borderColor="purple.400"
                />
                <Link href="/faleconosco" passHref>
                  <a>
                    <Button
                      colorScheme="purple"
                      variant="link"
                      size="sm"
                      _focus={{ outline: "none" }}
                    >
                      FALE CONOSCO
                    </Button>
                  </a>
                </Link>
                <Divider
                  orientation="vertical"
                  h="20px"
                  ml={3}
                  mr={3}
                  borderColor="purple.400"
                />
                <Link href="/novosorteio" passHref>
                  <a>
                    <Button
                      colorScheme="purple"
                      variant="link"
                      size="sm"
                      _focus={{ outline: "none" }}
                    >
                      CRIAR SORTEIO
                    </Button>
                  </a>
                </Link>
                <Divider
                  orientation="vertical"
                  h="20px"
                  ml={3}
                  mr={3}
                  borderColor="purple.400"
                />
                <Link href="/condicoesdeuso" passHref>
                  <a>
                    <Button
                      colorScheme="purple"
                      variant="link"
                      size="sm"
                      _focus={{ outline: "none" }}
                    >
                      CONDIÇÔES DE USO
                    </Button>
                  </a>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Modal
        isOpen={modalLogin}
        onClose={() => setModalLogin(false)}
        isCentered
        size="sm"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={AiOutlineLogin} />
              <Text ml={3}>Login</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>CPF</FormLabel>
              <MaskedInput
                mask={[
                  /[0-9]/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
                placeholder="CPF"
                render={(ref, props) => (
                  <Input ref={ref} {...props} focusBorderColor="purple.400" />
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" leftIcon={<AiOutlineLogin />}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalRegister}
        onClose={() => setModalRegister(false)}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={FaSave} />
              <Text ml={3}>Cadastro</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="1fr" gap="15px">
              <FormControl>
                <FormLabel>Nome Completo</FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
            </Grid>
            <Grid
              mt={3}
              templateColumns={[
                "1fr",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap="15px"
            >
              <FormControl>
                <FormLabel>CPF</FormLabel>
                <MaskedInput
                  mask={[
                    /[0-9]/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="CPF"
                  render={(ref, props) => (
                    <Input ref={ref} {...props} focusBorderColor="purple.400" />
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Telefone</FormLabel>
                <MaskedInput
                  mask={[
                    "(",
                    /[0-9]/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="Telefone"
                  id="contact"
                  render={(ref, props) => (
                    <InputGroup>
                      <InputLeftElement children={<FaWhatsapp />} />
                      <Input
                        placeholder="Telefone"
                        ref={ref}
                        {...props}
                        focusBorderColor="purple.400"
                      />
                    </InputGroup>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid templateColumns="1fr" mt={3}>
              <FormControl mb={3}>
                <FormLabel>Email</FormLabel>
                <Input focusBorderColor="purple.400" placeholder="Email" />
              </FormControl>
            </Grid>
            <Divider mt={7} mb={4} />
            <Grid
              templateColumns={[
                "1fr",
                "3fr 1fr",
                "3fr 1fr",
                "3fr 1fr",
                "3fr 1fr",
              ]}
              gap="15px"
            >
              <FormControl>
                <FormLabel>
                  Logradouro - Rua, Avenida, Alameda, etc...
                </FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
              <FormControl>
                <FormLabel>Número</FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
            </Grid>
            <Grid
              templateColumns={[
                "1fr",
                "1fr 1fr",
                "1fr 1fr",
                "1fr 1fr",
                "1fr 1fr",
              ]}
              mt={3}
              gap="15px"
            >
              <FormControl>
                <FormLabel>Ponto de Referência</FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
              <FormControl>
                <FormLabel>Bairro / Distrito</FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
            </Grid>
            <Grid
              templateColumns={[
                "1fr",
                "1fr 2fr 1fr",
                "1fr 2fr 1fr",
                "1fr 2fr 1fr",
                "1fr 2fr 1fr",
              ]}
              mt={3}
              gap="15px"
            >
              <FormControl>
                <FormLabel>CEP</FormLabel>
                <MaskedInput
                  mask={[
                    /[0-9]/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="CEP"
                  render={(ref, props) => (
                    <Input
                      ref={ref}
                      {...props}
                      focusBorderColor={"purple.400"}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input focusBorderColor="purple.400" />
              </FormControl>
              <FormControl>
                <FormLabel>UF</FormLabel>
                <Select
                  placeholder="Selecione"
                  variant="outline"
                  focusBorderColor={"purple.400"}
                  id="state"
                >
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </Select>
              </FormControl>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" leftIcon={<FaSave />}>
              Cadastrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
