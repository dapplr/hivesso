import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

export const DANGER_COLOR = '#D82A48'
export const DANGER_COLOR_DARK = '#F21E2B'
export const WARNING_COLOR = 'red'
export const SUCCESS_COLOR = 'green'

export const BLACK_COLOR = '#1A172B'
export const WHITE_COLOR = '#F0F0F8'

export const HIVE_LOGO_COLOR = '#E31337'
export const HIVE_LOGO_HIGHLIGHTED_COLOR = '#CA082A'
export const FONT_FAMILY = 'Montserrat'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7666C8',
      light: '#F6F1FF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    common: {
      grey: {
        darker: '#6F6D78',
        medium: '#C5C3CF',
        light: '#DDDBE5',
        lighter: '#F0F0F8',
      },
    },
    grey: {
      dark: '#6F6D78',
    },
  },
  typography: {
    // subtitle1: {
    //   fontSize: 12,
    // },
    color: {
      primary: '#1A172B',
    },
    body1: {
      // fontWeight: 400,
    },
    size: {
      normal: 16,
    },
    button: {
      textTransform: "none"
    }
  },
  borderRadius: {
    sm: 8,
  },
  customSpacing: {
    desktop: {
      globalPaddingH: 400,
      headerSpacing: 60,
    },
    mobile: {
      globalPaddingH: 40,
      normalSpacing: 16,
      headerSpacing: 40,
    },
    normalSpacing: 16,
  },
})

export default theme

