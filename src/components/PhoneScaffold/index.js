import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import classnames from 'classnames'

// import globalStyles from '../../theme/globalStyles'
// import { Typography, Box } from '@material-ui/core'

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      // position: 'absolute',
    },
    link: {
      color: theme.typography.color.primary,
      textDecoration: 'none',
      paddingLeft: 2 * theme.customSpacing.normalSpacing,
    },
    layer1: {
      position: 'absolute',
      right: 0,
    },
    imageSize: {
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: 'auto',
      },
    },
    imageSM: {},
  })()
}

const PhoneScaffold = ({ backgroundImage, image, size }) => {
  const classes = useStyles()
  return (
    <div className={classnames(classes.root, size === 'md')}>
      <div className={classes.layer2}>
        <img
          src={image}
          className={classnames(
            classes.imageSize,
            size === 'sm' && classes.imageSM
          )}
          alt="mainImage"
        />
      </div>
    </div>
  )
}

export default PhoneScaffold
