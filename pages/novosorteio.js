import { useMemo, useState } from "react";
import HeaderApp from "../components/header";
import FooterApp from "../components/footerTotal";
import { File, InputFile, InputFileFixed } from "../styles/uploader";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Grid,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Icon,
  Text,
  Select,
  IconButton,
  Tooltip,
  useToast,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../components/sliders";
import Link from "next/link";
import {
  FaImage,
  FaCalendarAlt,
  FaWhatsapp,
  FaSave,
  FaCheck,
  FaStop,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import MaskedInput from "react-text-mask";
import { AiOutlineWarning } from "react-icons/ai";
import Image from "next/image";

registerLocale("pt_br", pt_br);

export default function NovoSorteio() {
  const toast = useToast();

  const [startDate, setStartDate] = useState(new Date());
  const [modalConfirm, setModalConfirm] = useState(false);

  const [typeKeyPix, setTypeKeyPix] = useState("CPF");
  const [keyPix, setKeyPix] = useState("");

  const [bank, setBank] = useState("");
  const [ag, setAg] = useState("");
  const [tipoCc, setTipoCc] = useState("Conta Corrente");
  const [cc, setCc] = useState("");
  const [variation, setVariation] = useState("");
  const [operation, setOperation] = useState("");

  const [pix, setPix] = useState([]);
  const [transfer, setTransfer] = useState([]);

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input
        focusBorderColor="purple.400"
        defaultValue={value}
        onClick={onClick}
        w={["90vw", "30vw", "30vw", "21vw", "21vw"]}
      />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  function showToast(message, status, title) {
    toast({
      title: title,
      description: message,
      status: status,
      position: "top-right",
    });
  }

  async function handlePix() {
    const result = await pix.find((obj) => obj.pix === keyPix);
    if (result) {
      showToast("Chave pix já inserida", "warning", "Atenção");
      return false;
    } else {
      let info = { type: typeKeyPix, pix: keyPix };
      setPix([...pix, info]);
      setTypeKeyPix("CPF");
      setKeyPix("");
    }
  }

  async function removePix(id) {
    const result = await pix.filter((obj) => obj.pix !== id);
    setPix(result);
  }

  async function handleTransfer() {
    const result = await transfer.find((obj) => obj.cc === cc);
    if (result) {
      showToast("Conta já adicionada", "warning", "Atenção");
      return false;
    } else {
      let info = {
        bank: bank,
        ag: ag,
        cc: cc,
        type: tipoCc,
        op: operation,
        vr: variation,
      };
      setTransfer([...transfer, info]);
      setBank("");
      setAg("");
      setCc("");
      setTipoCc("Conta Corrente");
      setOperation("");
      setVariation("");
    }
  }

  async function removeTransfer(id) {
    const result = transfer.filter((obj) => obj.cc !== id);
    setTransfer(result);
  }

  return (
    <>
      <HeaderApp />
      <Container maxW="6xl" mt={10}>
        <Breadcrumb mb={10} fontSize={["xx-small", "md", "md", "md", "md"]}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <a>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link passHref href="/novosorteio">
              <a>
                <BreadcrumbLink>Criar Sorteio</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box
          borderWidth={["0px", "1px", "1px", "1px", "1px"]}
          rounded="lg"
          p={5}
        >
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "220px 1fr", "220px 1fr"]}
            gap="20px"
            justifyContent="center"
          >
            <FormControl isRequired>
              <FormLabel>Imagem do Sorteio</FormLabel>
              <InputFile lar={220} alt={220}>
                <File type="file" />
                <FaImage style={{ fontSize: 50, marginBottom: 20 }} />
                <p>Insira uma imagem 220px x 220px com no máximo 300kb</p>
              </InputFile>
            </FormControl>
            <Box>
              <Grid
                templateColumns={[
                  "1fr",
                  "3fr 1fr",
                  "3fr 1fr",
                  "3fr 1fr",
                  "3fr 1fr",
                ]}
                gap="20px"
              >
                <FormControl isRequired>
                  <FormLabel>Nome do Sorteio</FormLabel>
                  <Input
                    placeholder="Nome do Sorteio"
                    focusBorderColor="purple.400"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Qtd. de Números</FormLabel>
                  <NumberInput focusBorderColor="purple.400">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Grid>
              <Grid
                templateColumns={[
                  "1fr",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap="20px"
                mt={4}
              >
                <FormControl isRequired>
                  <FormLabel>Valor do Sorteio (R$)</FormLabel>
                  <NumberInput focusBorderColor="purple.400" step={0.01}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Data do Sorteio</FormLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<CustomInputPicker />}
                    locale="pt_br"
                    dateFormat="dd/MM/yyyy"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Hora do Sorteio</FormLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<CustomInputPicker />}
                    locale="pt_br"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Horário"
                    dateFormat="h:mm aa"
                  />
                </FormControl>
              </Grid>

              <Grid
                templateColumns={[
                  "1fr",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap="20px"
                mt={4}
              >
                <FormControl>
                  <FormLabel>Nome do Administrador</FormLabel>
                  <Input
                    placeholder="Nome do Sorteio"
                    focusBorderColor="purple.400"
                    isReadOnly
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Nome do Sorteio"
                    focusBorderColor="purple.400"
                    isReadOnly
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Telefone - Whatsapp</FormLabel>
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
                          isReadOnly
                        />
                      </InputGroup>
                    )}
                  />
                </FormControl>
              </Grid>
            </Box>
          </Grid>

          <FormControl isRequired mt={3}>
            <FormLabel>Dados para Pagamento:</FormLabel>
            <Grid
              templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
              gap="20px"
            >
              <Box borderWidth="1px" rounded="lg">
                <Box p={3}>
                  <Image
                    src="/img/pix.svg"
                    width={125}
                    height={15}
                    layout="responsive"
                  />
                </Box>
                <Divider />
                <Box p={3}>
                  <FormControl>
                    <FormLabel>Chave Pix:</FormLabel>
                    <Grid
                      templateColumns={[
                        "1fr ",
                        "1fr 50px",
                        "1fr 50px",
                        "1fr 50px",
                        "1fr 50px",
                      ]}
                      gap="15px"
                    >
                      <InputGroup>
                        <InputLeftElement w="6rem">
                          <Select
                            focusBorderColor="purple.400"
                            placeholder="Selecione"
                            variant="filled"
                            colorScheme="purple"
                            value={typeKeyPix}
                            onChange={(e) => setTypeKeyPix(e.target.value)}
                            size="sm"
                            mt={-2}
                          >
                            <option value="CPF">CPF</option>
                            <option value="CNPJ">CNPJ</option>
                            <option value="Email">Email</option>
                            <option value="Telefone">Telefone</option>
                            <option value="Aleatória">Aleatória</option>
                          </Select>
                        </InputLeftElement>
                        {typeKeyPix === "CPF" && (
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
                            value={keyPix}
                            onChange={(e) => setKeyPix(e.target.value)}
                            placeholder="CPF"
                            render={(ref, props) => (
                              <Input
                                ref={ref}
                                {...props}
                                focusBorderColor="purple.400"
                                pl="6.5rem"
                                size="sm"
                              />
                            )}
                          />
                        )}
                        {typeKeyPix === "CNPJ" && (
                          <MaskedInput
                            mask={[
                              /[0-9]/,
                              /\d/,
                              ".",
                              /\d/,
                              /\d/,
                              /\d/,
                              ".",
                              /\d/,
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              "-",
                              /\d/,
                              /\d/,
                            ]}
                            value={keyPix}
                            onChange={(e) => setKeyPix(e.target.value)}
                            placeholder="CNPJ"
                            render={(ref, props) => (
                              <Input
                                ref={ref}
                                {...props}
                                focusBorderColor="purple.400"
                                pl="6.5rem"
                                size="sm"
                              />
                            )}
                          />
                        )}
                        {typeKeyPix === "Email" && (
                          <Input
                            placeholder="Email"
                            pl="6.5rem"
                            focusBorderColor="purple.400"
                            value={keyPix}
                            onChange={(e) => setKeyPix(e.target.value)}
                            size="sm"
                          />
                        )}
                        {typeKeyPix === "Telefone" && (
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
                            value={keyPix}
                            onChange={(e) => setKeyPix(e.target.value)}
                            placeholder="Telefone"
                            id="contact"
                            render={(ref, props) => (
                              <Input
                                placeholder="Telefone"
                                ref={ref}
                                {...props}
                                focusBorderColor="purple.400"
                                pl="6.5rem"
                                size="sm"
                              />
                            )}
                          />
                        )}
                        {typeKeyPix === "Aleatória" && (
                          <Input
                            placeholder="Chave Aleatória"
                            pl="6.5rem"
                            focusBorderColor="purple.400"
                            value={keyPix}
                            onChange={(e) => setKeyPix(e.target.value)}
                            size="sm"
                          />
                        )}
                      </InputGroup>
                      <Tooltip label="Adicionar Chave Pix" hasArrow>
                        <IconButton
                          icon={<FaPlus />}
                          colorScheme="purple"
                          onClick={() => handlePix()}
                          size="sm"
                        />
                      </Tooltip>
                    </Grid>
                  </FormControl>
                  {pix.length > 0 && (
                    <>
                      <Divider mt={3} mb={3} />
                      {pix.map((pi) => (
                        <HStack key={pi.pix} spacing="10px">
                          <Text>
                            {pi.type}: <strong>{pi.pix}</strong>
                          </Text>
                          <Tooltip label="Excluir Chave" hasArrow>
                            <IconButton
                              icon={<FaTrash />}
                              colorScheme="red"
                              size="xs"
                              variant="link"
                              onClick={() => removePix(pi.pix)}
                            />
                          </Tooltip>
                        </HStack>
                      ))}
                    </>
                  )}
                </Box>
              </Box>
              <Box borderWidth="1px" rounded="lg">
                <Box p={3}>
                  <Image
                    src="/img/transferencia.svg"
                    width={125}
                    height={15}
                    layout="responsive"
                  />
                </Box>
                <Divider />
                <Box p={3}>
                  <Grid templateColumns="1fr 1fr" gap="15px">
                    <FormControl>
                      <FormLabel>Banco:</FormLabel>
                      <Input
                        size="sm"
                        placeholder="Banco"
                        focusBorderColor="purple.400"
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Agencia:</FormLabel>
                      <Input
                        size="sm"
                        placeholder="Agencia"
                        focusBorderColor="purple.400"
                        value={ag}
                        onChange={(e) => setAg(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    mt={3}
                    templateColumns={[
                      "repeat(2, 1fr)",
                      "repeat(4, 1fr)",
                      "repeat(4, 1fr)",
                      "repeat(4, 1fr)",
                      "repeat(4, 1fr)",
                    ]}
                    gap="15px"
                  >
                    <FormControl>
                      <FormLabel>Tipo:</FormLabel>
                      <Select
                        focusBorderColor="purple.400"
                        value={tipoCc}
                        onChange={(e) => setTipoCc(e.target.value)}
                        size="sm"
                      >
                        <option value="Conta Corrente">Conta Corrente</option>
                        <option value="Poupança">Poupança</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        {tipoCc === "Conta Corrente" ? "CC" : "PP"}:
                      </FormLabel>
                      <Input
                        size="sm"
                        placeholder={tipoCc === "Conta Corrente" ? "CC" : "PP"}
                        focusBorderColor="purple.400"
                        value={cc}
                        onChange={(e) => setCc(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Variação:</FormLabel>
                      <Input
                        size="sm"
                        placeholder="Variação"
                        focusBorderColor="purple.400"
                        value={variation}
                        onChange={(e) => setVariation(e.target.value)}
                        isDisabled={tipoCc === "Conta Corrente" ? true : false}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Operação:</FormLabel>
                      <Input
                        size="sm"
                        placeholder="Operação"
                        focusBorderColor="purple.400"
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Button
                    leftIcon={<FaPlus />}
                    colorScheme="purple"
                    size="sm"
                    isFullWidth
                    mt={2}
                    onClick={() => handleTransfer()}
                  >
                    Adicionar
                  </Button>
                  {transfer.length > 0 && (
                    <>
                      <Divider mt={3} mb={3} />
                      <Grid
                        templateColumns="repeat(auto-fit, minmax(240px, 240px))"
                        gap="10px"
                        justifyContent="center"
                      >
                        {transfer.map((tr) => (
                          <Box
                            borderWidth="1px"
                            rounded="lg"
                            key={tr.cc}
                            fontSize="sm"
                            p={2}
                          >
                            <Tooltip label="Excluir Conta" hasArrow>
                              <IconButton
                                icon={<FaTrash />}
                                colorScheme="red"
                                size="xs"
                                variant="link"
                                onClick={() => removeTransfer(tr.cc)}
                                position="absolute"
                                ml={"200px"}
                              />
                            </Tooltip>
                            <Text>
                              Banco: <strong>{tr.bank}</strong>
                            </Text>
                            <Text>
                              Agencia: <strong>{tr.ag}</strong>
                            </Text>
                            <Text>
                              {tr.cc === "Poupança"
                                ? "Poupança"
                                : "Conta Corrente"}{" "}
                              <strong>{tr.cc}</strong>
                            </Text>
                            {tr.op !== "" && (
                              <Text>
                                Operação: <strong>{tr.op}</strong>
                              </Text>
                            )}
                            {tr.vr !== "" && (
                              <Text>
                                Variação: <strong>{tr.vr}</strong>
                              </Text>
                            )}
                          </Box>
                        ))}
                      </Grid>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
          </FormControl>
          <Grid templateColumns="1fr">
            <FormControl isRequired mt={4}>
              <FormLabel>Descrição do Sorteio</FormLabel>
              <Textarea focusBorderColor="purple.400" rows={5} resize="none" />
            </FormControl>
          </Grid>

          <Divider mt={5} mb={5} />

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
          >
            <Stat>
              <StatLabel>Total a Pagar</StatLabel>
              <StatNumber>
                {parseFloat(30).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StatNumber>
            </Stat>
            <Flex justify="flex-end">
              <Button
                colorScheme="purple"
                w={[
                  "100%",
                  "max-content",
                  "max-content",
                  "max-content",
                  "max-content",
                ]}
                size="lg"
                leftIcon={<FaSave />}
                onClick={() => setModalConfirm(true)}
              >
                Salvar Sorteio
              </Button>
            </Flex>
          </Grid>
        </Box>

        <Box borderWidth="1px" rounded="lg" p={5} mt={10}>
          <FormControl>
            <FormLabel>
              Banner (Opcional) - Faça o cadastro acima para liberar o banner
            </FormLabel>
            <InputFileFixed disabled={true}>
              <File type="file" disabled={true} />
              <FaImage style={{ fontSize: 50, marginBottom: 20 }} />
              <p>Insira uma imagem 4267px x 784px com no máximo 500kb</p>
            </InputFileFixed>
          </FormControl>
          <Divider mt={5} mb={5} />

          <Button
            colorScheme="purple"
            size="lg"
            leftIcon={<FaSave />}
            isDisabled={true}
          >
            Salvar Banner
          </Button>
        </Box>
      </Container>
      <FooterApp />

      <Modal
        isOpen={modalConfirm}
        onClose={() => setModalConfirm(false)}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={AiOutlineWarning} />
              <Text ml={3}>Leia com Atenção</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Verifique se as informações estão corretas, os dados para
              pagamento e seu número de Whatsapp, após finalizar entre em
              contato com o administrador do PMW Rifas através do Whatsapp:{" "}
              {
                <Button
                  size="xs"
                  colorScheme="whatsapp"
                  leftIcon={<FaWhatsapp />}
                >
                  (63) 99999-9999
                </Button>
              }{" "}
              para confirmar o pagamento e liberar o seu sorteio. Está tudo
              correto? Deseja proseguir?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" leftIcon={<FaStop />} variant="outline">
              Não
            </Button>
            <Button colorScheme="green" leftIcon={<FaCheck />} ml={3}>
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
