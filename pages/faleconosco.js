import {
  Container,
  Heading,
  Box,
  Text,
  Flex,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import HeaderApp from "../components/header";
import Image from "next/image";
import Link from "next/link";
import FooterApp from "../components/footerTotal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../components/sliders";

export default function FaleConosco() {
  return (
    <>
      <HeaderApp />
      <Container maxW="7xl" mt={10}>
        <Breadcrumb mb={10} fontSize={["xx-small", "md", "md", "md", "md"]}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <a>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link passHref href="/faleconosco">
              <a>
                <BreadcrumbLink>Fale Conosco</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Center>
          <Heading fontSize={["3xl", "5xl", "5xl", "5xl", "5xl"]}>
            Tá com duvidas?
          </Heading>
        </Center>
        <Center>
          <Heading fontSize={["3xl", "5xl", "5xl", "5xl", "5xl"]}>
            Entre em contato.
          </Heading>
        </Center>
        <Center mt={5} mb={5}>
          <Text
            fontSize={["lg", "2xl", "2xl", "2xl", "2xl"]}
            textAlign="center"
          >
            Clique no botão e fale pelo whatsapp.
          </Text>
        </Center>
        <Flex justify="center" align="center">
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>
                <Box w="200px" h="200px">
                  <Image
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    src="/img/whatsapp.svg"
                  />
                </Box>
              </LinkOverlay>
            </Link>
          </LinkBox>
        </Flex>
      </Container>

      <FooterApp />
    </>
  );
}
