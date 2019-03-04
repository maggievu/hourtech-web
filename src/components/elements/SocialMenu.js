import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  rootFlex: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
}

const pages = ['facebook', 'instagram', 'twitter']
const navLinks = pages.map((page, i) => (
    <li
      style={{flexGrow: 1}}
      key={i}
    >
      <a href={'www.' + page + '.com'}>
        <span className={'fab fa-' + page}>{page}</span>
      </a>
    </li>
  )
)

const SocialMenu = (props) => (
  <nav className={props.className}>
    <ul className={props.classes.rootFlex}>{navLinks}</ul>
  </nav>
)

export default withStyles(styles)(SocialMenu)