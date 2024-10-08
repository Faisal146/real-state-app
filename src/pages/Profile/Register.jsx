 import { useContext } from "react";
import { AuthContext } from "../../Providers/authProvider";
 import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'


const Register = () => {

  const {createUser,GoogleSign ,githubSign , updateProfilee} = useContext(AuthContext)
 
const [passShow , setPassShow] = useState(false)

const location = useLocation()
const navigate = useNavigate()


  const  handleRegister = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photoURL = e.target.photo.value
    
    console.log(email,password, name, photoURL )

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

           //create user in firebase

    createUser(email,password).then(
        result =>{

        console.log(result.user)
          updateProfilee(name, photoURL)


        navigate(location?.state ? location.state : '/') }
    ).catch(
        error => console.log(error)
    )

      }



    




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
        <div className="min-h-screen" >
            <h1  className="text-3xl mt-10 text-center mb-2" >Create Your New Accout</h1>
            <p className="text-xl text-center mb-5"> Sign In access all freatures</p>

            <form action="#" onSubmit={handleRegister} className="text-center">
                <input className="py-2 px-4 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="text" placeholder="Your Name" name="name"/> <br />

                <input className="py-2 mb-6 px-4 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="email" placeholder="Your Email Address" name="email"/> <br />
                
                <input className="py-2 mb-6 px-4 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="text" placeholder="Your Profile Photo URL" name="photo"/> <br />
                
                <div className="password relative">
                    <input className="py-2  px-4 rounded-lg bg-cyan-100 my-2  border-2 border-gray-400 text-xl" type={passShow ? 'text' : 'password'} placeholder="Password" name="password" /> 
                    <span className="showbtn absolute top-5" style={{left: 'calc(50% + 110px)'}} onClick={ ()=> setPassShow(!passShow)}>
                     {passShow ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                       
                    </span>
                </div>
                

                <input className="py-2 px-8 rounded-lg bg-blue-500 text-white my-2  border-2 border-gray-400 text-xl" type="submit" />

                
            </form>

            <div className="provider text-center flex gap-3 justify-center my-5">
                <button onClick={handleGoogle} className="btn-primary btn"><FaGoogle></FaGoogle> Continue With Google</button>
                <button onClick={handleGithub} className="btn-info btn"><FaGithub></FaGithub> Continue With Github</button>
            </div>
           
            <div className="massage text-center">

                <p className="text-xl mb-9">Already have an account <Link className="underline" to="/login">Log In</Link></p>
           
              </div>
        </div>
    );
};

export default Register;