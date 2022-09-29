import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  // Text,
  // Anchor,
} from '@mantine/core';

// import "./LoginPage.css";
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

export default function LoginPage(props) {
  const { classes } = useStyles();
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      // request to server
      await userService.login(state);
      // update state
      props.handleSignUpOrLogin();
      navigate('/');

    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Login
        </Title>
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
        <Button fullWidth mt="xl" size="md" type="submit">
          Login
        </Button>
        {/* <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text> */}
      </Paper>
      {error ? <ErrorMessage error={error} /> : null}
      </form>
    </div>

  );
}
