import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccountTree from "@material-ui/icons/AccountTree";
import Nature from "@material-ui/icons/Nature";
import Update from "@material-ui/icons/Update";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
// images
import ImageOne from '../../public/img/image_one.jpg';
import ImageTwo from '../../public/img/image_two.jpg';
import ImageThree from '../../public/img/image_three.jpg';

import Donnors1 from '../../public/img/pacha.jpg';


import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ListDonnors() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>NFT: PACHA</h2>
          <h2 className={classes.title}>Understanding of the term Pacha</h2>
          <h5 className={classes.description}>
          All forms of existence come to be the synthesis of both
energies, the bridge, the center of cosmic and telluric forces.

The word Pacha, assuming first that it is a plural term,
risignificant and multidimensional, has that conception, is the

union of both forces:
PA that comes from PAYA: Two and
CHA that comes from CHAMA: Strength.

Two cosmic-telluric forces that interact to be able to ex-
capture this thing we call life, as a totality of the visible

(Pachamama) and the invisible (Pachakama).
          </h5>
        </GridItem>
      </GridContainer>
      <div>
       <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          
        <h4 className={classes.title}>Pacha, is a very important word in indigenous peoples</h4>
          <h5 className={classes.description}>
          Native Andean nas to understand the world, is a term
              
              with multiple meanings. According to the translation of the linguists
              theses, it refers only to time and space, but for the
              Andean indigenous peoples this word goes beyond time and
              
              of space, implies a way of life, a way of understanding
              the universe that surpasses time – space (the here and now).
              Pacha is not only time and space, it is the ability to participate
              actively in the universe, immerse yourself and be in it.

                    


          </h5>
        </GridItem>
        </GridContainer>
      </div>

      <div>
       <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          
          
          <h5 className={classes.description}>
          Zas: chacha (man in the Aymara language) – Warmi (woman in
              the Kichwa language) therefore (man and woman) when we
              we refer to the complementarity of the couple, in a relationship
              also balance. In the indigenous worldview prevails the
              parity, that is, there is no night without day, nor man without
              the woman. The two make one and it is a perfect combination of the
              nature. This rule is fulfilled with the rest of the elements, for
              example, there is no hot without cold.
              


          </h5>
        </GridItem>
        </GridContainer>
      </div>
     
      <div>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} style={{ marginTop: '150px' }}>
            <div style={{ 
              borderRadius: '50%',
              width: '300px',
              height: '300px',
              position: 'relative',
              overflow: 'hidden',
              margin: '30px auto'
            }}>
              <img style={{
                width: 'auto',
                height: '100%',
                marginLeft: '-100px'
              }} 
              src={Donnors1.src} alt='descentralized' />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ marginTop: '150px' }}>
            <InfoArea
              title="Category: Life, Existence."
              description=" Author:Nelson Atupaña Chimbolema."

             
              icon={AccountTree}
              vertical
            />
          </GridItem>


          <GridContainer justify="center">

      </GridContainer>




        </GridContainer>
        
      </div>
    </div>
  );
}
