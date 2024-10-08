 
const Footer = () => {
    return (
        <div className="bg-black pt-6 text-white">
            <div className="items md:flex block px-4  items-center max-w-6xl mx-auto">
                <div className="item flex-1 my-4 text-center  mr-3">
                    <h1 className="text-3xl pb-2">Sweet Home</h1>
                    <h1 className="text-gray-400">Find the suitable and affordable home
for your perfect Family</h1>
                </div>
                <div className="item underline flex-1 text-center md:border-l-2 md:border-r-2 pages">
                    <ul>
                        <li>Home</li>
                        <li>Estates</li>
                        <li>About</li>
                    </ul>

                </div>
                <div className="flex-1 underline text-center">
                    <ul>
                        <li>Profile</li>
                        <li>Update Profile</li>
                        <li><button className="btn btn-info btn-sm mt-3">Log Out </button></li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t-2 py-3 mt-6">
                <p>&copy; all rights reserved 2024.</p>
            </div>
        </div>
    );
};

export default Footer;