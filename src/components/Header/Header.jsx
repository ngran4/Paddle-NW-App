import React from 'react';
import { createStyles, Header, Container, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-router-dom";

// -------------------------- FUNCTION -------------------------- // 

export default function PageHeader({ loggedUser, handleLogout}) {
  const { classes } = useStyles();


  return (
    <Header height={40} className={classes.header}>
      <nav>
        <Link to="" onClick={handleLogout}>Logout</Link>
        <Link to="/">Home</Link>
      </nav>
    </Header>
  )
}


// -------------------------- STYLING -------------------------- //

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  inner: {
    height: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

}));
