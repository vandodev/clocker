import { Container, Button } from "@chakra-ui/react";
import { useAuth } from "../Auth";

export const Agenda = () => {
  const [, { logout }] = useAuth();
  return (
    <Container>
      <Button onClick={logout}>Sair</Button>
    </Container>
  );
};
