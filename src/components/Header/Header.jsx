import React from 'react';
import { useNavigate } from "react-router-dom";
import { createStyles, Header, Container, Text, Button, ActionIcon, Group } from '@mantine/core';
import { IconMap, IconLayoutList } from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';

// -------------------------- FUNCTION -------------------------- // 

export default function PageHeader({ loggedUser, handleLogout, handleToggleMap }) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function goHome() {
    navigate('/')
  }

  const mapIconColor = "white";

  return (
    <Header height={40} className={classes.header}>
      <nav>
        {/* <Group position="left">
          <ActionIcon>
            <IconMap size={100} color={mapIconColor} stroke={1.5} onClick={handleToggleMap}/>
          </ActionIcon>
        </Group> */}
        <Group position="right" >
        <Button onClick={handleLogout}>
          Logout
        </Button>
        </Group>
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
