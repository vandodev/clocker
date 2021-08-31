import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Logo } from "../components";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento obrigatório"),

  password: yup.string().required("Preenchimento obrigatório"),
  username: yup.string().required("Preenchimento obrigatório"),
});

export default function Home() {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    onSubmit: () => {},
    validationSchema,
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  return (
    <Container p={4} centerContent>
      <Logo />

      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            size="lg"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.email && (
            <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            size="lg"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.password && (
            <FormHelperText textColor="#e74c3c">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <Box display="Flex" flexDirection="row" alignItems="center">
          <Text>Cloker.work</Text>
          <FormControl id="username" p={4} isRequired>
            <Input
              type="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.username && (
              <FormHelperText textColor="#e74c3c">
                {errors.username}
              </FormHelperText>
            )}
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
