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
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(current)
  // total # imgs in array, if it gets to one less than length of array, go back to 1st

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



  // function changeImage() { 
  //   setMainImage(location?.photoUrl)
  // }

  // function nextImage(){
  //   const idx = imageUrls.indexOf(imageString)
  //   const sliceArray
  // }

  // function nextImage() {
  //   const index = imageUrls.indexOf(imageString)
  //   const sliceArray = imageUrls.slice(index + 1)
  //   const newArray = sliceArray.concat(imageUrls)
  //   let stop = false;
  //   for (let i =0; i < newArray.length; i++) {
  //       if (stop == false) {
  //           let name = newArray[i];
  //               setImageString(name)
  //               stop = true        
  //       } 
  //   }       
  // }



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