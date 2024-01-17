import React from 'react'
import img4 from '../Images/rafiki.jpg'

const Navigation = () => {
    const items = [
        { id: 1, image: "/Images/Group 116.png", hedline:"Market Trends Analysis", description: "Predictive insights to guide real estate strategies." },
        { id: 2, image: "/Images/Group 116 (1).png",hedline:"Targeted Buyer Persona", description: "Understand and connect with your ideal property buyers." },
        { id: 3, image: "/Images/Group 116 (2).png",hedline:"Competitor Insights", description: "Stand out in the property market with informed strategies." },
        { id: 2, image: "/Images/Group 116 (3).png",hedline:"Visual Content Appeal", description: "Captivate buyers with appealing visuals and immersive experiences.." },

      ];
    
  return (
    <div>
        <h1 className='text-4xl font-bold text-center mt-20'>Navigating Real Estate's Digital Landscape</h1>
        <p className='font-light text-center'>Insights for Real Estate Marketing Advantage</p>
        
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-8'>
        <div className='md:col-span-1'>
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 mb-4  bg-white gap-2 rounded-lg shadow-sm shadow-slate-500 flex  ">
              <img src={item.image} alt={`Image ${item.id}`} className="w-20 h-20 mb-2 mx-auto ml-10	" />
              <div className='mr-10'> <h1 className='text-2xl font-bold'>{item.hedline}</h1>
              <p className="text-center font-sans  font-light">{item.description}</p></div>
             
            </div>
          ))}
        </div>
        <img src={img4} alt=''></img>
      </div>
    </div>
        
    
  )
}

export default Navigation