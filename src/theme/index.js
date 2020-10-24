import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const DANGER_COLOR = '#D82A48'
const DANGER_COLOR_DARK = '#F21E2B'
const WARNING_COLOR = 'red'
const SUCCESS_COLOR = 'green'

const BLACK_COLOR = '#1A172B'
const WHITE_COLOR = '#F0F0F8'

const HIVE_LOGO_COLOR = '#E31337'

const DEFAULT_THEME_TYPE = 'MARINA'
const FONT_FAMILY = 'Montserrat'

const GREY = {
  darker: '#6F6D78',
  medium: '#C5C3CF',
  light: '#DDDBE5',
  lighter: '#F0F0F8',
}

var activeTheme = {
  main: '#7666C8',
  light: '#F6F1FF',
  borderWidth: 0.25,
  primary: '#7666C8',
  GREY: {
    primary: GREY['medium'],
    secondary: GREY['light'],
  },
  background: '#231D41',
  background50: 'rgba(118,102,200 , 0.7)',
  primaryText: WHITE_COLOR,
  secondaryText: '#1A172B',
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7666C8',
      light: '#F6F1FF',
      LIGHT: {
        borderWidth: 0.5,
        GREY: {
          primary: GREY['darker'],
          secondary: GREY['medium'],
        },
        background: '#E6E3F5',
        primaryText: '#1A172B',
        secondaryText: WHITE_COLOR,
      },
      DARK: {
        borderWidth: 0.25,
        GREY: {
          primary: GREY['medium'],
          secondary: GREY['light'],
        },
        background: '#231D41',
        primaryText: WHITE_COLOR,
        secondaryText: '#1A172B',
      },
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
      black: '#1A172B',
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
    // button: {},
  },
  borderRadius: {
    sm: 8,
  },
  customSpacing: {
    desktop: {
      globalPaddingH: 30,
      headerSpacing: 60,
    },
    mobile: {
      globalPaddingH: 12,
      normalSpacing: 16,
      headerSpacing: 40,
    },
    normalSpacing: 16,
  },
})

export default theme

export { activeTheme, WHITE_COLOR }
