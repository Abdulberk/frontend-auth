import React, { ReactEventHandler } from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import {RiKeyFill} from "react-icons/ri"
import {FaUserCircle} from "react-icons/fa"
import {useNavigate} from 'react-router-dom'
import axios, { AxiosResponse } from 'axios';
import Home from './Home';
import Profile from './Profile';
import App from '../App';
import NavbarCom from '../components/NavbarCom';

const LoginImage = styled.img`

object-fit: cover;
width: 100%;
height: 100px;
src: url(${(props) => props.src});
user-select: none;

`

const LoginImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
margin-bottom: 25px;

`
const LoginContainer = styled.div`
display:flex;
flex-direction:column;
width: 50%;
justify-content: center;
align-items: center;
margin: 0 auto;
margin-top: 5%;
background-color: #F7ECDE;
border-radius: 10px;
box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);

`
const LoginTitle = styled.h1`
font-size: 2rem;
color: #7FBCD2;

`
const InputContainer = styled.div`

position: relative;
width: 75%;

`
const LoginInput = styled.input`
width: 100%;
padding: 5px;
margin: 5px;
border-radius: 8px;
outline: none;
border: none;
box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
padding-left:70px;

text-left: 25px;
font-size: 1.5rem;
font-family: 'Roboto', sans-serif;
text-align: left;

`
function Login() {

  const [userInput, setUserInput] = useState<String | null>("");
  const [passInput, setPassInput] = useState<String| null>("");
  const [isLoggedin, setIsLoggedin] = useState<Boolean>(false);
  const [isLoading,setIsLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false);
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState<String | null>("");
  
    const navigate = useNavigate();

    type User = {
      username: String | null;
      password: String | null;
     
    } 
  
  const [currentUser, setCurrentUser] = useState<User>({
    username: "" ,
    password: ""
  });

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {

    event.preventDefault();
    setIsLoading(true);
    console.log("submit handler içindeki loading true oldu")
    setCurrentUser(
      prev => {
        return {...prev,
        username: userInput,
        password: passInput}
      }
    );
    console.log("submit handler içindeki loading true oldu")
    setCount(prev=>prev+1)

    console.log(currentUser);
    

  }
  
   useEffect(() => {

    console.log("yükleniyor...");
  
     axios.post("https://reqres.in/api/login",
    
    {
      email: currentUser.username,
      password: currentUser.password
   })
   
   .then((response: AxiosResponse<any, any>) => {
      console.log(response)
      if (response.status=== 200) {
  
        console.log("user exists");
        setIsLoading(false);
        console.log("yüklenme tamamlandı");
  
        setIsLoggedin(true)
        setAuth(response.data.token)
        setCount(prev=>prev+1)

      }
       else {
        setIsLoading(false);
        console.log("yüklendi ancak hata oluştu");
        setAuth(null)
        console.log("user does not exist");
      
        setIsLoggedin(false);
        setCount(prev=>prev+1)

      }
  
       })
        
  .catch((error:any) => {
      
    setAuth(prev => prev) 
      setIsLoggedin(false)
      setIsLoading(false);
  
      console.log(error + " hata")
      setCount(prev=>prev+1)
  
    }
    )
    
  }, [currentUser.username, currentUser.password])
    
     if (isLoggedin)   {

      const timer = setTimeout(() => {
  
      console.log("redirecting to profile page");
       navigate(`users/${userInput}`, {state: currentUser});
      }, 2000);

      clearTimeout(timer);
      
    }

 
  



  return (
    <div>

<Form >
  
   <LoginContainer>

   <LoginImageContainer>
  <LoginImage src= {require('../right.png')}/>
  </LoginImageContainer>


  <LoginTitle>Login your account</LoginTitle>

  <InputContainer>
  
  <FaUserCircle fontSize  = "30px" color = "#747474" style = {{position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px"}}/> 
<LoginInput onChange = {(e:React.ChangeEvent<HTMLInputElement>)=> setUserInput(e.target.value)} placeholder = "Username"/>
</InputContainer>

<InputContainer>
<RiKeyFill style={{left:"20px" , top: "50%",transform:"translateY(-75%)", color: "#747474" ,fontSize:"32px", position:"absolute",}}/>
  <LoginInput onChange = {(e:React.ChangeEvent<HTMLInputElement>)=> setPassInput(e.target.value)} style = {{marginBottom:"20px"}} placeholder = "Password"/>

  </InputContainer>

  <Button onClick ={submitHandler} className={isLoading ? 'lds-dual-ring' : undefined} type='submit' style = {{backgroundColor:"#7FBCD2", marginBottom:"20px"}} size = "lg" 
  variant="primary">{!isLoading ? "Login" : undefined}</Button>
   
  


 </LoginContainer>

</Form>



    </div>

  )
}



export default Login;
