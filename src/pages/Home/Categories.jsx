 
const Categories = () => {
    return (
        <div className="py-12  max-w-6xl mx-auto">
            <div className="title">
                <h1 className='text-5xl py-5 text-center'>Categories</h1>
            </div>
            <div className="items flex flex-wrap justify-center gap-4 mt-12">
           
            <div className="item p-5 w-80 h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Residential:</p>
                    <p className="text-center ">Single-family homes, townhouses, apartments, student
housing, senior living communities, vacation rentals etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Commercial</p>
                    <p className="text-center ">Office buildings, retail spaces, warehouses, industrial
facilities, restaurants, entertainment venues etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Land</p>
                    <p className="text-center ">agricultural land, ranches, farms, vineyards, forests,
Plantations etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Industrial:</p>
                    <p className="text-center ">Warehouses, Factories, Production plants, Industrial
                        parks, Cold storage facilities, Power plants, etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Speciality:</p>
                    <p className="text-center ">Hospitals, schools, religious facilities, transportation
                        terminals, convention centers, art galleries etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Luxury</p>
                    <p className="text-center ">Penthouse, Beachfront properties, resorts, private islands,
                        Villas, mansions etc.</p>
                </div>
                <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Government & Public:</p>
                    <p className="text-center ">Military bases, courthouses, libraries, public
                        parks, and community centers etc.</p>
                </div> <div className="item p-5 w-80  h-60 flex flex-col justify-center items-center rounded-2xl bg-blue-500 gap-4 text-white">
                    <p className="text-3xl ">Hospitality:</p>
                    <p className="text-center ">Hotels, motels, resorts, vacation rentals, Lodges,
                        Guesthouses etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;