import React from 'react';

const Service = () => {
  const items = [
    { id: 1, image: "/Images/Group 117.jpg", headline: "Automotive SEO", description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today" },
    { id: 2, image: "/Images/Group 117 arrow.png", headline: "PPC Precision", description: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns." },
    { id: 3, image: "/Images/Group 117 (1).png", headline: "Social Acceleration", description: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection." },
    { id: 4, image: "/Images/Group 117 (2).png", headline: "Content Excellence", description: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement." },
    { id: 5, image: "/Images/Group 117 8.png", headline: "Web Design", description: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions." },
    { id: 6, image: "/Images/Group 117 (3).png", headline: "Data-Driven Insights", description: "Leverage data to refine your strategies, making informed decisions that drive revenue growth." },
    { id: 7, image: "/Images/Group 117 (4).png", headline: "End-to-End Solutions", description: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey." },
    { id: 8, image: "/Images/Group 117 (5).png", headline: "Video marketing", description: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories." },
  ];

  return (
    <div className='bg-slate-100 md:h-[900px]'>
      <h1 className='text-black font-bold mt-8 md:mt-[100px] text-center text-4xl pt-14'>
        Our Service Offerings
      </h1>
      <p className='text-slate-500 text-center'>
        Strategies that Drive Property Market Excellence
      </p>
      <div className='grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 mt-10 mx-4 md:mx-7 py-2'>
        {items.map((item) => (
          <div key={item.id} className='bg-white py-3 px-4 md:px-8'>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className='w-20 h-20 mb-2 mx-auto mt-3'
            />
            <h1 className='text-center font-bold'>{item.headline}</h1>
            <p className='text-center mt-2 font-sans'>{item.description}</p>
          </div>
        ))}
      
        <button className='text-white bg-blue-500 font-bold p-2 w-52 ml-[140px] md:w-[250px]  md:ml-[550px] h-12 rounded-full mb-10 hover:shadow-blue-300 shadow-lg'>
          Get Started
        </button>

      
      </div>


      
    </div>
  );
};

export default Service;
