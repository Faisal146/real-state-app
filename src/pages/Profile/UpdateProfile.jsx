 
const UpdateProfile = () => {

    const  handleRegister = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        console.log(email,password )
    
        // create user in firebase
    
        // createUser(email,password).then(
        //     result => console.log(result.user)
        // ).catch(
        //     error => console.log(error)
        // )
    
    
    
    
    
    }

    return (
        <div className="min-h-screen">
            <h1  className="text-3xl mt-10 text-center mb-2" >Update Your Profile</h1>
            <p className="text-xl text-center mb-5">correct your informations</p>

            <form action="#" onSubmit={handleRegister} className="text-center">
                <input className="py-2 px-8 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="text" placeholder="Your Name" name="name"/> <br />

                <input className="py-2 mb-6 px-8 mt-6 rounded-lg bg-cyan-100 border-2 border-gray-400 my-2 text-xl" type="email" placeholder="Your Email Address" name="email"/> <br />
                
                <label htmlFor="">Profile Photo : </label> <br />
                <input className="py-2 px-8 rounded-lg  bg-cyan-100 border-2 border-gray-400 my-2  " type="file" placeholder="Profile photo" name="photo"/> <br />
                
               
                

                <input className="py-2 px-8 rounded-lg bg-blue-500 text-white my-2  border-2 border-gray-400 text-xl" type="submit" />

                
            </form>
            <div className="massage text-center">

             

              </div>
        </div>
    );
};

export default UpdateProfile;