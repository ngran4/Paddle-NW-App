import React, { useState } from "react";
import {
  Modal,
  Group,
  ActionIcon,
  Image,
  createStyles
} from '@mantine/core';
import { IconX, IconArrowRight, IconArrowLeft } from '@tabler/icons';


// -------------------------- FUNCTION -------------------------- //

export default function ModalCmpt({ location, setModalOpen }) {
  const { classes } = useStyles();
  const [current, setCurrent] = useState(0)

  function displayImages() {
    let slides = [];
    for (let i = 0; i < location?.photoUrl?.length; i++) {
      console.log(location.photoUrl[i])
      slides.push(
        <Image src={location.photoUrl[i].photoUrl} className={classes.image} />
      )
    }
    return slides
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
        {
          displayImages()
        }
      </Group>

    </div>
  )
}

// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme, _params, getRef) => ({
  image: {
    height: 600,
    width: 400
  },
  rightArrow: {
    
  },
  leftArrow: {
    
  }
}));