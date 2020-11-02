import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { WHITE_COLOR } from '../../theme' 
import { TextField, InputAdornment } from '@material-ui/core'
import classnames from 'classnames';
import InlineLoading from '../Loading/InlineLoading';

const useStyles = (props) => {
  // const theme = useTheme()
  return makeStyles({
    root: {
      
    },
  })()
}

const CustomInput = (props) => {
  const {
    children,
    backgroundColor,
    hoverColor,
    minWidth,
    isFetching = false,
    isValidated = false,
    hasValidations = false,
    className,
    ...other
  } = props
  const classes = useStyles({ backgroundColor, hoverColor, minWidth })
  return (
    <TextField className={classnames(classes.root, className)} {...other} InputProps={{
        endAdornment: (hasValidations === true && null) ||  (isFetching === true ? <InlineLoading></InlineLoading> : isValidated === true ? null : null)
      }} >
      {children}
    </TextField>
  )
}

export default CustomInput
