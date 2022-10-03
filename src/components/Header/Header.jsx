import React from 'react';
import { useNavigate } from "react-router-dom";
import { createStyles, Header, Container, Text, Button, ActionIcon, Group } from '@mantine/core';
import { IconKayak} from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';

// -------------------------- FUNCTION -------------------------- // 

export default function PageHeader({ loggedUser, handleLogout, handleToggleMap }) {
  const { classes } = useStyles();
  const navigate = useNavigate();


  const mapIconColor = "white";

  return (
    <Header height={55} className={classes.header}>
        <Group position="apart">
        <Group>
        <ActionIcon className={classes.icon}>
            <IconKayak size={100} color={mapIconColor} stroke={1.5} onClick={handleToggleMap}/>
          </ActionIcon>
        <Text className={classes.name}>
        PaddleNW
        </Text>
        </Group>
        <Button onClick={handleLogout} className={classes.button} color="dark">
          Logout
        </Button>
        </Group>
    </Header>
  )
}


// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color:"dark" }).background,
    borderBottom: 0,
  },

  inner: {
    height: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 400,
    color: "white",
  },
  icon: {
    marginTop: 10,
    marginLeft: 15,
  },
  button: {
    marginTop: 8,
  }

}));
