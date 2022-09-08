import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group'
// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import InfoArea from '/components/InfoArea/InfoArea.js'

import pacha from '../../public/img/pacha.jpg'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
import Image from 'next/image'

const useStyles = makeStyles(styles)

export default function AssociateSection() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{ marginBottom: 36 }}>
            The beggining...
          </h2>
          <h4 style={{ color: 'gray' }}>
            The elements that make up the indigenous worldview will be embodied
            in pieces of knowledge contained in ERC-721 tokens. Thus, having
            NFTs museums that preserve and show the world the worldview of the
            different indigenous peoples and nationalities without any control
            on them. In the initial phase we are going to build the museum of
            the <strong>Kichwa Community</strong>.
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} style={{ margin: '50px 0px' }}>
            <div
              style={{
                borderRadius: '50%',
                width: '300px',
                height: '300px',
                position: 'relative',
                overflow: 'hidden',
                margin: '30px auto',
              }}
            >
              <Image layout="fill" src={pacha.src} alt="descentralized" />
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            style={{ margin: '50px 0px', alignSelf: 'center' }}
          >
            <InfoArea
              title="A social project"
              description="The main focus is to finance the construction of the museum that will be done through the sale of the first collection of 1000 NFTs where 950 are going to be minted and 50 are going to put in auction. Each of them will have a unique historical value that will make up the museum. In this way we will add more people to our tribe (Holders of NFTs, collaborators and institutions that join the project) interested in the preservation of the indigenous worldview."
              icon={GroupIcon}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{ marginBottom: 36 }}>
            {`¿What's next...?`}
          </h2>
          <h4 style={{ color: 'gray' }}>
            {`In subsequent phases of the project, more museums and collections of
            NFTs from the Kichwa community and other indigenous peoples and
            nationalities will be created. As new sources of income will also be
            added to maintain the sustainability of the project, for example, at
            some point of the project we are looking forward to implement
            auctions for the high value NFT's of the collection.`}
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  )
}
