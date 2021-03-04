import React, { useState } from 'react';
import useForm from "./useForm";
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Typography
} from '@material-ui/core';
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
  textFields: {
    width: "100%",
    marginBottom: "10px",
    
  },
  button: {
    width: "100%"
  },
  error: {
    color: "red",
    fontSize: "14px",
    padding: "5px"
  }
}));

const Form = () => {

  const stateSchema = {
    firstname: { value: "", error: "" },
    lastname: { value: "", error: "" },
    email: { value: "", error: "" },
  }

  const stateValidatorSchema = {
    firstname: {
      required: true,
      validator: {
        func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
        error: "Imię musi mieć więcej niż jedna litera!"
      }
    },
    lastname: {
      required: true,
      validator: {
        func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
        error: "Nazwisko musi mieć więcej niż trzy litery!"
      }
    },
    email: {
      required: true,
      validator: {
        func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
        error: "Nieprawidłowy format e-mail'a!"
      }
    }
  }

  const { values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
  const { firstname, lastname, email } = values;
  
const onFormSubmit = (e) => {
      e.preventDefault();
      firstname = ""
  }

  const classes = useStyles();


  return (
    <>
      <FormHeader/>
      <FormContainer>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={onFormSubmit}>
          <TextField className={classes.textFields}
            id="outlined-basic"
            label="Imię"
            variant="outlined"
            name="firstname"
            value={firstname}
            onChange={handleOnChange}
          />
          {errors.firstname && dirty.firstname && (
            <Typography className={classes.error}>{errors.firstname}</Typography>
          )}
          <TextField className={classes.textFields}
            id="outlined-basic"
            label="Nazwisko"
            variant="outlined"
            name="lastname"
            value={lastname}
            onChange={handleOnChange}
          />
          {errors.lastname && dirty.lastname && (
            <Typography className={classes.error}>{errors.lastname}</Typography>
          )}
          <TextField className={classes.textFields}
            id="outlined-basic"
            label="e-mail"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
          {errors.email && dirty.email && (
            <Typography className={classes.error}>{errors.email}</Typography>
          )}
          <TextField className={classes.textFields}
            id="standard-multiline-static"
            label="Treść wiadomości"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            
            >
            Wyślij
        </Button >
        </form>
      </FormContainer>
    </>
  )
}

export default Form;
