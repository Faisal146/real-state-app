 import { Link, useLocation, useNavigate } from "react-router-dom";
 import { useContext, useState } from "react";
 import { AuthContext } from "../../Providers/authProvider";
 import {  FaGithub, FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";


const Login = () => {

    const {user,loginUser, githubSign, GoogleSign} = useContext(AuthContext)

const [passShow , setPassShow] = useState(false)




const location = useLocation()
const navigate = useNavigate() 
console.log('location in the login   page', location)
    const  handleLogIn = (e) =>{
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value

           // passworld verifications

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isMinLength = password.length >= 6;

    if (!hasUppercase) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain atleast one Uppercase',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      }else if(!hasLowercase){
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain atleast one Lowercase',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

      }else if(!isMinLength){
        Swal.fire({
            title: 'Error!',
            text: 'Password must be 6 charecters long',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

      } else {
        console.log('pass okey');

           //login user in firebase

     loginUser(email,password).then(
            result => {
                console.log('email user' , result.user)
                navigate(location?.state ? location.state : '/')
               
            }
          ).catch(error => {
            let msg;
            if(error == 'FirebaseError: Firebase: Error (auth/invalid-credential).'){
                msg = 'information Did not Match the record'
            }
            Swal.fire({
                title: 'Error!',
                text: msg ? msg : error,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          })

      }
          
         

          console.log(user)
      }
      const handleGoogle = () =>{
        GoogleSign().then(
         result =>{
    
           console.log(result.user)
    
            navigate(location?.state ? location.state : '/') }).catch(
           error =>console.log(error)
         )
        
     }
    
     const handleGithub = () => {
        githubSign().then(
            result =>{
       
               console.log(result.user)
       
               navigate(location?.state ? location.state : '/') }).catch(
              error =>console.log(error)
            )
     }
    
     
  
      return (
          <div className="text-center min-h-screen">
            
 <Helmet>
  <title>Log in</title>
</Helmet>
              <h1 className="text-3xl mt-10">Log In. </h1>
              <p>It's great to see you back</p>
  
              <form action="#" onSubmit={handleLogIn}>
                  <input className="py-2 px-4 mt-6 rounded-lg bg-cyan-100 border-2  border-gray-400 my-2 text-xl" type="email" name="email" placeholder="Your Email Address" /> <br />
                  <div className="password relative">
                    <input className="py-2 px-4 rounded-lg bg-cyan-100 my-2  border-2 border-gray-400 text-xl" type={passShow ? 'text' : 'password'} placeholder="Password" name="password" /> 
                    <span  className="showbtn absolute top-5" style={{left: 'calc(50% + 110px)'}}  onClick={ ()=> setPassShow(!passShow)}>
                    {passShow ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                       
                    </span>
                </div> <br />
                  <input className="py-2 px-8 rounded-lg bg-blue-500 text-white my-2 mb-10 border-2 border-gray-400 text-xl"  type="submit" />
  
  
              </form>

              <div className="provider text-center flex flex-wrap gap-3 justify-center my-5">
                <button onClick={handleGoogle} className="btn-primary btn"><FaGoogle></FaGoogle> Continue With Google</button>
                <button onClick={handleGithub} className="btn-info btn"><FaGithub></FaGithub> Continue With Github</button>
            </div>

              <div className="massage text-center">
                <p>Donot Have any account ? <Link className="underline" to="/register">Register Now</Link></p>
              </div>
          </div>
      );
  };
  
  export default Login;