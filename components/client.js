import {
  Box,
  Grid,
  Flex,
  Text,
  Button,
  Divider,
  Heading,
  Icon,
  LinkBox,
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
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import {
  FaWhatsapp,
  FaUserAlt,
  FaArrowUp,
  FaTrash,
  FaCalendarAlt,
  FaExchangeAlt,
  FaIdCard,
} from "react-icons/fa";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "./sliders";
import MaskedInput from "react-text-mask";
import { ImListNumbered } from "react-icons/im";

export default function Admin() {
  const [modalCancel, setModalCancel] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const CustomInputPicker = ({ value, onClick }) => (
    <InputGroup>
      <Input
        focusBorderColor="purple.400"
        defaultValue={value}
        onClick={onClick}
        w="265px"
      />
      <InputRightElement pointerEvents="none" children={<FaCalendarAlt />} />
    </InputGroup>
  );

  return (
    <>
      <Grid
        templateColumns="repeat(auto-fit, minmax(220px, 220px))"
        gap="30px"
        justifyContent="center"
      >
        <Box w="220px">
          <LinkBox
            rounded="lg"
            overflow="hidden"
            w="220px"
            bg="white"
            shadow="lg"
            borderWidth="1px"
          >
            <Flex
              bg="blackAlpha.700"
              position="absolute"
              w="220px"
              h="100%"
              zIndex={1000}
              justify="center"
              align="center"
            >
              <Box
                w="100%"
                bg="red.600"
                p={3}
                textAlign="center"
                fontWeight="700"
                color="white"
              >
                <Text>CANCELADA</Text>
                <Text fontSize="xs">Contate o Administrador:</Text>
                <Button
                  colorScheme="whatsapp"
                  leftIcon={<FaWhatsapp />}
                  isFullWidth
                  size="sm"
                >
                  (63) 99999-9999
                </Button>
              </Box>
            </Flex>
            <Box w="220px" h="220px">
              <Image
                src="https://image.freepik.com/vetores-gratis/composicao-de-loteria-isometrica-com-dinheiro-vencedor-moedas-carro-jackpot-inscricao-rifa-instantanea-tambor-tv-bolas-loto-isoladas_1284-39090.jpg"
                width={260}
                height={260}
                layout="responsive"
                objectFit="cover"
                alt="PMW Rifas, rifas online"
              />
            </Box>
            <Slider aria-label="slider-ex-4" defaultValue={30} mt={-8}>
              <SliderTrack bg="purple.100">
                <SliderFilledTrack bg="purple.400" />
              </SliderTrack>
              <SliderThumb
                boxSize={8}
                borderWidth="1px"
                borderColor="purple.100"
                _focus={{ outline: "none" }}
              >
                <Text fontSize="x-small">30%</Text>
              </SliderThumb>
            </Slider>
            <Box p={2} mt={-3} w="260px">
              <Heading
                color="purple.400"
                fontSize="md"
                isTruncated
                noOfLines={1}
                w="200px"
              >
                Título da Rifa Título da Rifa Título da Rifa
              </Heading>

              <Text fontSize="xs" mt={2}>
                Sorteio dia <strong>10/10/1010</strong> as{" "}
                <strong>19:00</strong>
              </Text>
              <Flex align="center" mt={1}>
                <Text fontWeight="300" mr={2}>
                  R$
                </Text>
                <Text fontWeight="800">1000</Text>
              </Flex>
              <Divider mt={1} mb={1} />
              <Flex align="center" fontSize="xs">
                <Icon as={FaUserAlt} mr={2} />
                <Text w="180px" isTruncated noOfLines={1}>
                  Nome do usuário
                </Text>
              </Flex>
            </Box>
          </LinkBox>
          <Menu placement="top">
            <MenuButton
              as={Button}
              rightIcon={<FaArrowUp />}
              colorScheme="purple"
              isFullWidth
              mt={2}
            >
              Opções
            </MenuButton>
            <MenuList
              zIndex={2000}
              shadow="lg"
              borderWidth="2px"
              borderColor="green.400"
            >
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalEdit(true)}
              >
                Ver Meus Números
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Dados do Administrador
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Grid>

      <Modal
        isOpen={modalCancel}
        onClose={() => setModalCancel(false)}
        size="3xl"
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={FaIdCard} />
              <Text ml={3}>Dados do Administrador</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <Grid templateColumns="1fr" gap="15px">
              <FormControl>
                <FormLabel>Nome Completo</FormLabel>
                <Input focusBorderColor="purple.400" isReadOnly />
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
            <Grid templateColumns="1fr" mt={3}>
              <FormControl mb={3}>
                <FormLabel>Email</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  placeholder="Email"
                  isReadOnly
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
                <Input focusBorderColor="purple.400" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Número</FormLabel>
                <Input focusBorderColor="purple.400" isReadOnly />
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
                <Input focusBorderColor="purple.400" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Bairro / Distrito</FormLabel>
                <Input focusBorderColor="purple.400" isReadOnly />
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
                      isReadOnly
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input focusBorderColor="purple.400" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>UF</FormLabel>
                <Select
                  placeholder="Selecione"
                  variant="outline"
                  focusBorderColor={"purple.400"}
                  id="state"
                  isReadOnly
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
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalEdit}
        onClose={() => setModalEdit(false)}
        size="xl"
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={ImListNumbered} />
              <Text ml={3}>Meus Números</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <HStack spacing="10px">
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
                Reservado
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
                Pago
              </Box>
            </HStack>
            <Box mt={5} p={3} borderWidth="1px" rounded="lg">
              <Grid
                templateColumns="repeat(auto-fit, minmax(100px, 100px))"
                gap="20px"
                justifyContent="center"
              >
                <Flex
                  align="center"
                  justify="center"
                  rounded="lg"
                  bg="orange.400"
                  h="50px"
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                >
                  200
                </Flex>
                <Flex
                  align="center"
                  justify="center"
                  rounded="lg"
                  bg="orange.400"
                  h="50px"
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                >
                  200
                </Flex>
                <Flex
                  align="center"
                  justify="center"
                  rounded="lg"
                  bg="orange.400"
                  h="50px"
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                >
                  290
                </Flex>
                <Flex
                  align="center"
                  justify="center"
                  rounded="lg"
                  bg="green.400"
                  h="50px"
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                >
                  500
                </Flex>
              </Grid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
