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
import { Logo } from "../Logo";
import { useAuth } from "../Auth";
import Link from "next/link";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento obrigatório"),

  password: yup.string().required("Preenchimento obrigatório"),
});

export const Login = () => {
  const [, { login }] = useAuth();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: login,
    validationSchema,
    initialValues: {
      email: "",
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

        <Box p={4}>
          <Button
            colorScheme="blue"
            width="100%"
            onClick={handleSubmit}
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Box>
      </Box>
      <Link href="/signup">Ainda não tem uma conta? Cadraste-se</Link>
    </Container>
  );
};
