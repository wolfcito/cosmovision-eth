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

import Donnors1 from '../../public/img/donnors1.jpeg';


import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ListDonnors() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Donnors</h2>
        </GridItem>
      </GridContainer>
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
              title="Love for Latin American cultures"
              description="All donations reached the different tribes, ethnic groups, communities that represent our entire culture and our past."
              icon={AccountTree}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ marginTop: '150px' }}>
            <InfoArea
              title="Wallets joined to the collection"
              description='0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
              0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
              0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
              0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB
              0x617F2E2fD72FD9D5503197092aC168c91465E7f2
              0x17F6AD8Ef982297579C203069C1DbfFE4348c372
              0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678
              0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7
              0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C
              0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC
              0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c
              0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
              0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB
              0x583031D1113aD414F02576BD6afaBfb302140225
              0xdD870fA1b7C4700F2BD7f44238821C26f7392148
              0xdD870fA1b7C4700F2BD7f44238821C26f7392148
              0x583031D1113aD414F02576BD6afaBfb302140225
              0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB
              0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
              0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c
              0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC
              0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C
              0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7
              0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678
              0x17F6AD8Ef982297579C203069C1DbfFE4348c372
              0x617F2E2fD72FD9D5503197092aC168c91465E7f2
              0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB
              0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
              0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
              0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
              icon={Update}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
