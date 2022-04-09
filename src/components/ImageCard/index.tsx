import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';

import {
  ShareLocation as LocationIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';

import { CardContainer } from './styles';

export interface ImageCardProps {
  src: string;
  title: string;
  address: string;
  phone: string;
  whatsappPhone: string;
  message: string;
  locationUrl: string;
}

const ImageCard = ({
  src,
  title,
  address,
  phone,
  whatsappPhone,
  message,
  locationUrl,
}: ImageCardProps) => {
  const { palette } = useTheme();

  return (
    <CardContainer sx={{ backgroundColor: palette.primary.light }}>
      <CardMedia
        component="img"
        height="220"
        image={src}
        alt="Store cover"
      />
      <CardContent>
        <Typography fontSize={28} fontWeight={700} my={2} color="text.primary">
          {title}
        </Typography>
        <Typography fontSize={18} color="text.primary">
          {address}
        </Typography>
        <Button
          variant="text"
          href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURI(message)}`}
          aria-label="WhatsApp API link"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{ paddingLeft: 0 }}
        >
          <Typography fontSize={18} color="secondary" sx={{ marginRight: 1 }}>
            {phone}
          </Typography>
          <WhatsAppIcon fontSize="medium" />
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Google Maps location"
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{ marginLeft: 'auto' }}
        >
          <LocationIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};
export default ImageCard;
