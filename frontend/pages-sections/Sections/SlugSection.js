import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

// Make it horizontal

export default function SlugSection() {
  const classes = useStyles();
    return (
      <div className={classes.section} style={{marginTop: -150, padding: "70px 24px"}}>
      <GridContainer>
        <GridItem style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <h2 className={classes.title} style={{margin: 0, fontSize: "2rem"}}>Be part of the Tribe</h2>
          <Button
            color="danger"
            size="lg"
            href="/collection"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AddCircleOutlineIcon style={{marginRight: 12}}/>
            Make your donation
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
