import React from 'react'
import { Link } from "react-router-dom";
import { AppConstants } from 'components/App.constants';

const ContactLogoBar = () => (
  <div className="flex-row md:flex-row text-3xl md:text-2xl">
    <Link to="/contact" className="w-6 mx-1">
      <i className="uil uil-envelope hover:bg-gray-500 hover:text-white" aria-label="mail"></i>
    </Link>
    <a href={AppConstants.linkedInUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
      <i className="uil uil-linkedin hover:bg-gray-500 hover:text-white" aria-label="linkedin"></i>
    </a>
    <a href={AppConstants.githubUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
      <i className="uil uil-github hover:bg-gray-500 hover:text-white" aria-label="github"></i>
    </a>
    <a href={AppConstants.twitterUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
      <i className="uil uil-twitter-alt hover:bg-gray-500 hover:text-white" aria-label="twitter"></i>
    </a>
    <a href={AppConstants.facebookUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
      <i className="uil uil-facebook-f hover:bg-gray-500 hover:text-white" aria-label="facebook"></i>
    </a>
  </div>
)




export { ContactLogoBar };

