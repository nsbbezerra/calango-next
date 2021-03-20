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
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../components/sliders";
import Link from "next/link";
import { FaImage, FaCalendarAlt, FaWhatsapp, FaSave } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import MaskedInput from "react-text-mask";

registerLocale("pt_br", pt_br);

export default function NovoSorteio() {
  const [startDate, setStartDate] = useState(new Date());

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
          <Grid templateColumns="1fr">
            <FormControl isRequired mt={4}>
              <FormLabel>Descrição do Sorteio</FormLabel>
              <Textarea focusBorderColor="purple.400" rows={5} resize="none" />
            </FormControl>
          </Grid>

          <Divider mt={5} mb={5} />

          <Button colorScheme="purple" size="lg" leftIcon={<FaSave />}>
            Salvar Sorteio
          </Button>
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
    </>
  );
}
