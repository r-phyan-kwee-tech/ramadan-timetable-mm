import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import scss from '../../assets/scss.png'
import babel from '../../assets/babel.png'
import webpack from '../../assets/webpack.png'
import rabbit from '../../assets/rabbit.png'
import material from '../../assets/material.svg'
import reactlogo from '../../assets/react.svg'
import reduxlogo from '../../assets/logo.svg'
import styleComponent from '../../assets/styleComponent.png'
import { Link } from 'react-router-dom';
const styles = theme => ({
  root: {

    display: `flex`,
    flexDirection: `column`
  },
  text: {
    alignSelf: `center`,
    padding: `0.2em 0`
  },
  img: {
    alignSelf: `center`
  },
})
const LicenseFragment = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.text} component="div">
        React
    </Typography>
      <Link target="_blank" className={classes.img} to="https://reactjs.org/"><img src={reactlogo} width="60" height="60" /></Link>
      <Typography className={classes.text} component="div">
        Redux
          </Typography>
      <Link target="_blank" className={classes.img} to="https://redux.js.org/"><img src={reduxlogo} width="60" height="60" /></Link>

      <Typography className={classes.text} component="div">
        Styled Components
          </Typography>
      <Link target="_blank" className={classes.img} to="https://www.styled-components.com/"><img className={classes.img} src={styleComponent} width="60" height="60" /></Link>
      <Typography className={classes.text} component="div">
        Material UI
          </Typography>
      <Link target="_blank" className={classes.img} to="https://material-ui.com/"><img className={classes.img} src={material} width="60" height="50" /></Link>
      <Typography className={classes.text} component="div">
        Babel JS
          </Typography>
      <Link target="_blank" className={classes.img} to="http://babeljs.io/"><img className={classes.img} src={babel} width="60" height="50" /></Link>

      <Typography className={classes.text} component="div">
        SCSS
          </Typography>
      <Link target="_blank" className={classes.img} to="https://sass-lang.com/"><img className={classes.img} src={scss} width="60" height="60" /></Link>

      <Typography className={classes.text} component="div">
        Web Pack
          </Typography>
      <Link target="_blank" className={classes.img} to="https://webpack.js.org/"><img className={classes.img} src={webpack} width="60" height="60" /></Link>
      <Typography className={classes.text} component="div">
        Rabbit Node
          </Typography>
      <Link target="_blank" className={classes.img} to="https://github.com/Rabbit-Converter/Rabbit-Node"><img className={classes.img} src={rabbit} width="60" height="60" /></Link>


    </div>
  )
};

export default withStyles(styles)(LicenseFragment);