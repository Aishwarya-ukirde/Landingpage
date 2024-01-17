import React from "react";
import img from '../Images/Osumare Logo-01 (2) 4.png';
import img1 from '../Images/we_need_marketing-removebg-preview.png';
import img2 from '../Images/cuate.jpg'
const Header = () => {
  const backstyle = {
    backgroundImage: `url('/images/background-complete 1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    color: '#fff',
  };

  return (
    <div>
    <div style={backstyle}>
      <div className="flex justify-between items-center">
        <img src={img} alt="" className="ml-5" />
        <button className=' text-black border border-black px-4 py-2 rounded-full mr-5'>Contact us</button>
      </div>
      <div className="text-center mt-8">
      <h1 className="text-4xl font-bold">
          <span className="text-black">Elevate</span>{" "}
          <span className="text-blue-500">Real Estate Success </span>
          <span className="text-black">with</span>{" "}
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-black">
          Osumare's Digital Expertise
        </h2>
        <p className="text-lg text-slate-400">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full  font-bold mt-4 w-[250px] hover:shadow-blue-300 shadow-lg">
          Get Started
        </button>
        </div><img src={img1} alt="" className=' w-100 h-100 mt-n-18 mt-8' />
        </div>
        <h1 className="text-black font-bold mt-5 text-center text-4xl">
        Real Estate Digital Mastery
      </h1>
        <div className="flex justify-center items-center flex-col md:flex-row">
    
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 w-full md:w-3/4">
        <div className="md:w-1/2">
          <img src={img2} className='p-7 mt-5' alt="" />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0 md:p-1 p-7 ml-0 md:ml-3 ">
          <h1 className="text-black font-semibold text-3xl pr-2 ">
            Unlock the Potential of Digital Real Estate Excellence
          </h1>
          <p className="font-sans md:w-1/2">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <button className='text-white bg-blue-500 font-bold p-2 w-[250px]  ml-[25%]  rounded-full md:ml[150px] mt-10 hover:shadow-blue-300 shadow-lg'>Get started</button>
        </div>
      </div>
    
        </div>
      
      
    
    </div>
  );
};

export default Header;
