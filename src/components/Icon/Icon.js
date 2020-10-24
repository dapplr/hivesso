import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { WHITE_COLOR } from '../../theme'
import { hiveIcon, peakDIcon } from '../../assets/icons'
const { Button, Typography } = require('@material-ui/core')

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      position: 'relative',
      height: props.height || 24,
      width: props.width || 24,
    },
  })()
}

const CustomIcon = (props) => {
  const { height, width, ...other } = props
  const classes = useStyles({ height, width })
  console.log(props)
  return <img className={classes.root} {...other} />
}
export default CustomIcon

const HiveIcon = (props) => {
  return <CustomIcon src={hiveIcon} {...props}></CustomIcon>
}

const PeakDIcon = (props) => {
  return <CustomIcon src={peakDIcon} {...props}></CustomIcon>
}

export { HiveIcon, PeakDIcon }
