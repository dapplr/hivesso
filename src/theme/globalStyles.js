import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'

const useStyles = (props) => {
  const theme = useTheme()
  // console.log(theme)
  return makeStyles({
    root: {
      paddingLeft: theme.customSpacing.mobile.globalPaddingH,
      paddingRight: theme.customSpacing.mobile.globalPaddingH,
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.customSpacing.desktop.globalPaddingH,
        paddingRight: theme.customSpacing.desktop.globalPaddingH,
      },
    },
  })()
}

export default useStyles
