import React, { useState } from 'react';
import {
  ActionIcon,
  AspectRatio,
  Button,
  Card,
  createStyles,
  FileInput,
  Group,
  Image,
  Indicator,
  Text,
  Modal,
  useMantineTheme
} from '@mantine/core';
import { IconHeart, IconCamera, IconUpload } from '@tabler/icons';
import ModalCmpt from "../../components/Modal/Modal"


// -------------------------- FUNCTION -------------------------- //

export default function PhotoCard({ location, addPhoto, addRating, removeRating, loggedUser }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [selectedFile, setSelectedFile] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  function handleOpenModal() {
    setModalOpen(true)
  };

  const cover = `${location?.cover}`

  const ratingIndex = location.ratings.findIndex(
    (rating) => rating.username === loggedUser.username
  );

  const ratingColor = ratingIndex > -1 ? "red" : "grey";
  const ratingCount = location.ratings.length;
  const clickHandler =
    ratingIndex > -1
      ? () => removeRating(location.ratings[ratingIndex]._id)
      : () => addRating(location._id);


  function handleFileInput(e) {
    setSelectedFile(e)
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile)
    addPhoto(location._id, formData)
  };


  if (modalOpen) {
    return (
      <Card withBorder>

        <ModalCmpt
          setModalOpen={setModalOpen}
          location={location}
          size="md"
        />
      </Card>
    )
  }
  return (
    <>
      <Card key={location._id} withBorder p="xl" radius="md">
        <Card.Section>
          <AspectRatio ratio={1920 / 1080}>
            <Image src={cover} />
          </AspectRatio>
        </Card.Section>
        <Group position="apart" mt="lg">
          <Text weight={500} size="lg">
            {location.name}
          </Text>

          <Group spacing={5}>
            <Indicator label={ratingCount} color="cyan" inline size={15} >
              <ActionIcon>
                <IconHeart size={100} color={ratingColor} stroke={1.5} onClick={clickHandler} />
              </ActionIcon>
            </Indicator>
          </Group>
        </Group>

        <form autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
          <FileInput
            name="add-photo"
            label="Upload Photo"
            placeholder="Choose File"
            className="form-control"
            onChange={handleFileInput}
            type="file"
            size="sm"
            icon={<IconUpload size={10} />}
            required
            fullWidth
          />
          <Button fullWidth className={classes.button} size="xs" color="dark" type="submit">
            Submit
          </Button>
        </form>

        <Group position="right">
          <ActionIcon>
            <IconCamera size={100} stroke={1.5} onClick={handleOpenModal} />
          </ActionIcon>
        </Group>

      </Card>
    </>
  )
}


// -------------------------- STYLING -------------------------- //

const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  form: {
    marginTop: 8,
    marginBottom: 10,
  },
  button: {
    marginTop: 5,
  },
}));


