import { ReactNode, MouseEventHandler } from 'react';
import {
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';

import { Images } from '../../constants';

export interface IShapeCardProps {
  icon: ReactNode;
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const ShapeCard = ({
  icon,
  text,
  onClick,
}: IShapeCardProps) => (
  <Card
    elevation={0}
    sx={{
      width: 297,
      height: 233,
      backgroundImage: `url(${Images.BoxShape})`,
      backgroundColor: 'transparent',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    onClick={onClick}
  >
    <CardContent>
      <Container>
        {icon}
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {text}
        </Typography>
      </Container>
    </CardContent>
  </Card>
);

export default ShapeCard;
