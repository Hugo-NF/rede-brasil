import {
  Container, Avatar, useTheme, useMediaQuery,
} from '@mui/material';

import {
  CardContainer,
  HeadingText,
  Text,
} from './styles';

export interface ITestimonialCardProps {
  image: string;
  name: string;
  text: string;
}

const TestimonialCard = ({
  image,
  name,
  text,
}: ITestimonialCardProps) => {
  const { breakpoints, palette } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));

  return (
    <CardContainer
      elevation={0}
      dir={matches ? 'row' : 'column'}
      sx={{ backgroundColor: palette.primary.dark }}
    >
      <Avatar sx={{ margin: 2, width: 196, height: 196 }} src={image} />
      <Container>
        <HeadingText variant="h2">{name}</HeadingText>
        <Text variant="body1">{text}</Text>
      </Container>
    </CardContainer>
  );
};
export default TestimonialCard;
