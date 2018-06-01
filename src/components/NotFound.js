import React from 'react';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  a: {
    textDecoration: `inherit`,
    color: `inherit`
  },
  notFoundWrapper: {
    display: `flex`,
    justifyContent: `center`
  },
  notFoundText: {
    flexDirection: `row`,
    fontFamily: `Open Sans, sans-serif`,
    fontSize: `calc(6em)`
  }

})

const NotFound = (props) => {
  const {classes} = props;
  return (
    <div>
      <div className={classes.notFoundWrapper}>
        <h1 className={classes.notFoundText}>404</h1>
      </div>
      <div className={classes.notFoundWrapper}>
        <Link to="/" className={classes.a}>
          <Button variant="raised" color="primary">
            Back to Home
            <Home/>
          </Button>
        </Link>
      </div>

    </div>
  )
}
export default withStyles(styles)(NotFound);