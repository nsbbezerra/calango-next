import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaWhatsapp, FaSave } from "react-icons/fa";
import MaskedInput from "react-text-mask";

export default function Dados() {
  return (
    <>
      <Grid templateColumns="1fr" gap="15px">
        <FormControl>
          <FormLabel>Nome Completo</FormLabel>
          <Input focusBorderColor="purple.400" />
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
              <Input ref={ref} {...props} focusBorderColor="purple.400" />
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
                />
              </InputGroup>
            )}
          />
        </FormControl>
      </Grid>
      <Grid templateColumns="1fr" mt={3}>
        <FormControl mb={3}>
          <FormLabel>Email</FormLabel>
          <Input focusBorderColor="purple.400" placeholder="Email" />
        </FormControl>
      </Grid>
      <Divider mt={7} mb={4} />
      <Grid
        templateColumns={["1fr", "3fr 1fr", "3fr 1fr", "3fr 1fr", "3fr 1fr"]}
        gap="15px"
      >
        <FormControl>
          <FormLabel>Logradouro - Rua, Avenida, Alameda, etc...</FormLabel>
          <Input focusBorderColor="purple.400" />
        </FormControl>
        <FormControl>
          <FormLabel>Número</FormLabel>
          <Input focusBorderColor="purple.400" />
        </FormControl>
      </Grid>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
        mt={3}
        gap="15px"
      >
        <FormControl>
          <FormLabel>Ponto de Referência</FormLabel>
          <Input focusBorderColor="purple.400" />
        </FormControl>
        <FormControl>
          <FormLabel>Bairro / Distrito</FormLabel>
          <Input focusBorderColor="purple.400" />
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
            mask={[/[0-9]/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            placeholder="CEP"
            render={(ref, props) => (
              <Input ref={ref} {...props} focusBorderColor={"purple.400"} />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input focusBorderColor="purple.400" />
        </FormControl>
        <FormControl>
          <FormLabel>UF</FormLabel>
          <Select
            placeholder="Selecione"
            variant="outline"
            focusBorderColor={"purple.400"}
            id="state"
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

      <Divider mt={5} mb={5} />

      <Button size="lg" colorScheme="purple" leftIcon={<FaSave />}>
        Salvar Alterações
      </Button>
    </>
  );
}
