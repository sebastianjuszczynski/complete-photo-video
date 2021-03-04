import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer } from './styled';
import FormHeader from '../FormHeader';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '50%',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  textFields1: {
    alignSelf: "center",
    width: "49%",
    marginBottom: "10px",
    marginRight: "2%",
  },
  textFields2: {
    alignSelf: "center",
    width: "49%",
    marginBottom: "10px"
  },
  email: {
    width: "100%",
    marginBottom: "10px",
  },
  button: {
    width: "100%"
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
    <>
    <FormHeader />
    <FormContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.textFields1}
          id="outlined-basic"
          label="Imię"
          variant="outlined"
        />
        <TextField className={classes.textFields2}
          id="outlined-basic"
          label="Nazwisko"
          variant="outlined" />
        <TextField className={classes.email}
          id="outlined-basic"
          label="e-mail"
          variant="outlined"
          required />
        <TextField className={classes.email}
          id="standard-multiline-static"
          label="Treść wiadomości"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button className={classes.button}
          type="submit"
          variant="contained" 
          color="primary">
          Wyślij
        </Button>
      </form>
    </FormContainer>
    </>
  )
}

export default Form;
