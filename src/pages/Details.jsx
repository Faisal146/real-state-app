   import { useEffect, useState } from "react";
import { Link, useParams ,useLoaderData} from "react-router-dom";
const Details = () => {

    const [estate, setEstate] = useState(null)

    let { id } = useParams();
    let estateId = parseInt(id)

   let data = useLoaderData()

   useEffect(()=>{
     setEstate(data[0].estates.find(i=>i.id === estateId ));

   },[])
  // console.log(data[0].estates)
  
  // console.log(estate.image) 


    return (
        <div  >
            
            <div className="max-w-6xl mx-auto">
             
                    <div className="image mt-4 bg-pink-300 rounded-xl">
                        <img src="src/assets/qZone1.png" alt="" />
                    </div>
                        <div className="des py-3">
                            <h1 className="font-extrabold text-2xl">{id}</h1>
                            <h1 className="text-xl pb-2">estate Price</h1>
                            <hr />
                            <p className="mt-3 text-xl">location: Dhaka</p>
                             
                            <p className="mb-1">Area: 2000sq ft</p>
                            <p className="mb-1">Segment Name: 2000sq ft</p>
                            <p className="mb-1">Description: 2000sq ft</p>
                            <p className="mb-1">Price: 2000sq ft</p>
                            <p className="mb-1">Status: 2000sq ft</p>
                           <div className="">

                             <p>Facilities:</p>
                             <ul>
                                <li>Living room</li>
                                <li>kitchen</li>
                                <li>Swiming pool</li>
                             </ul>
                           </div> 
                        </div>
                        <div className="button pt-3 pb-12">
                            <Link to="/" className="btn mx-auto  btn-success rounded-full w-96 border-2 border-gray-500">
                               Go Back
                            </Link>
                        </div></div>

                      
                    

        </div>
    );
};

export default Details;