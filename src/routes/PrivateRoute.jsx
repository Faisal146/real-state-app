import  { useContext } from 'react';
import { AuthContext } from '../Providers/authProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const location = useLocation();



    const{ user, loader } = useContext(AuthContext)

    if(loader){
        return ( <div className="text-center py-20  ">
            <span className="loading loading-dots loading-lg"></span>
        </div>
        )
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;