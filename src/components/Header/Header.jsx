import React from 'react';
import { useNavigate } from "react-router-dom";
import { createStyles, Header, Container, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// -------------------------- FUNCTION -------------------------- // 

export default function PageHeader({ loggedUser, handleLogout }) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function goHome() {
    navigate('/')
  }

  return (
    <Header height={40} className={classes.header}>
      <nav>
        <Button onClick={goHome}>
          Home
        </Button>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </nav>
    </Header>
  )
}


// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  inner: {
    height: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

}));
