import { Box } from "@chakra-ui/react";

export default function FooterApp() {
  return (
    <>
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
