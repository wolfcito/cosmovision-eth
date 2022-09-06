import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
  import CustomInput from "/components/CustomInput/CustomInput.js";
  import Button from "/components/CustomButtons/Button.js";

  import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

  const useStyles = makeStyles(styles);

  export default function CTA() {
    const classes = useStyles();
    return (
      <div className={classes.section} style={{marginTop: -150, padding: "70px 24px"}}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={7} style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className={classes.title}>Be part of the Tribe</h2>
          <h4 className={classes.description}>
            Taking care of our roots is something that is in all of us. It is
            our duty in these times to preserve those legacies of hundreds of
            years that have marked an entire region of our planet.
          </h4>
          <Button
            color="danger"
            size="lg"
            href="/collection"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '30px'}}
            >
            <i className="fas fa-play" style={{paddingRight: 12}}/>
            Join the Tribe
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
