import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import HeaderApp from "../components/header";
import Image from "next/image";

import FooterApp from "../components/footer";

export default function Home() {
  return (
    <>
      <HeaderApp />
      <Container maxW="6xl" mt={10}>
        <Box rounded="lg" overflow="hidden">
          <Image
            src="/img/banner.png"
            width={4267}
            height={784}
            layout="responsive"
            quality={100}
          />
        </Box>
      </Container>

      <FooterApp />
    </>
  );
}
