import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import { TextField, } from '@material-ui/core'
import classnames from 'classnames';
import InlineLoading from '../Loading/InlineLoading';

const useStyles = (props) => {
  // const theme = useTheme()
  return makeStyles({
    root: {
      textAlign: 'center'
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
    hasValidations = false,
    className,
    ...other
  } = props
  const classes = useStyles({ backgroundColor, hoverColor, minWidth })
  return (
    <TextField className={classnames(classes.root, className)} {...other} InputProps={{
        endAdornment: (hasValidations === true && null) ||  (isFetching === true ? <InlineLoading></InlineLoading>  : null)
      }} >
      {children}
    </TextField>
  )
}

export default CustomInput
