import React from 'react';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';
// import { IconStar } from '@tabler/icons';


// -------------------------- FUNCTION -------------------------- //

export default function PhotoCard({ locations, addLike }) {


  // locations.forEach(n => console.log(n.name, 'name in card'))


  return (

    <Card key={locations._id} p="md" radius="md" component="a" href="#">
      <AspectRatio ratio={1920 / 1080}>
        {/* <Image src={`${}`} /> */}
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {locations}
      </Text>
      <Text mt={5}>
        rating
      </Text>
    </Card>
  )
}



// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));