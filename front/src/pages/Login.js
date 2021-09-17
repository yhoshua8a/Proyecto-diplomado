import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
  }));

  

const Login = () => {

  let history = useHistory();
  const classes = useStyles();

  const handleForm = () => {
    // fetch('http://localhost:5000/diplomadouaem-151f6/us-central1/api/login', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email:"yhoshua8a@gmail.com",
    //     password: "1234"
    //   }),
    //   headers: { 'Content-type': 'application/json' }
    // })
    // .then(response => response.json())
    // .then( data => {
    //   console.log("RESPONSE", data)

    //   if(data.auth){
          
    //    history.push("/home")
    //   }

    // })

         
    history.push("/home")

  }
   

    return (

        <>
          <form className={`${classes.root} conteiner-form`} noValidate autoComplete="off">
      <TextField id="user" label="Usuario"/>
      <TextField id="pass" label="Contraseña" />

      <Button variant="contained" color="primary" onClick={handleForm}>
        Entrar
      </Button>
     
    </form>
        </>

        

        
    );
}

export default Login;