import React from 'react';

const Connect = () => {
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
    <div style={back} className="mt-[100px] md:h-[700px] h-[10px]">
      <div className="md:h-[400px] md:w-[70%] lg:w-[50%] w-[90%] shadow-lg shadow-stone-400 rounded-lg self-center mt-10 md:p-10 p-2">
        <div className="flex flex-col md:p-4 gap-4">
          <div>
            <label htmlFor="email" className="block text-gray-800 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-800 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-800 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-800 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 w-[250px] rounded-full hover:shadow-md hover:shadow-blue-400"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
