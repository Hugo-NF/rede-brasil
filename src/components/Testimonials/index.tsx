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
    image: Images.Testimonials1,
    name: 'Rodrigo Alves',
    description: 'Ótimo atendimento e ótimos preços! Sem querer, eles incluíram um produto a mais na minha compra, mas me ligaram em seguida para fazer a devolução do dinheiro.',
  },
  {
    image: Images.Testimonials2,
    name: 'Lívia Nunes',
    description: 'Um boa localização na Asa Sul, uma Drogaria bem montada e com uma grande variedade de medicamentos e produtos, ótimo atendimento e preços acessíveis.',
  },
  {
    image: Images.Testimonials3,
    name: 'Lucas Cabral',
    description: 'Solicitei um remédio para minha filha às 3:00(madrugada) e às 3:25 já estava medicando-a. Parabéns pelo excelente serviço prestado.',
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
        <Title
          variant="h2"
          textAlign="center"
          fontSize={64}
          fontFamily="Source Serif Pro"
        >
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
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          }}
          navButtonsAlwaysVisible
          NextIcon={<img src={Images.RightArrowIcon} width={48} height={48} alt="next icon" />}
          PrevIcon={<img src={Images.LeftArrowIcon} width={48} height={48} alt="prev icon" />}
        >
          {items.map((item) => <TestimonialCard key={item.name} image={item.image} name={item.name} text={item.description} />)}
        </CarouselContainer>
      </TestimonialsContainer>
    </Box>
  );
});

export default SocialMedia;
