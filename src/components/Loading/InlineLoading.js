import React from 'react'
import Loader from 'react-loader-spinner'

const InlineLoading = (props) => {
  const {
    size = 20,
    color = 'black',
    className,
    ...other
  } = props
  return (
    <Loader
         type="TailSpin"
         color={color}
         height={size}
         width={size}
      />
  )
}

export default InlineLoading
