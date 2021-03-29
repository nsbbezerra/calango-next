import { useEffect, useState } from "react";
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
  useToast,
  FormErrorMessage,
  MenuDivider,
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
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useRegisterModal } from "../context/ModalRegister";
import { useLoginModal } from "../context/ModalLogin";

import { useClient } from "../context/Clients";
import api from "../configs/axios";

import { useRouter } from "next/router";

export default function HeaderApp() {
  const { client, setClient } = useClient();
  const toast = useToast();
  const { push } = useRouter();
  const { openRegister, setOpenRegister } = useRegisterModal();
  const { openLogin, setOpenLogin } = useLoginModal();

  const [validators, setValidators] = useState([]);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [comp, setComp] = useState("");
  const [district, setDistrict] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [loading, setLoading] = useState(false);

  const [clientName, setClientName] = useState("Área do Cliente");

  useEffect(() => {
    handleLogin();
  }, []);

  useEffect(() => {
    if (JSON.stringify(client) !== "{}") {
      let namesplit = client.name.split(" ")[0];
      setClientName(namesplit);
    }
  }, [client]);

  async function handleLogin() {
    const result = await localStorage.getItem("client");
    let parse = JSON.parse(result);
    if (parse) {
      let namesplit = parse.name.split(" ")[0];
      setClient(parse);
      setClientName(namesplit);
    }
  }

  function clear() {
    setName("");
    setCpf("");
    setPhone("");
    setEmail("");
    setStreet("");
    setNumber("");
    setComp("");
    setDistrict("");
    setCep("");
    setCity("");
    setState("");
  }

  function handleValidator(path, message) {
    let val = [];
    let info = { path: path, message: message };
    val.push(info);
    setValidators(val);
    const inpt = document.getElementById(path);
    inpt.focus();
  }

  function showToast(message, status, title) {
    toast({
      title: title,
      description: message,
      status: status,
      position: "bottom-right",
    });
  }

  async function register() {
    if (name === "") {
      handleValidator("name", "Campo Obrigatório");
      return false;
    }
    if (cpf === "") {
      handleValidator("cpf", "Campo Obrigatório");
      return false;
    }
    if (cpf.includes("_")) {
      handleValidator("cpf", "Preencha corretamente");
      return false;
    }
    if (phone === "") {
      handleValidator("phone", "Campo Obrigatório");
      return false;
    }
    if (phone.includes("_")) {
      handleValidator("phone", "Preencha corretamente");
      return false;
    }
    if (email === "") {
      handleValidator("email", "Campo Obrigatório");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      handleValidator(
        "email",
        "Preencha corretamente, precisa conter (@) e (.)"
      );
      return false;
    }
    if (street === "") {
      handleValidator("street", "Campo Obrigatório");
      return false;
    }
    if (number === "") {
      handleValidator("number", "Campo Obrigatório");
      return false;
    }
    if (district === "") {
      handleValidator("district", "Campo Obrigatório");
      return false;
    }
    if (cep === "") {
      handleValidator("cep", "Campo Obrigatório");
      return false;
    }
    if (cep.includes("_")) {
      handleValidator("cep", "Insira um CEP válido");
      return false;
    }
    if (city === "") {
      handleValidator("city", "Campo Obrigatório");
      return false;
    }
    if (state === "") {
      handleValidator("state", "Campo Obrigatório");
      return false;
    }
    setValidators([]);
    setLoading(true);
    try {
      const response = await api.post("/clients", {
        name,
        cpf,
        phone,
        email,
        street,
        number,
        comp,
        district,
        cep,
        city,
        state,
      });
      showToast(response.data.message, "success", "Sucesso");
      setOpenRegister(false);
      setLoading(false);
      clear();
    } catch (error) {
      setLoading(false);
      if (error.message === "Network Error") {
        alert(
          "Sem conexão com o servidor, verifique sua conexão com a internet."
        );
        return false;
      }
      let mess = !error.response.data
        ? "Erro no cadastro do cliente"
        : error.response.data.message;
      showToast(mess, "error", "Erro");
    }
  }

  async function login() {
    if (cpf === "") {
      handleValidator("cpflogin", "Campo Obrigatório");
      return false;
    }
    if (cpf.includes("_")) {
      handleValidator("cpflogin", "Preencha corretamente");
      return false;
    }
    setLoading(true);
    try {
      const response = await api.post("/login", { cpf });
      await localStorage.setItem("client", JSON.stringify(response.data));
      let namesplit = response.data.name.split(" ")[0];
      setClientName(namesplit);
      setLoading(false);
      setClient(response.data);
      clear();
      setOpenLogin(false);
    } catch (error) {
      setLoading(false);
      if (error.message === "Network Error") {
        alert(
          "Sem conexão com o servidor, verifique sua conexão com a internet."
        );
        return false;
      }
      let mess = !error.response.data
        ? "Erro no cadastro do cliente"
        : error.response.data.message;
      showToast(mess, "error", "Erro");
    }
  }

  async function logout() {
    await localStorage.removeItem("client");
    setClientName("Área do Cliente");
    setClient({});
    push("/");
  }

  return (
    <>
      <Head>
        <title>PWM Rifas | Crie sua rifa online aqui.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rifas Online" />
        <meta
          name="keywords"
          content="rifas, rifa, sorteios, sorteio, prêmios, prêmio, ganhar, sortear, rifar, concorrer, ganhar"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Natanael Bezerra - NK Informática" />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
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
                />
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  {JSON.stringify(client) === "{}" ? (
                    <>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        onClick={() => setOpenRegister(true)}
                      >
                        CADASTRE-SE
                      </MenuItem>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        onClick={() => setOpenLogin(true)}
                      >
                        FAÇA LOGIN
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <Link href={`/meusdados/${client.identify}`} passHref>
                        <a>
                          <MenuItem
                            _active={{ bg: "purple.100", color: "white" }}
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "purple.100", color: "white" }}
                          >
                            MEUS DADOS
                          </MenuItem>
                        </a>
                      </Link>
                      <MenuDivider />
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        icon={<AiOutlineLogout />}
                        onClick={() => logout()}
                      >
                        SAIR
                      </MenuItem>
                    </>
                  )}
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
                  {clientName}
                </MenuButton>
                <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                  {JSON.stringify(client) === "{}" ? (
                    <>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        onClick={() => setOpenRegister(true)}
                      >
                        CADASTRE-SE
                      </MenuItem>
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        onClick={() => setOpenLogin(true)}
                      >
                        FAÇA LOGIN
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <Link href={`/meusdados/${client.identify}`} passHref>
                        <a>
                          <MenuItem
                            _active={{ bg: "purple.100", color: "white" }}
                            _focus={{ bg: "transparent" }}
                            _hover={{ bg: "purple.100", color: "white" }}
                          >
                            MEUS DADOS
                          </MenuItem>
                        </a>
                      </Link>
                      <MenuDivider />
                      <MenuItem
                        _active={{ bg: "purple.100", color: "white" }}
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "purple.100", color: "white" }}
                        icon={<AiOutlineLogout />}
                        onClick={() => logout()}
                      >
                        SAIR
                      </MenuItem>
                    </>
                  )}
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
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
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
            <FormControl
              isInvalid={
                validators.find((obj) => obj.path === "cpflogin") ? true : false
              }
              isRequired
            >
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
                id="cpflogin"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="CPF"
                render={(ref, props) => (
                  <Input ref={ref} {...props} focusBorderColor="purple.400" />
                )}
              />
              <FormErrorMessage>
                {validators.find((obj) => obj.path === "cpflogin")
                  ? validators.find((obj) => obj.path === "cpflogin").message
                  : ""}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              leftIcon={<AiOutlineLogin />}
              isLoading={loading}
              onClick={() => login()}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={openRegister}
        onClose={() => setOpenRegister(false)}
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
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "name") ? true : false
                }
              >
                <FormLabel>Nome Completo</FormLabel>
                <Input
                  id="name"
                  focusBorderColor="purple.400"
                  placeholder="Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "name")
                    ? validators.find((obj) => obj.path === "name").message
                    : ""}
                </FormErrorMessage>
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
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "cpf") ? true : false
                }
              >
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
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="CPF"
                  render={(ref, props) => (
                    <Input ref={ref} {...props} focusBorderColor="purple.400" />
                  )}
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "cpf")
                    ? validators.find((obj) => obj.path === "cpf").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "phone") ? true : false
                }
              >
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
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "phone")
                    ? validators.find((obj) => obj.path === "phone").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
            </Grid>
            <Grid templateColumns="1fr" mt={3}>
              <FormControl
                mb={3}
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "email") ? true : false
                }
              >
                <FormLabel>Email</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "email")
                    ? validators.find((obj) => obj.path === "email").message
                    : ""}
                </FormErrorMessage>
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
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "street") ? true : false
                }
              >
                <FormLabel>
                  Logradouro - Rua, Avenida, Alameda, etc...
                </FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Logradouro - Rua, Avenida, Alameda, etc..."
                  value={street}
                  onChange={(e) => setStreet(e.target.value.toUpperCase())}
                  id="street"
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "street")
                    ? validators.find((obj) => obj.path === "street").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "number") ? true : false
                }
              >
                <FormLabel>Número</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Número"
                  value={number}
                  onChange={(e) => setNumber(e.target.value.toUpperCase())}
                  id="number"
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "number")
                    ? validators.find((obj) => obj.path === "number").message
                    : ""}
                </FormErrorMessage>
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
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Ponto de Referência"
                  value={comp}
                  onChange={(e) => setComp(e.target.value.toUpperCase())}
                />
              </FormControl>
              <FormControl
                isInvalid={
                  validators.find((obj) => obj.path === "district")
                    ? true
                    : false
                }
                isRequired
              >
                <FormLabel>Bairro / Distrito</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Bairro / Distrito"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value.toUpperCase())}
                  id="district"
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "district")
                    ? validators.find((obj) => obj.path === "district").message
                    : ""}
                </FormErrorMessage>
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
              <FormControl
                isRequired
                isInvalid={
                  validators.find((obj) => obj.path === "cep") ? true : false
                }
              >
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
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="CEP"
                  render={(ref, props) => (
                    <Input
                      ref={ref}
                      {...props}
                      focusBorderColor={"purple.400"}
                    />
                  )}
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "cep")
                    ? validators.find((obj) => obj.path === "cep").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  validators.find((obj) => obj.path === "city") ? true : false
                }
                isRequired
              >
                <FormLabel>Cidade</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value.toUpperCase())}
                  id="city"
                />
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "city")
                    ? validators.find((obj) => obj.path === "city").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  validators.find((obj) => obj.path === "state") ? true : false
                }
                isRequired
              >
                <FormLabel>UF</FormLabel>
                <Select
                  placeholder="Selecione"
                  variant="outline"
                  focusBorderColor={"purple.400"}
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                <FormErrorMessage>
                  {validators.find((obj) => obj.path === "state")
                    ? validators.find((obj) => obj.path === "state").message
                    : ""}
                </FormErrorMessage>
              </FormControl>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              leftIcon={<FaSave />}
              isLoading={loading}
              onClick={() => register()}
            >
              Cadastrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
