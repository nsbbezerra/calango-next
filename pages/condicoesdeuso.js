import { Container, Box, Text, Heading } from "@chakra-ui/layout";
import HeaderApp from "../components/header";
import FooterApp from "../components/footerTotal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../components/sliders";
import Link from "next/link";

export default function TermosdeUso() {
  return (
    <>
      <HeaderApp />

      <Container maxW="5xl" mt={10}>
        <Breadcrumb mb={10} fontSize={["xx-small", "md", "md", "md", "md"]}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <a>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link passHref href="/condicoesdeuso">
              <a>
                <BreadcrumbLink>Condições de Uso</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
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

      <FooterApp />
    </>
  );
}
