
 import Categories from "./Categories";
import Banner from "./Banner";
 import Estates from "./Estates";
 import {AuthContext} from "../../Providers/authProvider";
import { useContext } from "react";




const Home = () => {

    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div>
            
            <Banner></Banner>
           
            <Categories></Categories>
           
            <Estates></Estates>
         </div>
    );
};

export default Home; 