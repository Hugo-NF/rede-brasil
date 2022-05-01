import { forwardRef } from 'react';
import {
  Box,
  useTheme,
} from '@mui/material';

import TestimonialCard from '../TestimonialCard';

import {
  CarouselContainer,
  TestimonialsContainer,
  Title,
} from './styles';

import { Images } from '../../constants';

const items = [
  {
    image: 'https://i.pravatar.cc/400',
    name: 'Hugo Fonseca',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Carine Rocha',
    description: ' If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.',
  },
];

const SocialMedia = forwardRef((_, ref) => {
  const { palette } = useTheme();

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ paddingY: 10, bgcolor: palette.primary.dark }}
    >
      <TestimonialsContainer>
        <Title variant="h2" textAlign="center">
          O que estão dizendo
          <br />
          sobre nós?
        </Title>
        <CarouselContainer
          interval={10000}
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              borderRadius: 0,
            },
          }}
          NextIcon={<img src={Images.RightArrowIcon} width={48} height={48} alt="next icon" />}
          PrevIcon={<img src={Images.LeftArrowIcon} width={48} height={48} alt="prev icon" />}
        >
          {items.map((item) => <TestimonialCard key={item.name} image="https://i.pravatar.cc/300" name={item.name} text={item.description} />)}
        </CarouselContainer>
      </TestimonialsContainer>
    </Box>
  );
});

export default SocialMedia;
