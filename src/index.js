import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from 'store'
import Routes from 'routes'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'styles/global-styles'
import 'scss/app.css'
import registerServiceWorker from 'utils/registerServiceWorker'
import {default as initDB, saveBulk} from 'utils/db'
const theme = createMuiTheme();

render(
  <MuiThemeProvider theme={theme}>
  <Provider store={configureStore()}>
    <Routes/>
  </Provider>
</MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
initDB().then((result) => {
  console.log(result)
})
// saveBulk(days, "days");