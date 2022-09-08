import { useState } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import Header from '/components/Header/Header.js'
import Footer from '/components/Footer/Footer.js'
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import HeaderLinks from '/components/Header/HeaderLinks.js'
import Parallax from '/components/Parallax/Parallax.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPage.js'

// Sections for this page
import NftsSection from '../../../pages-sections/Sections/NftsSection'

// Logos
import logoWhite from '../../../public/img/logo_white.png'
import logoDark from '../../../public/img/logo.png'

import { useRouter } from 'next/router'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

const initialState = [
  {
    address: '0x95aba30738d8beeeacbaafa26365f8fd184b353c',
    title: 'A social project...',
    name: 'Kichwa Community',
    description: `The Kichwa people are made up of those descendants of indigenous or native peoples who were "quechuized" during different historical periods, especially in the colony. The result of the implantation of Quechua caused the disappearance of the original language in many towns or, in other cases, the reduction of its use to a few individuals (CORPI, 2002).`,
    image:
      'https://ep00.epimg.net/elpais/imagenes/2017/05/16/album/1494949413_951320_1494950607_album_normal.jpg',
  },
]

export default function CollectionById(props) {
  const classes = useStyles()
  const { ...rest } = props

  const { query } = useRouter()
  const [info, _] = useState(
    initialState.find((element) => element.address == query.address) || {},
  )

  const brand = {
    dark: logoDark,
    white: logoWhite,
  }

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={brand}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/collection-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{info?.name}</h1>
              <h4>{info?.description}</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{ paddingBlock: 4 }}>
          <NftsSection address={query.address} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
