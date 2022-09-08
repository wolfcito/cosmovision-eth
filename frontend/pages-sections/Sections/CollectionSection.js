import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import InfoArea from '/components/InfoArea/InfoArea.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
import Button from '../../components/CustomButtons/Button'

import ComunidadImage from '/public/img/comunidad-kichwa.jpg'
import ImageCircular from '/components/CustomImage/ImageCircular.js'
import Link from 'next/link'

const useStyles = makeStyles(styles)

const initialState = [
  {
    address: '0x95aba30738d8beeeacbaafa26365f8fd184b353c',
    title: 'A social project',
    name: 'Kichwa Community',
    description:
      'The Kichwa are an indigenous population of approximately 55,000 people who inhabit the Ecuadorian jungle, which stretches from the Andean foothills to the Amazon lowlands. They know the threats to their way of life and their territory, an area that covers more than one million hectares (2.5 million acres), won...',
    image: ComunidadImage,
  },
]

export default function CollectionSection() {
  const [collections, _] = useState(initialState)
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer style={{ flex: 1 }}>
        {collections.map((element, index) => (
          <GridItem key={index}>
            <GridContainer style={{ alignItems: 'center' }}>
              <GridItem xs={12} sm={12} md={6} style={{ margin: '12px 0' }}>
                <ImageCircular
                  srcImage={element.image}
                  alt={'helping communities'}
                />

                <h2 className={classes.title}>{element.name}</h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} style={{ margin: '50px 0' }}>
                <InfoArea
                  title={element.title}
                  description={element.description}
                  vertical
                />
                <Link href={`/collection/${element.address}`}>
                  <Button color="primary">
                    {`NFT's of ${element.name} collection`}
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}
