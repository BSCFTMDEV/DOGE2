/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable semi */
/* eslint-disable quotes */
import Navbar from "../components/Navbar"
import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react";
import 'sf-font';
import Footer from './footer';
import Link from 'next/link'
import { Spacer, Button, Col, Row, Container, Dropdown } from '@nextui-org/react';
import react from "react";

const theme = createTheme({
  type: 'dark',
  theme: {
    fontFamily: 'SF Pro Display',
    colors: {
      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$blue400',
      primaryLightContrast: '$blue600',
      primary: '$purple500',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$white500',
      transparent: '#00000000',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple300 90%)',
      link: '#f8f6fb',

      myColor: '#00000030'

    },
    space: {},
    fonts: {}
  }
})

function MyApp ({ Component, pageProps }) {
  return (
    <div>
    <div style={{ background: 'black' }} >

    <>
    <Navbar/>
    <NextUIProvider theme={theme} >
    <Component {...pageProps} />
    </NextUIProvider>

     </>
     </div>
     </div>
  )
}

export default MyApp
