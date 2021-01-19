import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

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

const SpinnerWrapper = styled.div`
  display: block;
  max-width: 50px;
  margin: 0 auto;
  margin-top: 1rem;
`;

const StyledInput = styled(Input)`
  display: block;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = (formData) => {
    setSubmitError(false);
    setSubmitting(true);

    const submitUrl =
      "https://script.google.com/macros/s/AKfycby2OQ4RrpSXwaQIIsXWINuiFIO_sKWdVRYKmtamSgVPzpBvr5qBz9SU5w/exec";

    const data = new FormData();
    data.set("Navn", formData.name);
    data.set("Epost", formData.email);
    data.set("Telefonnr", formData.phone);
    data.set("Bedrift/Gruppe", formData.company);
    data.set("Beskjed", formData.text);

    fetch(submitUrl, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.error("Error", err);
        setSubmitError(true);
      })
      .finally(() => {
        console.log("done");
        setSubmitting(false);
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
          {!submitting ? (
            <Button
              type="submit"
              display="block"
              margin="0 auto"
              mt="1rem"
              color="white"
              background="#423cec"
              disabled={success}
            >
              Send inn
            </Button>
          ) : (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )}
          {success && (
            <Alert status="success" mt="2rem" textAlign="center">
              <AlertIcon />
              Takk for interessen! Vi vil kontakte deg så fort som mulig.
            </Alert>
          )}
          {submitError && (
            <Alert mt="2rem" status="error">
              <AlertIcon />
              Noe gikk galt. Prøv igjen eller kontakt oss på
              bedriftssjakk@offerspill.no
            </Alert>
          )}
        </Form>
      </ContactContent>
    </StyledContact>
  );
};

export default Contact;
