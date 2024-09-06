import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 
const Estates = () => {
 const [ResidentialData, setResidentialData] = useState(0);
    useEffect(()=>{
       fetch("/estates.json").then(res => res.json()).then(data => setResidentialData(data))
    }, [])

  //  console.log(ResidentialData[0].estates)

  ResidentialData ?  console.log(ResidentialData[0].estates): console.log("loading")

    return (
        <div className="max-w-6xl mx-auto">
             <div className="title">
                <h1 className='text-5xl py-5 text-center'>Popular Residential Estates</h1>

               <div className="items flex gap-4 justify-center flex-wrap mt-5 mb-10  py-4 px-6 rounded-xl">


                  {  ResidentialData ?
                         ResidentialData[0].estates.map(item => {
                            return(
                        <div key={item.id} className="item w-80 bg-cyan-300 rounded-xl ">
                        <div className="image bg-orange-300 rounded-xl h-60 w-full" style={{background: `url(${item.image}) no-repeat center/cover`}}>
                            
                        </div>
                        <div className="des py-3 px-4">
                            <h1 className="font-extrabold text-2xl">{item.id}</h1>
                            <h1 className="text-xl pb-2">estate Price</h1>
                            <hr />
                            <p className="mt-3 text-xl">location: Dhaka</p>
                            <p className="mb-1">area: 2000sq ft</p>
                            
                        </div>
                        <div className="button px-4 pb-3">
                            <Link  to={`/details/${item.id}`} className="btn btn-success rounded-full w-full  border-2 border-gray-500">
                                View Property
                            </Link>
                        </div>
                    </div>
                    )
                         }) :  <span className="loading loading-dots loading-lg"></span>   
                       
                    }  
 

                    
                </div>
            </div>
        </div>
    );
};

export default Estates;