import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 ">
          Frequently Asked Questions
        </h1>
        <p className="font-sans text-center">
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
      </div>
      <div className="md:h-[450px] md:w-[700px] h-[500px] w-[530px] shadow-lg shadow-stone-400 rounded-lg self-center mt-10 md:ml-[25%] ml-[2%] p-10 flex flex-row gap-2 justify-between">
<div className="flex flex-col gap-6">
    <div className="flex flex-row justify-between  ">
    <h5>3. How does Osumare measure campaign success?</h5><IoIosArrowDown className=" self-end ml-[200px]"/></div><div className="border-b"></div>
    <div className="flex flex-row justify-between  ">
    <h5>3. How does Osumare measure campaign success?</h5><IoIosArrowDown className=" self-end ml-[200px]"/></div><div className="border-b"></div>
    <div className="flex flex-row justify-between  bg-blue-500  shadow-sm shadow-blue-800">
    <h5 className="h-[80px]">3. How does Osumare measure campaign success?</h5><IoIosArrowDown className="  ml-[200px]"/></div><div className="border-b"></div>

    <h6 className="font-sans text-stone-700">We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</h6>
   

</div>

      </div>
    </div>
  );
};

export default Question;
