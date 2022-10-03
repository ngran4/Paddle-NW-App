import React, { useState } from "react";
import {
  Modal,
  Group,
  ActionIcon,
  Image
} from '@mantine/core';
import { IconX } from '@tabler/icons';

export default function ModalCmpt({ location, setModalOpen }) {
  // const [mainImage, setMainImage] = useState("");
  const [imageUrls, setImageUrls] = useState(0);
  const [allImages, setAllImages] = useState([])
  // const imageString = location?.photoUrl;
  // const slides = location?.photoUrl?.map((image) => {
  //   <Image src={image.photoUrl} />
  // })

  // function displayImages(){
  //   let slides = [];
  //   for (let i=0; i < allImages.length; i++) {
  //     slides.push(images={allImages[i]} imageString={allImages[i].location.photoUrl})
  //   }
  //  return (slides)
  // }


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
      <Group>
        <Group position="right">
          <ActionIcon>
            <IconX size={100} onClick={() => setModalOpen(false)} />
          </ActionIcon>
        </Group>

        {/* {
          function displayImages() {
            let slides = [];
            for (let i = 0; i < allImages.length; i++) {
              slides.push(
                <Image images = {allImages[i]} imageString = { allImages[i].location.photoUrl} />)
            }
            return (slides)
          }
        } */}

        {/* {location.photoUrl.forEach((image) => { 
          < Image src = { image.photoUrl } />
            console.log(image.photoUrl)
        })} */}

      </Group>

    </div>
  )
}
