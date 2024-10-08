   import { useEffect, useState } from "react";
import { Link, useParams ,useLoaderData} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
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
        <div >

            {
                estate ? 
                <div className="max-w-6xl py-10 mx-auto px-3 flex gap-8">
             
                    <div className="image mt-4 bg-pink-300 rounded-xl h-96 md:w-1/2 w-full"
                      style={{background: `url(${estate.image}) no-repeat center/cover`}}
                     >
                        <img src="" alt="" />
                    </div>
                        <div className="des py-3">
                            {/* <h1 className="font-extrabold text-2xl">{id}</h1> */}
                            <h1 className="text-2xl pb-2 mb-3 border-b-2 "><span className="font-bold"> {estate.estate_title}</span></h1>
                            <h1 className="text-xl pb-2"><span className="font-bold">Price: </span> {estate.price}</h1>
                            <hr />
                            <p className="mt-3 text-xl"><span className="font-bold">Location: </span>  {estate.location}</p>
                             
                            <p className="mb-3 mt-3"><span className="font-bold">Area: </span>  {estate.area}</p>
                            <p className="mb-3"><span className="font-bold">Segment Name: </span>  {estate.segment}</p>
                            <p className="mb-3"><span className="font-bold">Description: </span>  {estate.description}</p>
                            <p className="mb-3">  <span className="font-bold">Price: </span> {estate.price}</p>
                            <p className="mb-3"><span className="font-bold">Status: </span> {estate.status}</p>
                           <div className="">

                             <p className="font-bold">Facilities:</p>
                             <ul>
                                <li className="ml-5"> {estate.facilities}</li>
                             </ul>
                           </div> 
                          
                            
                       
                        </div>
                       
                    </div>
                 :  <span className="loading loading-dots loading-lg"></span>  
            }
            
            
            <div className="button pt-3 pb-12 w-full text-center">
                <Link to="/" className="btn mx-auto  btn-success rounded-full w-60  border-2 border-gray-500">
                             <FaArrowLeftLong></FaArrowLeftLong>  Go Back
                </Link>    
            </div>       

        </div>
    );
};

export default Details;