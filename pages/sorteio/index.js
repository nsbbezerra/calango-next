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
  Stat,
  StatLabel,
  StatNumber,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Input,
  Divider,
  Select,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCheck, FaSave, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import MaskedInput from "react-text-mask";
import Link from "next/link";

export default function Sorteio() {
  const toast = useToast();

  const [numbers, setNumbers] = useState([]);
  const [mynumbers, setMynumbers] = useState([]);
  const [amount, setAmount] = useState(0);

  const [modalSend, setModalSent] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  useEffect(() => {
    generateNumbers();
  }, []);

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

  function showToast(message, status, title) {
    toast({
      title: title,
      description: message,
      status: status,
      position: "top-right",
    });
  }

  useEffect(() => {
    setAmount(mynumbers.length * 100);
  }, [mynumbers]);

  async function handleNumbers(num) {
    const find = await mynumbers.find((obj) => obj === num);
    if (find) {
      showToast("Este número já foi selecionado", "warning", "Atenção");
    } else {
      setMynumbers([...mynumbers, num]);
    }
  }

  function handleModal(mode) {
    if (mode === "login") {
      setModalSent(false);
      setModalLogin(true);
    } else {
      setModalSent(false);
      setModalRegister(true);
    }
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
              <HStack
                fontSize={["lg", "xl", "2xl", "2xl", "2xl"]}
                spacing="15px"
                mr={20}
              >
                <Text>R$</Text>
                <Text fontWeight="700">100</Text>
              </HStack>
              <HStack
                fontSize={["lg", "xl", "2xl", "2xl", "2xl"]}
                spacing="15px"
              >
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
                  onClick={() => handleNumbers(num.num)}
                >
                  {num.num}
                </Button>
              ))}
            </Grid>
          </Box>
          <Grid
            templateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
            ]}
            gap="15px"
            alignItems="center"
            mt={5}
          >
            <Stat color="white">
              <StatLabel>Total a Pagar</StatLabel>
              <StatNumber>
                {parseFloat(amount).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StatNumber>
            </Stat>
            <Flex justify="flex-end">
              <Button
                leftIcon={<FaCheck />}
                colorScheme="green"
                w={[
                  "100%",
                  "max-content",
                  "max-content",
                  "max-content",
                  "max-content",
                ]}
                size="lg"
                onClick={() => setModalSent(true)}
              >
                Finalizar Compra
              </Button>
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

      <Modal isOpen={modalSend} onClose={() => setModalSent(false)} size="lg">
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>Reserva de Número</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Por favor verifique se seus dados estão corretos!</Text>
            <FormControl mb={3}>
              <FormLabel>Nome Completo</FormLabel>
              <Input
                focusBorderColor="purple.400"
                placeholder="Nome Completo"
              />
            </FormControl>
            <FormControl mb={3}>
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
            <Checkbox defaultIsChecked colorScheme="purple" mt={3}>
              Reservando seu(s) número(s), você declara que leu e concorda com
              nossos{" "}
              <Link href="/" passHref>
                <a style={{ color: "blue", textDecoration: "underline" }}>
                  Termos de uso
                </a>
              </Link>
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Menu placement="top">
              <MenuButton
                as={Button}
                colorScheme="green"
                variant="outline"
                rightIcon={<MdKeyboardArrowUp />}
              >
                Opções
              </MenuButton>
              <MenuList shadow="lg" borderWidth="2px" borderColor="green.400">
                <MenuItem
                  _active={{ bg: "purple.100", color: "white" }}
                  _focus={{ bg: "transparent" }}
                  _hover={{ bg: "purple.100", color: "white" }}
                  onClick={() => handleModal("cadastro")}
                >
                  CADASTRE-SE
                </MenuItem>
                <MenuItem
                  _active={{ bg: "purple.100", color: "white" }}
                  _focus={{ bg: "transparent" }}
                  _hover={{ bg: "purple.100", color: "white" }}
                  onClick={() => handleModal("login")}
                >
                  FAÇA LOGIN
                </MenuItem>
              </MenuList>
            </Menu>

            <Button colorScheme="green" leftIcon={<FaCheck />} ml={3}>
              Concluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
    </>
  );
}
