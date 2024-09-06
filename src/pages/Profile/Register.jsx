 import { useContext } from "react";
import { AuthContext } from "../../Providers/authProvider";
 import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = () => {

  const {createUser,GoogleSign} = useContext(AuthContext)
 
const [passShow , setPassShow] = useState(false)

const location = useLocation()
const navigate = useNavigate()


  const  handleRegister = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    console.log(email,password )

   // create user in firebase

    createUser(email,password).then(
        result =>{

        console.log(result.user)

        navigate(location?.state ? location.state : '/') }
    ).catch(
        error => console.log(error)
    )

    




}
const handleGoogle = () =>{
    GoogleSign().then(
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
                <input className="py-2 px-8 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="text" placeholder="Your Name" name="name"/> <br />

                <input className="py-2 mb-6 px-8 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="email" placeholder="Your Email Address" name="email"/> <br />
                
                <label htmlFor="">Profile Photo : </label> <br />
                <input className="py-2 px-8 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2  " type="file" placeholder="Profile photo" name="photo"/> <br />
                
                <div className="password">
                    <input className="py-2 px-8 rounded-lg bg-cyan-100 my-2  border-2 border-gray-400 text-xl" type={passShow ? 'text' : 'password'} placeholder="Password" name="password" /> 
                    <span className="showbtn   -ml-10" onClick={ ()=> setPassShow(!passShow)}>
                     {passShow ? 'hide' : 'show'}
                       
                    </span>
                </div>
                

                <input className="py-2 px-8 rounded-lg bg-blue-500 text-white my-2  border-2 border-gray-400 text-xl" type="submit" />

                
            </form>
            <div className="provider text-center">
                <button onClick={handleGoogle} className="btn-success btn">Continue With Google</button>
            </div>
            <div className="massage text-center">

                <p>Already have an account <Link className="underline" to="/login">Log In</Link></p>

              </div>
        </div>
    );
};

export default Register;