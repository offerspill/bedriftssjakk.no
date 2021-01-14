import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

const StyledContact = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    display: block;
    text-align: center;
  }
`;

const ContactContent = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 600px;

  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const Form = styled.form``;

const StyledInput = styled(Input)`
  display: block;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Contact = () => {
  const onSubmit = (formData) => {
    const submitUrl =
      "https://script.google.com/macros/s/AKfycby2OQ4RrpSXwaQIIsXWINuiFIO_sKWdVRYKmtamSgVPzpBvr5qBz9SU5w/exec";
    console.log("submitting", formData);

    const data = new FormData();
    data.set("Email", formData.email);
    data.set("Text", formData.text);

    fetch(submitUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.error("Error", err);
      })
      .finally(() => {
        console.log("done");
      });
  };

  const { handleSubmit, register, errors } = useForm();

  return (
    <StyledContact id="kontakt">
      <ContactContent>
        <Heading as="h1" size="3xl" mb="2rem">
          Kontakt oss
        </Heading>
        <Text fontSize="18px" mb="1rem">
          Fyll ut skjemaet, så tar vi kontakt.
        </Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            variant="filled"
            placeholder="Navn"
            name="name"
            ref={register}
          />
          <StyledInput
            variant="filled"
            placeholder="Bedriftsnavn/Gruppe"
            name="company"
            ref={register}
          />
          <StyledInput
            variant="filled"
            placeholder="E-post"
            name="email"
            ref={register}
          />
          <StyledInput
            variant="filled"
            placeholder="Telefonnr"
            name="phone"
            ref={register}
          />
          <Textarea
            variant="filled"
            placeholder="Skriv hvilken pakke du vil ha, og eventuelt andre ønsker."
            name="text"
            ref={register}
          />
          <Button
            type="submit"
            display="block"
            margin="0 auto"
            mt="1rem"
            color="white"
            background="#423cec"
          >
            Send inn
          </Button>
        </Form>
      </ContactContent>
    </StyledContact>
  );
};

export default Contact;
