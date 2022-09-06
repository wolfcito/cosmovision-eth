/*eslint-disable*/
import React from 'react'
// import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import Tooltip from '@material-ui/core/Tooltip'
// import Icon from '@material-ui/core/Icon'

// @material-ui/icons
// import { Apps, CloudDownload } from '@material-ui/icons'
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

// core components
// import CustomDropdown from '/components/CustomDropdown/CustomDropdown.js'
import Button from '/components/CustomButtons/Button.js'

import styles from '/styles/jss/nextjs-material-kit/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/collection"
          color="transparent"
          className={classes.navLink}
        >
          Collections
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" color="transparent" className={classes.navLink}>
          About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/historiographer"
          color="transparent"
          className={classes.navLink}
        >
          Historiographer
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/donnors" color="transparent" className={classes.navLink}>
          Donnors
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/associates" color="transparent" className={classes.navLink}>
          Associates
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/roadmap" color="transparent" className={classes.navLink}>
          Roadmap
        </Button>
      </ListItem>
    </List>
  )
}
