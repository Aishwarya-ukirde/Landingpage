import React from 'react'
import img5 from '../Images/bro.jpg'

const Property = () => {
    const items=[
        { id: 1, image: "/Images/icon.jpg", headline:"Call-to-Action Optimization", description: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates." },
        { id: 2, image: "/Images/icon (1).jpg",headline:"Landing Page Efficiency", description: "Understand and connect with your ideal property buyers." },
        { id: 3, image: "/Images/icon (2).jpg",headline:"Social Proof Utilization", description: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action" },
        { id: 2, image: "/Images/icon (3).jpg",headline:"Mobile-Friendly Experience", description: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers." },

    ]
  return (
    <div>
      <h1 className="text-black font-bold mt-5 text-center text-4xl">
      Driving Property Inquiries to Conversions      </h1>
      <p className='font-light text-center'>Streamlined Strategies for Real Estate Success</p>
        <div className="flex justify-center items-center mt-4 flex-col md:flex-row">
    
      <div className="flex flex-col md:flex-row justify-between  mt-5 w-full md:w-3/4">
        <div className="md:w-1/2">
          <img src={img5} className='p-7 mt-5' alt="" />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-7 p-10">
          <h1 className="text-black font-semibold text-3xl pr-2">
          Optimized Path to Property Purchase          </h1>
          <p className='font-sans'>
          In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
          </p>
          <button className='text-white bg-blue-500 font-bold p-2 w-[250px]  ml-[25%]  rounded-full md:ml[150px] mt-10 hover:shadow-blue-300 shadow-lg'>Get started</button>
        </div>
      </div>
    
        </div>
        <div>
        <h1 className="text-black font-bold mt-5 text-center text-4xl">Driving Property Inquiries to Conversions</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mt-10 mx-4 md:mx-7 py-2'>
        {items.map((item) => (
          <div key={item.id} className='bg-white py-3 px-4 md:px-8'>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className='w-20 h-20 mb-2 mx-auto mt-3'
            />
            <h1 className='text-center font-bold fon'>{item.headline}</h1>
            <p className='text-center mt-2 font-sans' >{item.description}</p>
          </div>
        ))}
      
        

      
      </div>
      </div>
    
    </div>
  )
}

export default Property
