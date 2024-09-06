 import { Link, useLocation, useNavigate } from "react-router-dom";
 import { useContext, useState } from "react";
 import { AuthContext } from "../../Providers/authProvider";
const Login = () => {

    const {user,loginUser} = useContext(AuthContext)

const [passShow , setPassShow] = useState(false)


const location = useLocation()
const navigate = useNavigate() 
console.log('location in the login   page', location)
    const  handleLogIn = (e) =>{
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          
          loginUser(email,password).then(
            result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')

               
            }
          ).catch(error => console.log(error))

          console.log(user)
      }
  
  
      return (
          <div className="text-center min-h-screen">
              <h1 className="text-3xl mt-10">Log In. </h1>
              <p>It's great to see you back</p>
  
              <form action="#" onSubmit={handleLogIn}>
                  <input className="py-2 px-8 mt-6 rounded-lg bg-cyan-100 border-2  border-gray-400 my-2 text-xl" type="email" name="email" placeholder="Your Email Address" /> <br />
                  <div className="password">
                    <input className="py-2 px-8 rounded-lg bg-cyan-100 my-2  border-2 border-gray-400 text-xl" type={passShow ? 'text' : 'password'} placeholder="Password" name="password" /> 
                    <span className="showbtn   -ml-10" onClick={ ()=> setPassShow(!passShow)}>
                     {passShow ? 'hide' : 'show'}
                       
                    </span>
                </div> <br />
                  <input className="py-2 px-8 rounded-lg bg-blue-500 text-white my-2 mb-10 border-2 border-gray-400 text-xl"  type="submit" />
  
  
              </form>

              <div className="massage text-center">
                <p>Didn't Have any account <Link className="underline" to="/register">Register Now</Link></p>
              </div>
          </div>
      );
  };
  
  export default Login;