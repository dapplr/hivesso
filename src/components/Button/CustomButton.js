import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { WHITE_COLOR } from '../../theme'
const { Button, Typography } = require('@material-ui/core')

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      position: 'relative',
      background: props.backgroundColor || theme.palette.common.white,
      '&:hover': {
        background: props.hoverColor || WHITE_COLOR,
      },
      minWidth: props.minWidth || 'auto',
    },
  })()
}

const CustomButton = (props) => {
  const {
    children,
    backgroundColor,
    hoverColor,
    minWidth,
    className,
    ...other
  } = props
  const classes = useStyles({ backgroundColor, hoverColor, minWidth })
  console.log(props)
  return (
    <Button className={classes.root + ' ' + className} {...other}>
      {children}
    </Button>
  )
}

export default CustomButton
