import React from "react";
import img9 from "../Images/Osumare Logo-01 (2) 4.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div className="max-w-screen-lg mx-auto md:mt-16 mt-4 p-10 bg-blue-200 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-6">
          <img src={img9} alt="" className="mb-4" />
          <p className="font-sans text-sm">
            The best digital marketing agency in Pune with a proven track record
            of consistently delivering quality service.
          </p>
          <div className="mt-6">
            <h1 className="text-3xl font-bold">Address</h1>
            <p className="font-sans mt-2 text-md">
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-bold py-3">Contact</h1>
            <p className="flex items-center">
              <MdEmail className="mr-2" /> hello@osumare.in +91 8459 8762 26
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +91 8459 8762 26
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold py-3 mb-5">Menu</h1>
          <h6 className="mb-3 font-sans">Home</h6>
          <h6 className="mb-3 font-sans">About</h6>
          <h6 className="mb-3 font-sans">Service</h6>
          <h6 className="mb-3 font-sans">Work</h6>
          <h6 className="mb-3 font-sans">Blog</h6>
          <h6 className="font-sans">Career</h6>
        </div>
        <div>
          <h1 className="text-3xl font-bold py-3 mb-5 text-center md:text-left lg:text-left">Social</h1>
          <div className="flex justify-center md:justify-start lg:justify-start space-x-4">
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <RiTwitterXLine className="rounded-full" />
            </div>
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <FaFacebookSquare className="rounded-full" />
            </div>
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <FaYoutube className="rounded-full" />
            </div>
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <FaPinterest className="rounded-full" />
            </div>
          </div>
          <div className="flex justify-center md:justify-start lg:justify-start space-x-4 mt-4">
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <FaWhatsapp className="rounded-full" />
            </div>
            <div className="w-9 h-9 border rounded-full flex items-center justify-center bg-white">
              <FaInstagram className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <p className="font-sans text-sm text-center mt-4">
        © 2023 Osumare. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
