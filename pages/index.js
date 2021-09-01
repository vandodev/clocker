import { Agenda, Login } from "../components";
import { useEffect, useState } from "react";
import { firebaseClient } from "../config/firebase/client";
import { Spinner, Container } from "@chakra-ui/react";

export default function Home() {
  // const authenticateUser = firebase.auth().currentUser;
  const [auth, setAuth] = useState({
    loading: true,
    user: false,
  });

  useEffect(() => {
    firebaseClient.auth().onAuthStateChanged((user) => {
      setAuth({
        loading: false,
        user: !!user,
      });
    });
  }, []);

  if (auth.loading) {
    // return "Loading ...";
    return (
      <Container p={4} centerContent>
        <Spinner />
      </Container>
    );
  }

  return auth.user ? <Agenda /> : <Login />;
}
