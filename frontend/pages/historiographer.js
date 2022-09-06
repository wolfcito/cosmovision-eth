import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

// core components
import Header from '/components/Header/Header.js'
import Footer from '/components/Footer/Footer.js'
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import HeaderLinks from '/components/Header/HeaderLinks.js'
import Parallax from '/components/Parallax/Parallax.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPage.js'

// Sections for this page
import logoWhite from '../public/img/logo_white.png'
import logoDark from '../public/img/logo.png'
import SaveHistory from '../pages-sections/Sections/SaveHistory'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props

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
      <Parallax filter responsive image="/img/bg7.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Historiographer</h1>
              <h4>
                In this section the historian will be able to add content to the
                Museum of Indigenous Communities.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SaveHistory />
        </div>
      </div>
      <Footer />
    </div>
  )
}
