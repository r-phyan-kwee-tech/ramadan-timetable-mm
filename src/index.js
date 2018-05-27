import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from 'store'
import Routes from 'routes'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'styles/global-styles'
import 'scss/app.css'
import registerServiceWorker from 'utils/registerServiceWorker'
import dateUtil from 'utils/dateUtil'
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#232323',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#ffb300',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

render(
  <MuiThemeProvider theme={theme}>
  <Provider store={configureStore()}>
    <Routes/>
  </Provider>
</MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
dateUtil()