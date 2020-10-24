import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import classnames from 'classnames'

import { dapplrIcon } from '../../assets/icons'
import globalStyles from '../../theme/globalStyles'
import { Typography, Box } from '@material-ui/core'

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.customSpacing.mobile.globalPaddingH,
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        paddingTop: theme.customSpacing.desktop.globalPaddingH,
      },
      // alignItems: 'center',
    },
    link: {
      color: theme.typography.color.primary,
      textDecoration: 'none',
      paddingLeft: 2 * theme.customSpacing.normalSpacing,
    },
    logo: {
      height: '30px',
      [theme.breakpoints.up('md')]: {
        width: 'auto',
      },
    },
  })()
}

const Header = () => {
  const classes = useStyles()
  const globalClasses = globalStyles()
  console.log(globalClasses)
  return (
    <div className={classnames(classes.root, globalClasses.root)}>
      <Link to="/">
        <img src={dapplrIcon} alt="Logo" className={classes.logo} />
      </Link>
      <header>
        <Box display="flex">
          <Typography>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Typography>
          <Typography>
            <Link className={classes.link} to="/privacy">
              Privacy policy
            </Link>
          </Typography>
        </Box>
      </header>
    </div>
  )
}

export default Header
