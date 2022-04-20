import { Container, Avatar, useTheme } from '@mui/material';

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
  const { palette } = useTheme();

  return (
    <CardContainer elevation={0} sx={{ backgroundColor: palette.primary.main }}>
      <Avatar sx={{ width: 200, height: 200 }} src={image} />
      <Container>
        <HeadingText variant="h2">{name}</HeadingText>
        <Text variant="body1">{text}</Text>
      </Container>
    </CardContainer>
  );
};
export default TestimonialCard;
