import React from 'react'
import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '/components/CustomButtons/Button.js'

import styles from '/styles/jss/nextjs-material-kit/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/historiographer">
          <Button color="transparent" className={classes.navLink}>
            Historiographer
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/donnors">
          <Button color="transparent" className={classes.navLink}>
            Donnors
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/associates">
          <Button color="transparent" className={classes.navLink}>
            Associates
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/roadmap">
          <Button color="transparent" className={classes.navLink}>
            Roadmap
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}
