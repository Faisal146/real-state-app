import aboutPic from '../../assets/about-home.png'
import { Helmet } from 'react-helmet';


const About = () => {

    return (
        <div>
 
 <Helmet>
  <title>About Us</title>
</Helmet>
<section className="relative pt-16">
<div className="container mx-auto">
  <div className="flex mx-4 flex-col justify-center items-center">
    <div className="md:w-1/2 w-full  rounded-xl mr-auto ml-auto -mt-78">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ">
        <img alt="home picture" src={aboutPic} className="w-full align-middle rounded-t-lg" />
        <blockquote className="relative p-8 mb-4">
         
          <h4 className="text-xl font-bold">
            Buy your dream house with us
          </h4>
          <p className="text-md font-light mt-2">
            Putting together a page has never been easier than matching
            together pre-made components. From landing pages presentation
            to login areas, you can easily customise and built your pages.
          </p>
        </blockquote>
      </div>
    </div>

    <div className="w-full md:w-6/12 px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
            
              <h6 className="text-xl mb-1 font-semibold">Secure Payment</h6>
              <p className="mb-4 text-blueGray-500">
                We can process your payments in a secure way. you can send a large ammout with out hasitation
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
            
              <h6 className="text-xl mb-1 font-semibold">
                Best Prices
              </h6>
              <p className="mb-4 text-blueGray-500">
              We can process your payments in a secure way. you can send a large ammout with out hasitation

              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              
              <h6 className="text-xl mb-1 font-semibold">Compare Houses</h6>
              <p className="mb-4 text-blueGray-500">
              We can process your payments in a secure way. you can send a large ammout with out hasitation

              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              
              <h6 className="text-xl mb-1 font-semibold">24/7 Suppport </h6>
              <p className="mb-4 text-blueGray-500">
              We can process your payments in a secure way. you can send a large ammout with out hasitation

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
</section>
        </div>
    );
};

export default About;