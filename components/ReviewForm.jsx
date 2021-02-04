import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import { EmailIcon } from "@chakra-ui/icons";
import StarRatings from "react-star-ratings";

const ReviewForm = () => {
  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    star: 0,
    commentaire: "",
  };
  const onlyLetters = /^[A-Za-z]+$/;
  const validate = (values) => {
    const errors = {};

    if (!values.prenom) {
      errors.prenom = "Required";
    } else if (!onlyLetters.test(values.prenom)) {
      errors.prenom = "Entrez un prenom valide";
    }
    if (!values.nom) {
      errors.nom = "Required";
    } else if (!onlyLetters.test(values.nom)) {
      errors.nom = "Entrez un nom valide";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    console.log(errors);
    return errors;
  };

  return (
    <Formik
      validate={validate}
      initialValues={{ ...initialValues }}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form>
          <Field name="nom">
            {({ field, form }) => (
              <FormControl
                mb={6}
                isRequired
                isInvalid={form.errors.nom && form.touched.nom ? true : false}
              >
                <FormLabel fontSize="1.2em" htmlFor="name">
                  Nom
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={MdPerson} fontSize="24px" />}
                  />
                  <Input placeholder="name" {...field} id="name" />
                </InputGroup>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="prenom">
            {({ field, form }) => (
              <FormControl
                mb={6}
                isRequired
                isInvalid={
                  form?.errors?.prenom && form.touched.prenom ? true : false
                }
              >
                <FormLabel htmlFor="prenom" fontSize="1.2em">
                  Prenom
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={MdPerson} fontSize="24px" />}
                  />
                  <Input placeholder="prenom" {...field} id="prenom" />
                </InputGroup>
                <FormErrorMessage>{form.errors.prenom}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                mb={6}
                isRequired
                isInvalid={
                  form?.errors?.email && form.touched.email ? true : false
                }
              >
                <FormLabel fontSize="1.2em" htmlFor="name">
                  Email
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={EmailIcon} fontSize="24px" />}
                  ></InputLeftElement>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    type="email"
                    id="email"
                  />
                </InputGroup>
                <FormErrorMessage>{form?.errors?.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field
            name="star"
            component={({ field, form }) => (
              <FormControl
                mb={6}
                isRequired
                isInvalid={form.errors.star && form.touched.star ? true : false}
              >
                <FormLabel
                  onClick={() => console.log(form)}
                  fontSize="1.2em"
                  htmlFor="star"
                >
                  Mettez vos étoiles
                </FormLabel>
                <StarRatings
                  starDimension="36px"
                  starHoverColor="#fff000"
                  changeRating={(newRating, fieldName) =>
                    form.setFieldValue("star", newRating)
                  }
                  rating={field.value}
                  starRatedColor="#fff000"
                  numberOfStars={5}
                  name="rating"
                  {...field}
                />
                <FormErrorMessage>{form.errors.star}</FormErrorMessage>
              </FormControl>
            )}
          />

          <Field name="commentaire">
            {({ field, form }) => (
              <FormControl
                mb={6}
                isInvalid={
                  form?.errors?.commentaire && form.touched.commentaire
                    ? true
                    : false
                }
              >
                <FormLabel fontSize="1.2em" htmlFor="commentaire">
                  Commentaire
                </FormLabel>
                <InputGroup>
                  <Textarea {...field} placeholder="Entrez votre commentaire" />
                </InputGroup>
                <FormErrorMessage>{form.errors.commentaire}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            type="submit"
            isLoading={props.isSubmitting}
            loadingText="En cours..."
            fontSize="1.2em"
            colorScheme="yellow"
            display="flex"
            ml="auto"
            right={0}
          >
            Envoyez
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;
