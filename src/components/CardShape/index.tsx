import { ReactNode, MouseEventHandler } from 'react';
import {
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { Images } from '../../constants';

import {
  CardComponent,
  CardGrid,
  TextGrid,
} from './styles';

interface ITextProps {
  text: string;
  size: number;
  weight: number;
}

export interface IShapeCardProps {
  icon: ReactNode;
  title: ITextProps;
  subtitle: ITextProps;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const ShapeCard = ({
  icon,
  title,
  subtitle,
  onClick,
}: IShapeCardProps) => (
  <CardComponent
    elevation={0}
    sx={{
      backgroundImage: `url(${Images.BoxShape})`,
    }}
    onClick={onClick}
  >
    <CardContent>
      <Container>
        <CardGrid container>
          <Grid item xs>
            {icon}
          </Grid>
          <TextGrid item xs>
            <Typography fontSize={title.size} fontWeight={title.weight} color="text.quaternary" gutterBottom>
              {title.text}
            </Typography>
            <Typography fontSize={subtitle.size} fontWeight={subtitle.weight} color="text.tertiary" gutterBottom>
              {subtitle.text}
            </Typography>
          </TextGrid>
        </CardGrid>
      </Container>
    </CardContent>
  </CardComponent>
);

export default ShapeCard;
