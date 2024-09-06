 
const Profile = () => {
    return (
        <div className="min-h-screen mx-auto pt-20 max-w-6xl flex flex-wrap justify-center">
            <div className="mr-10 pr-10 border-r-2 border-gray-600 max-h-72">
                 <div className="profile-pic bg-blue-400 w-72 h-72  rounded-full " >
                <img src="" alt="profile pic" />
            </div>
            </div>
           
            <div className="">
                <h1 className="text-5xl py-5">SIam Hossain</h1>
                <p className="text-xl mb-10">Email : <span className="font-bold">siam204204@gmail.com</span></p>
                <button className='btn btn-info'> Log Out</button>
            </div>

        </div>
    );
};

export default Profile;