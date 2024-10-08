import { useContext } from "react";
import { AuthContext } from "../../Providers/authProvider";
import { Helmet } from "react-helmet";

 


const Profile = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        
        <div className="min-h-screen mx-auto pt-20 max-w-6xl flex flex-wrap justify-center">
            

            <Helmet>
  <title>Profile</title>
</Helmet>
            <div className="mr-10 pr-10 border-r-2 border-gray-600 max-h-72">
                 {/* <div className="profile-pic bg-blue-400 w-72 h-72  rounded-full " > */}
                <img src={user.photoURL} alt="profile pic" />
            {/* </div> */}
            </div>
           
            <div className="">
                <h1 className="text-5xl py-5">{user.displayName}</h1>
                <p className="text-xl mb-10">Email : <span className="font-bold">{user.email}</span></p>
                <button className='btn btn-info'> Log Out</button>
            </div>

        </div>
    );
};

export default Profile;