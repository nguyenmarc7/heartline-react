import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignIn() {
  
  const classes = useStyles();
  const [formData, setFormData] = useState({username: '', password: ''})
  
  const handleSubmit = () => {console.log(formData)}

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start">

        <TextField 
          id="outlined-username" 
          label="Username" 
          variant="outlined" 
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}/>
      
        <br/>

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

        <br/>

        <Button
        variant="contained" 
        size="large" 
        color="primary" 
        className={classes.margin} 
        onClick={handleSubmit}>
        Submit
        </Button>

      </Grid>
    </form >
  )
}

export default SignIn;
