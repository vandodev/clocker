import { Container, Button } from "@chakra-ui/react";
import { firebaseClient } from "../../config/firebase/client";

export const Agenda = () => {
  const logout = () => firebaseClient.auth().signOut();
  return (
    <Container>
      <Button onClick={logout}>Sair</Button>
    </Container>
  );
};
