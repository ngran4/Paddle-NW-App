import React, { useState } from "react";
import {
  Modal,
  Group,
  ActionIcon,
  Image,
  createStyles,
  Card,
  AspectRatio
} from '@mantine/core';
import { IconX, IconArrowRight, IconArrowLeft } from '@tabler/icons';


// -------------------------- FUNCTION -------------------------- //

export default function ModalCmpt({ location, setModalOpen }) {
  const { classes } = useStyles();
  const [current, setCurrent] = useState(0)
  const length = location?.photoUrl?.length

  const nextSlide = () => {
     // when user reaches last photo, go back to first
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  function displayImages() {
    let slides = [];
    for (let i = 0; i < location?.photoUrl?.length; i++) {
      console.log(location.photoUrl[i])
      slides.push(
        <div className={i === current ? 'slide active' : 'slide'} key={i} >
          {i === current && (
            <Image src={location.photoUrl[i].photoUrl} className={classes.image} />
          )}
        </div>

      )
    }
    return slides
  }

  if (!Array.isArray(location?.photoUrl) || location?.photoUrl?.length <= 0) {
    return null;
  }


  return (
    <div key={location._id}>
      <Group position="right" className={classes.image} >
        <ActionIcon>
          <IconX size={100} onClick={() => setModalOpen(false)} />
        </ActionIcon>
        <Card.Section>
          {
            displayImages()
          }
        </Card.Section>
      </Group>
      <br />
      <Group position="center">
        <ActionIcon>
          <IconArrowLeft size={100} onClick={prevSlide} />
        </ActionIcon>
        <ActionIcon>
          <IconArrowRight size={100} onClick={nextSlide} />
        </ActionIcon>
      </Group>
    </div>
  )
}

// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme, _params, getRef) => ({
  image: {
    height: 550,
    width: 350
  },
}));