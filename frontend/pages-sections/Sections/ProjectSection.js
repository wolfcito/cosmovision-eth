import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import InfoArea from '/components/InfoArea/InfoArea.js'
import ImageCircular from '/components/CustomImage/ImageCircular.js'
// images
import ImageOne from '../../public/img/kayambi.jpg'
import ImageTwo from '../../public/img/image_two.jpg'
import ImageThree from '../../public/img/image_three.jpg'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export default function ProjectSection() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ancient cultures</h2>
          <h5 className={classes.description}>
            {`For many years, indigenous communities have been seeking recognition
            of their ways of life and rights over the lands they inhabit and
            their resources. Today, they are among the most vulnerable groups in
            different parts of the world. Special measures are being promoted to
            protect them and keep their cultural heritage alive, but sadly,
            they're not enough.`}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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
              <ImageCircular srcImage={ImageOne} alt={'descentralized'} />
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfoArea
              title="A descentralized solution"
              description="Cosmovision seeks to use Blockchain technology to preserve the customs, values and teachings of these communities that have shaped the entire Latin American region over the years. With a decentralized approach, we can ensure that all this legacy is secure in a digital environment. And granting the authenticity of all information that will be preserved for the future."
              vertical
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfoArea
              title="Real impact"
              description="The purpose of the preservation project is also to provide a form of sustenance and support to these communities. In future phases, the project seeks to relate these NFTs directly with material that can be produced by the indigenous communities. With the funds raised in the project, donations will be made that will allow the conservation of the natural spaces where these communities are located and help these communities."
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
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
              <ImageCircular
                srcImage={ImageThree}
                alt={'helping communities'}
              />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
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
              <ImageCircular srcImage={ImageTwo} alt={'iterative'} />
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfoArea
              title="Imagined to grow"
              description='With the help of volunteers, we will be in charge of capturing and validating the preserved information; we also expect to include auction features in the following updates. We plan to divide the preservation of specific communities into "Collections" so that all participants and patrons can focus on the cultures that most appeal to them.'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
