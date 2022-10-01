import React, { useState } from 'react';
import {
  createStyles,
  SimpleGrid,
  Card,
  Group,
  Image,
  Text,
  Container,
  AspectRatio,
  FileInput,
  Button,
  ActionIcon,
  Indicator
} from '@mantine/core';
import { IconHeart } from '@tabler/icons';
// import { FileButton, Button, Group, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
// import { IconStar } from '@tabler/icons';


// -------------------------- FUNCTION -------------------------- //

export default function PhotoCard({ location, addPhoto, addRating, removeRating, loggedUser }) {
  const { classes } = useStyles();
  const [selectedFile, setSelectedFile] = useState("");

  // const locationPhotoUrl = location?.photoUrl[0]?.photoUrl

  console.log(location?.photoUrl[0]?.photoUrl, 'location photo url')

  // const slides = location?.photoUrl?.map((image) => {
  //   <Carousel.Slide key={image}>
  //     <Image src={image} height={220} />
  //   </Carousel.Slide>
  // })

  // console.log(slides, 'slides')


  // const slides = locationPhotoUrl.map((image) => (
  //   <Carousel.Slide key={image}>
  //     <Image src={image} height={220} />
  //   </Carousel.Slide>
  // ));

  // const slides = function getPhoto() {
  //   for (let i = 0; i < locationPhotoUrl.length; i++) {
  //     console.log(locationPhotoUrl[i].photoUrl)
  //     const url = `${locationPhotoUrl[i].photoUrl}`;

  //     return (<Carousel.Slide key={i}>
  //       <Image src={url} height={220} />
  //     </Carousel.Slide>)
  //   }
  // }

  //   const slides = locationPhotoUrl.forEach(function (image) {
  //     <Carousel.Slide key={image.photoUrl}>
  //       <Image src={image.photoUrl} height={220} />
  //     </Carousel.Slide>
  // });


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
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile)
    addPhoto(location._id, formData)
  }


  return (
    <Card key={location._id} withBorder p="xl" radius="md">
      {/* <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section> */}

      <Group position="apart" mt="lg">
        <Text weight={500} size="lg">
          {location.name}
        </Text>

        <Group spacing={5}>
          <Indicator label={ratingCount} inline size={15} >
            <ActionIcon>
              <IconHeart size={100} color={ratingColor} stroke={1.5} onClick={clickHandler} />
            </ActionIcon>
          </Indicator>
        </Group>
      </Group>

      <Group position="apart" mt="md">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FileInput
            placeholder="Choose File"
            className="form-control"
            name="playlist-cover"
            type="file"
            onChange={handleFileInput}
            label="Upload Photo"
            required
            withAsterisk
          />
          <Button radius="md" type="submit">
            Submit
          </Button>
        </form>
      </Group>
    </Card>
  )
}



// -------------------------- STYLING -------------------------- //
// const useStyles = createStyles((theme) => ({
//   card: {
//     transition: 'transform 150ms ease, box-shadow 150ms ease',

//     '&:hover': {
//       transform: 'scale(1.01)',
//       boxShadow: theme.shadows.md,
//     },
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 600,
//   },
// }));

const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: 16,
    },
  },
}));



{/* <AspectRatio ratio={1920 / 1080}>
<Image src={locationUrl} />
</AspectRatio>
<Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
{location.name}
</Text>
<Group>
<Indicator label={ratingCount} inline size={15} >
  <ActionIcon>
    <IconHeart size={100} color={ratingColor} stroke={1.5} onClick={clickHandler} />
  </ActionIcon>
</Indicator>
</Group>
<form autoComplete="off" onSubmit={handleSubmit}>
<FileInput
  placeholder="Choose File"
  className="form-control"
  name="playlist-cover"
  type="file"
  onChange={handleFileInput}
  label="Upload Photo"
  required
  withAsterisk
/>
<Button type="submit">
  Submit
</Button>
</form> */}