import { Login, useAuth } from "../components";
import { Spinner, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [auth] = useAuth();
  const router = useRouter();

  useEffect(() => {
    auth.user && router.push("/agenda");
  }, [auth.user]);

  if (auth.loading) {
    // return "Loading ...";
    return (
      <Container p={4} centerContent>
        <Spinner />
      </Container>
    );
  }

  return <Login />;
  // return auth.user ? <Agenda /> : <Login />;
}
