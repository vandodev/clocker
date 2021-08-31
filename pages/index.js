import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import { Logo } from "../components";

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />

      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input size="lg" type="email" />
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input size="lg" type="password" />
        </FormControl>

        <Box display="Flex" flexDirection="row" alignItems="center">
          <Text>Cloker.work</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="username" />
          </FormControl>
        </Box>

        <Box p={4}>
          <Button colorScheme="blue" width="100%">
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
