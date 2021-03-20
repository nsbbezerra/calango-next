import HeaderApp from "../components/header";
import FooterApp from "../components/footerTotal";
import {
  Box,
  Container,
  Grid,
  Divider,
  Button,
  Flex,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
} from "../components/sliders";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import Dados from "../components/dados";
import Admin from "../components/admin";
import Client from "../components/client";
import { useState } from "react";

export default function MeusDados() {
  const [page, setPage] = useState("data");
  return (
    <>
      <HeaderApp />
      <Container maxW="7xl" mt={10}>
        <Breadcrumb fontSize={["xx-small", "md", "md", "md", "md"]} mb={10}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <a>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link passHref href="/meusdados">
              <a>
                <BreadcrumbLink>Meus Dados</BreadcrumbLink>
              </a>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid
          templateColumns={[
            "1fr",
            "1fr",
            "250px 1fr",
            "250px 1fr",
            "250px 1fr",
          ]}
          gap="40px"
        >
          <Box borderWidth="1px" rounded="lg" h="min-content">
            <Flex p={3} align="center">
              <Icon as={FaBars} />
              <Heading fontSize="lg" ml={3}>
                Menu
              </Heading>
            </Flex>
            <Divider />

            <Flex direction="column" p={3}>
              <Button
                colorScheme="purple"
                variant="outline"
                mb={5}
                onClick={() => setPage("data")}
              >
                Meus Dados
              </Button>
              <Text fontSize="sm" mb={2}>
                Meus Sorteios:
              </Text>
              <Button
                colorScheme="purple"
                variant="outline"
                mb={3}
                onClick={() => setPage("admin")}
              >
                Como Administrador
              </Button>
              <Button
                colorScheme="purple"
                variant="outline"
                onClick={() => setPage("client")}
              >
                Como Participante
              </Button>
            </Flex>
          </Box>
          <Box borderWidth="1px" rounded="lg" p={5}>
            {page === "data" && <Dados />}
            {page === "admin" && <Admin />}
            {page === "client" && <Client />}
          </Box>
        </Grid>
      </Container>
      <FooterApp />
    </>
  );
}
