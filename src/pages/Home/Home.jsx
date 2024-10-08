
 import Categories from "./Categories";
import Banner from "./Banner";
 import Estates from "./Estates";
 import {AuthContext} from "../../Providers/authProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";
 



const Home = () => {

    const authInfo = useContext(AuthContext);
  //  console.log(authInfo)

    console.log('api key', import.meta.env.VITE_API_KEY)
    return (
        <div>
            
 <Helmet>
  <title>Home</title>
</Helmet>
            <Banner></Banner>
           
            <Categories></Categories>
           
            <Estates></Estates>
         </div>
    );
};

export default Home; 