import { Agenda, Login } from "../components";
import { useEffect, useState } from "react";
import firebase from "../config/firebase";
import { Spinner, Container } from "@chakra-ui/react";

export default function Home() {
  // const authenticateUser = firebase.auth().currentUser;
  const [auth, setAuth] = useState({
    loading: true,
    user: false,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
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
