import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box, Typography, Hidden } from '@material-ui/core'
import { playStoreIcon, appStoreIcon } from '../../assets/icons'
import { getOS } from '../../helpers/platform'

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
    availableOn: {
      color: theme.palette.grey.dark,
      fontWeight: 200,
      paddingBottom: theme.customSpacing.normalSpacing,
    },
    layer2: {
      position: 'absolute',
      right: -100,
      top: -200,
    },
    storeImage: {
      paddingRight: theme.customSpacing.normalSpacing,
      marginLeft: -2,
      objectFit: 'cover',
      width: 130,
      [theme.breakpoints.up('md')]: {
        width: 150,
      },
      [theme.breakpoints.up('lg')]: {
        width: 200,
      },
    },
    imageSM: {},
    stickyButton: {
      position: 'fixed',
      left: -1,
      top: '60%',
      zIndex: 10000,
    },
  })()
}

const StoreLinks = () => {
  const classes = useStyles()
  const platform = getOS()
  return (
    <>
      <Hidden mdDown={true}>
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle1" className={classes.availableOn}>
            Alpha version available on
          </Typography>
          <Box display="flex">
            <img
              src={appStoreIcon}
              className={classes.storeImage}
              alt="app store"></img>
            <a
              href="https://play.google.com/store/apps/details?id=com.dapplr.dapplr"
              target="_blank">
              <img
                src={playStoreIcon}
                className={classes.storeImage}
                alt="play store"></img>
            </a>
          </Box>
        </Box>
      </Hidden>
      <Hidden smUp={true}>
        {platform === 'iOS' || platform === 'Android' ? (
          <div className={classes.stickyButton}>
            <Box display="flex" flexDirection="column">
              <Box display="flex">
                {platform === 'iOS' && (
                  <img
                    src={appStoreIcon}
                    className={classes.storeImage}
                    alt="app store"></img>
                )}
                {platform === 'Android' && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dapplr.dapplr"
                    target="_blank">
                    <img
                      src={playStoreIcon}
                      className={classes.storeImage}
                      alt="play store"></img>
                  </a>
                )}
              </Box>
            </Box>
          </div>
        ) : (
          <div className={classes.stickyButton}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" flexDirection="column">
                {
                  <img
                    src={appStoreIcon}
                    className={classes.storeImage}
                    alt="app store"></img>
                }
                {
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dapplr.dapplr"
                    target="_blank">
                    <img
                      src={playStoreIcon}
                      className={classes.storeImage}
                      alt="play store"></img>
                  </a>
                }
              </Box>
            </Box>
          </div>
        )}
      </Hidden>
    </>
  )
}

export default StoreLinks
