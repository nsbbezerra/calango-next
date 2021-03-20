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
  Textarea,
  InputGroup,
  Input,
  InputRightElement,
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
} from "react-icons/fa";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "./sliders";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";

registerLocale("pt_br", pt_br);

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

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
                Alterar Data e Hora
              </MenuItem>
              <MenuItem
                _active={{ bg: "purple.100", color: "white" }}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "purple.100", color: "white" }}
                onClick={() => setModalCancel(true)}
              >
                Cancelar Sorteio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Grid>

      <Modal
        isOpen={modalCancel}
        onClose={() => setModalCancel(false)}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={FaTrash} />
              <Text ml={3}>Cancelar Sorteio</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Justificativa</FormLabel>
              <Textarea focusBorderColor="purple.400" rows={6} resize="none" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" leftIcon={<FaTrash />}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)} size="xs">
        <ModalOverlay />
        <ModalContent borderWidth="3px" borderColor="green.400">
          <ModalHeader>
            <Flex align="center">
              <Icon as={FaCalendarAlt} />
              <Text ml={3}>Alterar Data e Hora</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel>Data do Sorteio</FormLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInputPicker />}
                locale="pt_br"
                dateFormat="dd/MM/yyyy"
              />
            </FormControl>

            <FormControl>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" leftIcon={<FaExchangeAlt />}>
              Alterar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
