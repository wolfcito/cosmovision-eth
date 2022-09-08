// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import CustomInput from '/components/CustomInput/CustomInput.js'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Button from '/components/CustomButtons/Button.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'

const useStyles = makeStyles(styles)

// Make it horizontal

export default function SlugSection() {
  const classes = useStyles()

  const handleAppear = () => {
    const blockRef = document.getElementById('blockRef')
    if (blockRef.style.display == 'flex') {
      blockRef.style.display = 'none'
    } else {
      blockRef.style.display = 'flex'
    }
  }
  return (
    <div className={classes.section} style={{ padding: 0 }}>
      <GridContainer>
        <GridItem
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: 335,
            rowGap: 36,
            padding: '36px 24px 54px 24px',
          }}
        >
          <h2 className={classes.title} style={{ margin: 0, fontSize: '2rem' }}>
            Support our project
          </h2>
          <Button
            color="info"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAppear}
          >
            <AddCircleOutlineIcon style={{ marginRight: 12 }} />
            Donate
          </Button>
        </GridItem>
        <GridItem
          id="blockRef"
          style={{
            display: 'none',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            rowGap: 12,
            padding: '36px 24px 54px 24px',
          }}
        >
          <CustomInput
            id="regular"
            inputProps={{
              placeholder: 'Introduce the amount of ether you want to donate',
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button
            color="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            Donate
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  )
}
