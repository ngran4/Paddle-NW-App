import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  FileInput,
  Button,
  Title,
  Text,
} from '@mantine/core';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 800,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1449942120512-7a6f1ea6b0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60)',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage(props) {
  const { classes } = useStyles();
  const [selectedFile, setSelectedFile] = useState("")

  const [error, setError] = useState({
    message: '',
    passwordError: false
  });

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  // initialized the react router hook, which allows you to programatically
  // change routes, aka after our signup call in the handleSubmit
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e, 'e in handle change')
    setState({
      ...state,
      [e.target.name]: e.target.value, 
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // check if passwords match
    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({message: 'Passwords must match!', passwordError: true});
  
    // Create formData to send over file using multipart/formdata header, which sends over basic inputs and then the file
    const formData = new FormData();
    // set key value pairs
    formData.append("photo", selectedFile);
    for (let key in state) {
      formData.append(key, state[key]);
    }
    console.log(
      formData.forEach((item) => console.log(item)),
      " < key values in formData"
    );

    try {
      // make sever req
      await userService.signup(formData); 
      // update state (grabs token from local storage and sets in App's state)
      props.handleSignUpOrLogin();

      // navigate after login
      navigate('/');

    } catch(err) {
      console.log(err);
      setError({message: err.message, passwordError: false});
    }
  }

  function handleFileInput(e){
    setSelectedFile(e);
  }


  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Sign Up
        </Title>
        <TextInput
          label="Username"
          required
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
          size="md"
        />
        <TextInput
          label="Email"
          required
          name="email"
          placeholder=" enter your email"
          value={state.email}
          onChange={handleChange}
          size="md"
          mt="md" 
        />
        <PasswordInput
          label="Password"
          required
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
          size="md"
          mt="md" 
        />  
        <Text className="input-hint" align="left" size="xs">
          Password must be unique and at least 11 characters
        </Text>
        <PasswordInput
          label="Password Confirmation"
          required
          name="passwordConf"
          placeholder="confirm password"
          value={state.passwordConf}
          onChange={handleChange}
          size="md"
          mt="md" 
        />
        <FileInput
            label="Profile picture"
            name="photo"
            placeholder="upload a profile photo"
            onChange={handleFileInput}
          />
        <Button fullWidth mt="xl" size="md" type="submit">
          Sign Up
        </Button>
        {error.message ? <ErrorMessage error={error.message} /> : null}
        </Paper>
      </form>
    </div>

  );
}




