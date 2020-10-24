import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Home from '../home'
// import Privacy from '../Privacy'
import Header from '../../components/Header'
// import HowItWorks from '../referrals/HowItWorks'
// import Blog from '../Blog'
const useStyles = (props) => {
  const theme = useTheme()
  return makeStyles({
    rootHeader: {
      position: 'absolute',
      width: '100%',
      zIndex: 999,
    },
    root: {
      maxWidth: theme.breakpoints.values.xl,
      margin: '0 auto',
      position: 'relative',
      background: theme.palette.common.white,
      textAlign: 'center',
    },
  })()
}

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <main>
        <Switch>
          {/* <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/referrals/how-it-works" component={HowItWorks} />
          <Route exact path="/blog/:author/:permlink" component={Blog} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  )
}

export default App
