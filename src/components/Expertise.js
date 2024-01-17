import React from 'react';
import img6 from '../Images/Video.png';
import img7 from '../Images/Tabish formal photo (1) 1.png';
import img8 from '../Images/Symbol.png';
import { IoArrowBack } from 'react-icons/io5';
import { IoMdArrowForward } from 'react-icons/io';

const Expertise = () => {
  const items = [
    {
      id: 1,
      image: '/Images/icon (4).jpg',
      headline: 'Effective CTAs',
      description:
        'See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.',
    },
    {
      id: 2,
      image: '/Images/icon (5).jpg',
      headline: 'Conversion-Optimized Landing Pages',
      description:
        'Explore a case study where our landing page optimization increased property lead conversion rates by 30%',
    },
    {
      id: 3,
      image: '/Images/icon (6).jpg',
      headline: 'Trust Building with Social Proof',
      description:
        'Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project',
    },
    {
      id: 4,
      image: '/Images/icon (7).jpg',
      headline: 'Mobile-First Success:',
      description:
        'Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.',
    }];
  
  const back = {
    backgroundImage: `url('/images/back3.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    color: '#fff',
  };

  return (
    <div>
      <div>
        <h1 className="text-black font-bold mt-5 text-center text-4xl">Our Expertise in Action</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mt-10 mx-4 md:mx-7 py-2">
          {items.map((item) => (
            <div key={item.id} className="bg-white py-3 px-4 md:px-8">
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className="w-20 h-20 mb-2 mx-auto mt-3"
              />
              <h1 className="text-center font-bold fon">{item.headline}</h1>
              <p className="text-center mt-2 font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 py-10 px-10 md:h-[300px] lg:h-auto" style={back}>
        <h1 className="text-black font-bold mt-5 text-center text-4xl">Your Peace of Mind</h1>
        <p className="text-center mt-2 font-sans w-[90%] mx-auto text-black">
          Through our conversion-focused strategies, we ensure that property seekers are not just
          visitors, but engaged prospects ready to make their next move in the real estate market
        </p>
        <button className="text-white bg-blue-500 font-bold p-2 w-[250px] ml-[50%] transform -translate-x-1/2 rounded-full mt-10 hover:shadow-blue-300 shadow-lg">
          Get started
        </button>
      </div>

      <h1 className="text-black font-bold text-center text-4xl">What Our Pharma Partners Say</h1>
      <p className="text-center mt-2 font-sans w-[90%] mx-auto text-black">
        Driving Transformations, One Brand at a Time
      </p>

      <div className="h-auto md:h-[450px] lg:h-auto w-[90%] md:w-[70%] lg:w-[70%] mx-auto shadow-lg shadow-stone-400 rounded-lg self-center mt-5 d:mt-10 p-10 flex flex-row gap-2 justify-between">
        <div>
          <img src={img6} className="h-[400px] w-full object-cover" alt="" />
        </div>
        <div className="flex flex-col relative md:w-1/2 ml-2 mt-[100px]">
          <div className="flex flex-row items-center mb-3">
            <div>
              <img className="w-12 rounded-full h-12 ml-6" src={img7} alt="" />
            </div>
            <div>
              <p className="font-semibold ml-3">Tabish khan</p>
            </div>
            <div className="ml-auto">
              <img className="w-12 h-12" src={img8} alt="" />
            </div>
          </div>
          <div className="ml-6">
            <p className="font-sans mt-4">
              Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us
              navigate complex regulations while driving remarkable growth.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center py-8">
        <div className="w-12 h-12 hover:bg-blue-500 border border-blue-400 rounded-full flex items-center justify-center hover:cursor-pointer">
          <IoArrowBack size={26} className="text-blue-500 hover:text-white" />
        </div>
        <div className="w-12 h-12 hover:bg-blue-500 border border-blue-400 rounded-full ml-3 flex items-center justify-center hover:cursor-pointer">
          <IoMdArrowForward size={26} className="text-blue-500 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
