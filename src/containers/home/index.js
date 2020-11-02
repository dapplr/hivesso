import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import AnimateLine from '../../components/AnimateLine/AnimateLine'
import CustomInput from '../../components/Input/CustomInput'
import { fetchUser } from '../../modules/user'
import Loader from 'react-loader-spinner'

const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    root: {
      position: 'relative',
      padding: theme.customSpacing.mobile.globalPaddingH,
      textAlign: 'center'
    },
  })()
}

const Home = (props) => {
  const classes = useStyles();
return <div className={classes.root}>
   <CustomInput label="Username" variant="outlined" />
   <AnimateLine/>
  </div>;
} 
  


const mapStateToProps = ({ user }) => ({
  user
})


export default connect(mapStateToProps, { fetchUser })(Home)
