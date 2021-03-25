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
  Center,
} from "@chakra-ui/react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../../components/sliders";
import Image from "next/image";
import { FaCheck, FaSave, FaWhatsapp } from "react-icons/fa";
import { AiFillBank, AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import MaskedInput from "react-text-mask";
import Link from "next/link";
import { useRouter } from "next/router";
import configGloba from "../../configs/index";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";
import { useClient } from "../../context/Clients";

export default function Sorteio({ raffles, numeros, url }) {
  const { query, isFallback, back } = useRouter();
  const toast = useToast();
  const { client } = useClient();

  const [numbers, setNumbers] = useState([]);
  const [mynumbers, setMynumbers] = useState([]);
  const [amount, setAmount] = useState(0);

  const [modalSend, setModalSent] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalPayment, setModalPayment] = useState(false);

  const [raffle, setRaffle] = useState({});
  const [nums, setNums] = useState([]); //Para compara os números, Livres, Reservados e Pagos
  const [percent, setPercent] = useState(0);

  const [free, setFree] = useState(0);
  const [reserved, setReserved] = useState(0);
  const [paid_out, setPaid_out] = useState(0);
  const [ownNumbers, setOwnNumbers] = useState(0);

  const [concordo, setConcordo] = useState(0);

  useEffect(() => {
    if (raffles) {
      findActRaffle(query.sorteio);
      if (numeros !== null) {
        findPercent();
      }
    }
  }, [raffles]);

  async function findActRaffle(id) {
    const result = await raffles.find((obj) => obj.identify === id);
    setRaffle(result);
    setFree(parseInt(result.qtd_numbers));
  }

  useEffect(() => {
    if (!numeros) {
      setNums([]);
    } else {
      setNums(numeros);
      findNumbersInfo();
    }
  }, [numeros]);

  async function findNumbersInfo() {}

  async function findPercent() {
    if (numeros !== null) {
      if (numeros.length === 0) {
        setPercent(0);
      } else {
        if (JSON.stringify(raffle) === "{}") {
          setPercent(0);
        } else {
          const result = numeros.filter((obj) => obj.raffle_id === raffle.id);
          const findActive = result.filter((obj) => obj.status === "paid_out");
          let numSales = findActive.length;

          let soma = (parseInt(numSales) * 100) / parseInt(raffle.qtd_numbers);
          setPercent(soma);
        }
      }
    } else {
      setPercent(0);
    }
  }

  useEffect(() => {
    if (JSON.stringify(raffle) !== "{}") {
      generateNumbers();
    }
  }, [raffle]);

  function generateNumbers() {
    if (JSON.stringify(raffle) !== "{}") {
      let number = [];
      for (let index = 0; index < parseInt(raffle.qtd_numbers); index++) {
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
    if (mynumbers.length > 0) {
      setAmount(mynumbers.length * parseFloat(raffle.raffle_value));
    }
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

  function handlePayment() {
    setModalSent(false);
    setModalPayment(true);
  }

  function capitalizeAllFirstLetter(string) {
    let toLower = string.toLowerCase();
    let splited = toLower.split(" ");
    let toJoin = splited.map((e) => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    });
    let joined = toJoin.join(" ");
    return joined;
  }

  return (
    <>
      <HeaderApp />
      <Container maxW="6xl" mt={10}>
        {JSON.stringify(raffle) === "{}" ? (
          <Center>
            <Heading fontSize="2xl">Nenhuma informação para mostrar</Heading>
          </Center>
        ) : (
          <>
            <Breadcrumb mb={10} fontSize={["xx-small", "md", "md", "md", "md"]}>
              <BreadcrumbItem>
                <Link href="/" passHref>
                  <a>
                    <BreadcrumbLink>Início</BreadcrumbLink>
                  </a>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link passHref href="/sorteios">
                  <a>
                    <BreadcrumbLink>Sorteios</BreadcrumbLink>
                  </a>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link passHref href={`/sorteio/${raffle.identify}`}>
                  <a>
                    <BreadcrumbLink>
                      {capitalizeAllFirstLetter(raffle.name)}
                    </BreadcrumbLink>
                  </a>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <Grid
              templateColumns={[
                "1fr",
                "1fr",
                "220px 1fr",
                "220px 1fr",
                "220px 1fr",
              ]}
              gap="40px"
              justifyItems="center"
              alignItems="center"
            >
              <Box w="220px" h="220px" overflow="hidden" rounded="lg">
                <Image
                  src={`${url}/${raffle.thumbnail}`}
                  width={260}
                  height={260}
                  layout="responsive"
                  objectFit="cover"
                  alt="PMW Rifas, rifas online"
                />
              </Box>
              <Box minW="100%">
                <Heading fontSize="3xl">{raffle.name}</Heading>
                <Slider aria-label="slider-ex-4" value={percent}>
                  <SliderTrack bg="purple.100">
                    <SliderFilledTrack bg="purple.400" />
                  </SliderTrack>
                  <SliderThumb
                    boxSize={8}
                    borderWidth="1px"
                    borderColor="purple.100"
                    _focus={{ outline: "none" }}
                  >
                    <Text fontSize="x-small">{percent}%</Text>
                  </SliderThumb>
                </Slider>
                <Flex
                  direction={["column", "column", "column", "row", "row"]}
                  justifyContent="space-between"
                >
                  <HStack
                    fontSize={["lg", "xl", "2xl", "2xl", "2xl"]}
                    spacing="15px"
                  >
                    <Text>R$</Text>
                    <Text fontWeight="700">
                      {parseFloat(raffle.raffle_value).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </Text>
                  </HStack>
                  <HStack
                    fontSize={["lg", "xl", "2xl", "2xl", "2xl"]}
                    spacing="15px"
                  >
                    <Text>Data do Sorteio</Text>
                    <Text fontWeight="700">
                      {format(
                        new Date(raffle.draw_date),
                        "dd 'de' MMMM', às ' HH:mm'h'",
                        { locale: pt_br }
                      )}
                    </Text>
                  </HStack>
                </Flex>
                <Box borderWidth="1px" mt={3} rounded="lg" p={4}>
                  {raffle.description}
                </Box>
              </Box>
            </Grid>
          </>
        )}
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
              Livres ({free})
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
              Reservado ({reserved})
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
              Pago ({paid_out})
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
              Meus Números ({ownNumbers})
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
                      ? "purple.200"
                      : "black"
                  }
                  _focus={{
                    outline: "none",
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "purple.200"
                      : "gray.800",
                  }}
                  _active={{
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "purple.200"
                      : "gray.800",
                  }}
                  _hover={{
                    bg: mynumbers.find((obj) => obj === num.num)
                      ? "purple.200"
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

      <Modal isOpen={modalSend} onClose={() => setModalSent(false)} size="lg">
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>Reserva de Número</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Por favor verifique se seus dados estão corretos!</Text>
            <FormControl mb={3} mt={3}>
              <FormLabel>Nome Completo</FormLabel>
              <Input
                focusBorderColor="purple.400"
                placeholder="Nome Completo"
                value={client.name}
                isReadOnly
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="purple.400"
                placeholder="Email"
                isReadOnly
                value={client.email}
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
                value={client.cpf}
                placeholder="CPF"
                render={(ref, props) => (
                  <Input
                    ref={ref}
                    {...props}
                    focusBorderColor="purple.400"
                    isReadOnly
                  />
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
                value={client.phone}
                render={(ref, props) => (
                  <InputGroup>
                    <InputLeftElement children={<FaWhatsapp />} />
                    <Input
                      placeholder="Telefone"
                      ref={ref}
                      {...props}
                      focusBorderColor="purple.400"
                      isReadOnly
                    />
                  </InputGroup>
                )}
              />
            </FormControl>
            <Checkbox
              defaultIsChecked
              colorScheme="purple"
              mt={3}
              isChecked={concordo}
              onChange={(e) => setConcordo(e.target.checked)}
            >
              Reservando seu(s) número(s), você declara que leu e concorda com
              nossos{" "}
              <Link href="/condicoesdeuso" passHref>
                <a
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Termos de uso
                </a>
              </Link>
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              leftIcon={<FaCheck />}
              ml={3}
              onClick={() => handlePayment()}
              isDisabled={!concordo}
            >
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

      <Modal
        isOpen={modalPayment}
        onClose={() => setModalPayment(false)}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={AiFillBank} />
              <Text ml={3}>Forma de Pagamento</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <Grid
              templateColumns={[
                "1fr",
                "1fr 1fr",
                "1fr 1fr",
                "1fr 1fr",
                "1fr 1fr",
              ]}
              gap="15px"
            >
              <Box borderWidth="1px" rounded="lg">
                <Box p={3}>
                  <Image
                    src="/img/pix.svg"
                    width={150}
                    height={30}
                    layout="responsive"
                  />
                </Box>
                <Divider />
                <Box p={3}>
                  <Text>Chave:</Text>
                  <Text mt={2}>
                    CPF <strong>000.000.000-00</strong>
                  </Text>
                </Box>
              </Box>
              <Box borderWidth="1px" rounded="lg">
                <Box p={3}>
                  <Image
                    src="/img/transferencia.svg"
                    width={150}
                    height={30}
                    layout="responsive"
                  />
                </Box>
                <Divider />
                <Box p={3}>
                  <Text>
                    Agencia: <strong>0000-00</strong>
                  </Text>
                  <Text>
                    Conta Corrente: <strong>0000-00</strong>
                  </Text>
                  <Text>
                    Operação: <strong>0000-00</strong>
                  </Text>
                  <Text>
                    Variação: <strong>0000-00</strong>
                  </Text>
                </Box>
              </Box>
            </Grid>
            <Text mt={3}>
              Escolha uma das opções de pagamento acima depois entre em contato
              com o administrador da rifa para confirmar o pagamento, use este
              número:{" "}
            </Text>
            <Button colorScheme="green" leftIcon={<FaWhatsapp />} mt={3}>
              (63) 99999-9999
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`${configGloba.url}/findRaffle`);
  const data = await response.json();
  const paths = await data.map((raf) => {
    return { params: { sorteio: raf.identify } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const response = await fetch(`${configGloba.url}/raffles`);
  const data = await response.json();
  let raffles = !data.raffles ? null : data.raffles;
  let numbers = !data.numbers ? null : data.numbers;
  let url = !data.url ? null : data.url;
  return {
    props: {
      raffles,
      numeros: numbers,
      url,
    },
    revalidate: 30,
  };
};
