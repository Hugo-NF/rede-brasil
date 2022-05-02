import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';

import {
  ShareLocation as LocationIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';

import { CardContainer } from './styles';

export interface IImageCardProps {
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
}: IImageCardProps) => {
  const { palette } = useTheme();

  return (
    <CardContainer sx={{ backgroundColor: palette.primary.light }}>
      <CardMedia
        component="img"
        height="280"
        image={src}
        alt="Store cover"
      />
      <CardContent>
        <Typography fontSize={27} fontWeight={700} my={2} color="text.primary" m={0}>
          {title}
        </Typography>
        <Typography fontSize={18} color="text.primary" m={0}>
          {address}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >

          <Button
            variant="text"
            href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURI(message)}`}
            aria-label="WhatsApp API link"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            sx={{ paddingLeft: 0, margin: 0 }}
          >
            <Typography fontSize={18} color="secondary" sx={{ marginRight: 1 }}>
              {phone}
            </Typography>
            <WhatsAppIcon fontSize="medium" />
          </Button>
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
        </Grid>
      </CardContent>
    </CardContainer>
  );
};
export default ImageCard;
