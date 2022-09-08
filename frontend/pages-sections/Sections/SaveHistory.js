import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import CustomInput from '/components/CustomInput/CustomInput.js'
import Button from '/components/CustomButtons/Button.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'

import ImageThree from '../../public/img/histories.jpg'
import Image from 'next/image'

const useStyles = makeStyles(styles)

const SaveHistory = () => {
  const classes = useStyles()

  const InputHistory = ({ placeholder = 'Type here' }) => {
    return (
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <CustomInput
          id="regular"
          inputProps={{
            placeholder: placeholder,
          }}
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
    )
  }

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Save your Amazing History!</h2>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h4 className={classes.description}>
            <GridContainer>
              <InputHistory placeholder="Type a title" />
              <InputHistory placeholder="Type a description" />
              <InputHistory placeholder="Type a URL image" />
              <InputHistory placeholder="Type a historiographer" />
              <InputHistory placeholder="Type a category" />
            </GridContainer>
          </h4>
          <Button
            color="danger"
            size="lg"
            href="/collection"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '30px' }}
          >
            <i className="fas fa-play" style={{ paddingRight: 12 }} />
            Save
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ marginTop: '10px' }}>
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
            <Image
              layout="fill"
              src={ImageThree.src}
              alt="histories of communities"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default SaveHistory
