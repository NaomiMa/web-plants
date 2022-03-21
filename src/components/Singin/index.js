import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SinginElements";

function SingIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">MyPlant</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="sudmit">Continue</FormButton>
            <Text>Forget password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SingIn;
