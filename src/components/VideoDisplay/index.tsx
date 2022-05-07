import { forwardRef, useMemo } from 'react';
import {
  Grid,
  useTheme,
} from '@mui/material';

import {
  SessionTitle,
  VideoBox,
} from './styles';

import useWindowSize from '../../hooks/useWindowSize';

const VideoDisplay = forwardRef((_, ref) => {
  const { palette } = useTheme();
  const window = useWindowSize();

  const videoWidth = useMemo(() => (window.width ? window.width * 0.7 : 1280), [window]);
  const videoHeight = useMemo(() => (videoWidth ? (videoWidth / (16 / 9)) : 720), [videoWidth]);

  return (
    <VideoBox
      ref={ref}
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', bgcolor: palette.primary.dark }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12}>
          <SessionTitle fontSize={32} fontWeight={700} mb={8}>Conheça um pouco mais sobre nós!</SessionTitle>
        </Grid>
        <Grid item xs={10}>
          <iframe
            width={videoWidth}
            height={videoHeight}
            src="https://www.youtube.com/embed/13kos0RTF9w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 10, maxWidth: videoWidth }}
          />
        </Grid>
      </Grid>
    </VideoBox>
  );
});

export default VideoDisplay;
