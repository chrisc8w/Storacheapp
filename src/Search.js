import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = theme => ({
  container: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '12%'
  },
  address: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '35%'
  },
  submit:{
    marginTop: 16
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Search extends React.Component {
  state = {
    query: ''
  }

  handleInputChange = () => {
    this.setState({query: this.search.value})
  }

  handleSubmit = () => {}

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
      <TextField label="Location" className={classes.address} variant="outlined" margin="normal" ref={input => this.search += " " + input}/>
      <TextField label="Length"  InputProps={{
            startAdornment: <InputAdornment position="start">Feet</InputAdornment>,
          }}className={classes.textField}variant="outlined" margin="normal" type="number" ref={input => this.search += " " + input}/>
      <TextField label="Width" InputProps={{
            startAdornment: <InputAdornment position="start">Feet</InputAdornment>,
          }}className={classes.textField}variant="outlined" margin="normal" type="number" ref={input => this.search += " " + input}/>
      <TextField label="Height" InputProps={{
            startAdornment: <InputAdornment position="start">Feet</InputAdornment>,
          }}className={classes.textField} variant="outlined" margin="normal" type="number" ref={input => this.search += " " + input}/>
        <Button variant="outlined" className={classes.submit} type="submit" color="primary" value="Submit">Search</Button>
    </form>)

  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
