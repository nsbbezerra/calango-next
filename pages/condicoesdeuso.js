import { Container, Box, Grid, Text, Flex, Heading } from "@chakra-ui/layout";
import HeaderApp from "../components/header";
import Image from "next/image";

export default function TermosdeUso() {
  return (
    <>
      <HeaderApp />

      <Container maxW="5xl" mt={10}>
        <Box
          bg="purple.400"
          p={7}
          textAlign="center"
          color="white"
          rounded="lg"
        >
          <Heading>Condições de Uso</Heading>
          <Text>
            Antes de utilizar a PMW Rifas, leia atentamente o Termo de Uso
          </Text>
        </Box>

        <Box p={3}>
          <Heading fontSize="2xl" color="purple.400" mb={3} mt={10}>
            1. SOBRE ESTE TERMO DE USO
          </Heading>
          <Text textAlign="justify" mb={2}>
            1.1 Este Termo de Uso é um contrato aceito por você quando fizer uso
            da plataforma PMW Rifas, independentemente de qualquer outra forma
            de aceitação.
          </Text>
          <Text textAlign="justify" mb={2}>
            1.2 No uso da plataforma PMW Rifas, Você deve obedecer a legislação
            vigente e este Termo de Uso.
          </Text>
          <Text textAlign="justify" mb={2}>
            1.3 Você é integralmente responsável por todos seus atos praticados
            no uso da plataforma PMW Rifas. Da mesma forma, você também é
            responsável pela veracidade das informações fornecidas.
          </Text>

          <Text textAlign="justify" mb={2}>
            1.4 A PMW Rifas se reserva o direito de recusar, bloquear,
            inabilitar ou excluir, a seu exclusivo critério, usuários que
            descumpram qualquer uma das disposições presentes neste Termo de
            Uso.
          </Text>

          <Text textAlign="justify" mb={2}>
            1.5 Se você tiver dúvidas a respeito de qualquer previsão neste
            Termo de Uso, entre em contato com nossa equipe por meio do email
            sua@rifatech.com.
          </Text>

          <Heading fontSize="2xl" color="purple.400" mb={3} mt={10}>
            2. SOBRE O SERVIÇO
          </Heading>

          <Text textAlign="justify" mb={2}>
            1.1 Este Termo de Uso é um contrato aceito por você quando fizer uso
            da plataforma PMW Rifas, independentemente de qualquer outra forma
            de aceitação.
          </Text>
          <Text textAlign="justify" mb={2}>
            1.2 No uso da plataforma PMW Rifas, Você deve obedecer a legislação
            vigente e este Termo de Uso.
          </Text>
          <Text textAlign="justify" mb={2}>
            1.3 Você é integralmente responsável por todos seus atos praticados
            no uso da plataforma PMW Rifas. Da mesma forma, você também é
            responsável pela veracidade das informações fornecidas.
          </Text>

          <Text textAlign="justify" mb={2}>
            1.4 A PMW Rifas se reserva o direito de recusar, bloquear,
            inabilitar ou excluir, a seu exclusivo critério, usuários que
            descumpram qualquer uma das disposições presentes neste Termo de
            Uso.
          </Text>

          <Text textAlign="justify" mb={2}>
            1.5 Se você tiver dúvidas a respeito de qualquer previsão neste
            Termo de Uso, entre em contato com nossa equipe por meio do email
            sua@rifatech.com.
          </Text>
        </Box>
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
    </>
  );
}
