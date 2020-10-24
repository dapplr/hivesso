import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { WHITE_COLOR } from '../../theme'
const { Button, Typography } = require('@material-ui/core')

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      position: 'relative',
      textAlign: 'center',
    },
  })()
}

const UnderProgress = (props) => {
  const { ...other } = props
  const classes = useStyles({})
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        We are currently working on our WebApp. Till then you can follow the
        below links.
      </Typography>
    </div>
  )
}

export default UnderProgress
