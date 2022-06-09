import React, {
  forwardRef, Ref, RefObject, useEffect, useMemo, useState,
} from 'react';
import {
  Button, Grid, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

import { Images } from '../../constants';
import useWindowSize from '../../hooks/useWindowSize';

import ProductHeroLayout from './layout';
import { Title, Subtitle } from './styles';

export interface IProductHeroProps {
  refs: Array<RefObject<HTMLInputElement>>;
}

const ProductHero = forwardRef(({ refs }: IProductHeroProps, ref: Ref<HTMLElement> | undefined) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));
  const [slide, setSlide] = useState<number>(0);
  const window = useWindowSize();

  const handleScroll = React.useCallback((scrollRef: React.RefObject<HTMLInputElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, []);

  const imageWidth = useMemo(() => {
    if (window.width === undefined) return 545;
    return window.width > 545 ? 545 : window.width * 0.7;
  }, [window]);

  const covers = useMemo(() => ([
    {
      image: Images.HeroCover1,
      title: (
        <>
          <Title fontSize={matches ? 64 : 32} sx={{ color: 'white', display: 'flex', flexDirection: 'row' }}>
            Rede Brasil
            <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304' }}>,</Title>
          </Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304' }}>cuidando de você</Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304', display: 'flex', flexDirection: 'row' }}>
            com o
            <Title fontSize={matches ? 64 : 32} sx={{ color: 'white' }}>&nbsp;melhor.</Title>
          </Title>
        </>
      ),
      subtitle: (
        <>
          <Subtitle fontSize={matches ? 30 : 18}>Aproveite nossas ofertas online</Subtitle>
          <Subtitle fontSize={matches ? 30 : 18}>e em unidades físicas!</Subtitle>
        </>
      ),
      refIndex: 1,
    },
    {
      image: Images.HeroCover2,
      title: (
        <>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304', display: 'flex', flexDirection: 'row' }}>
            Cobrimos
            <Title fontSize={matches ? 64 : 32} sx={{ color: 'white' }}>&nbsp;qualquer</Title>
          </Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#white', display: 'flex', flexDirection: 'row' }}>
            orçamento
            <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304' }}>,&nbsp;solicite</Title>
          </Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304' }}>uma proposta.</Title>
        </>
      ),
      subtitle: (
        <>
          <Subtitle fontSize={matches ? 30 : 18}>Solicite sua proposta para</Subtitle>
          <Subtitle fontSize={matches ? 30 : 18}>demanda judicial hoje mesmo,</Subtitle>
          <Subtitle fontSize={matches ? 30 : 18}>clique abaixo para iniciar!</Subtitle>
          <Button
            variant="text"
            onClick={() => handleScroll(refs[4])}
            color="secondary"
            sx={{ paddingLeft: 0, alignSelf: matches ? 'flex-start' : 'center' }}
          >
            <Typography
              fontSize={matches ? 30 : 18}
              color="secondary"
              sx={{
                color: '#FED304',
                marginRight: 1,
                marginTop: 4,
                fontWeight: 700,
              }}
              textTransform="none"
            >
              Clique para solicitar!
              <ArrowForwardIos fontSize="medium" />
            </Typography>
          </Button>
        </>
      ),
      refIndex: 1,
    },
    {
      image: Images.HeroCover3,
      title: (
        <>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304', display: 'flex', flexDirection: 'row' }}>
            É hora de
            <Title fontSize={matches ? 64 : 32} sx={{ color: 'white' }}>&nbsp;facilitar</Title>
          </Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#FED304' }}>com o cartão</Title>
          <Title fontSize={matches ? 64 : 32} sx={{ color: '#white' }}>
            Rede Brasil!
          </Title>
        </>
      ),
      subtitle: (
        <>
          <Subtitle fontSize={matches ? 30 : 18}>Um cartão sem taxas e</Subtitle>
          <Subtitle fontSize={matches ? 30 : 18}>burocrácia, do jeito que a sua</Subtitle>
          <Subtitle fontSize={matches ? 30 : 18}>saúde merece.</Subtitle>
          <Button
            variant="text"
            href="https://bca.brasilcard.net/"
            aria-label="BrasilCard link"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            sx={{ paddingLeft: 0, alignSelf: matches ? 'flex-start' : 'center' }}
          >
            <Typography
              fontSize={matches ? 30 : 18}
              color="secondary"
              sx={{
                color: '#FED304',
                marginRight: 1,
                marginTop: 4,
                fontWeight: 700,
              }}
              textTransform="none"
            >
              Faça o seu hoje!
              <ArrowForwardIos fontSize="medium" />
            </Typography>
          </Button>
        </>
      ),
      refIndex: 1,
    },
  ]), [palette, matches]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((current: number) => (current === covers.length - 1 ? 0 : current + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ProductHeroLayout
      ref={ref}
      nextSessionRef={refs[covers[slide].refIndex]}
      sxBackground={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginTop: -30,
        backgroundImage: `url(${Images.Transition}), url(${covers[slide].image})`,
        backgroundColor: 'black', // Average color of the background image.
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'bottom, bottom',
        backgroundSize: 'auto, auto',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover1}
        alt="increase priority"
      />
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover2}
        alt="increase priority"
      />
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover3}
        alt="increase priority"
      />
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover31}
        alt="increase priority"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
          {covers[slide].title}
          {covers[slide].subtitle}
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
          {slide === 2 && (
            <img
              src={Images.HeroCover31}
              alt="cover table aux"
              width={imageWidth}
            />
          )}
        </Grid>
      </Grid>
    </ProductHeroLayout>
  );
});

export default ProductHero;
