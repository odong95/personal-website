import React from 'react'
import { AppConstants } from 'components/App.constants';

const ContactLogoBar = () => {
  return (
    <div className="flex-row  md:flex-row text-2xl">
      <a href={AppConstants.mailUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-envelope hover:bg-gray-500 hover:text-white"></i>
      </a>
      <a href={AppConstants.linkedInUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-linkedin hover:bg-gray-500 hover:text-white"></i>
      </a>
      <a href={AppConstants.githubUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-github hover:bg-gray-500 hover:text-white"></i>
      </a>
      <a href={AppConstants.twitterUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-twitter-alt hover:bg-gray-500 hover:text-white"></i>
      </a>
      <a href={AppConstants.facebookUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-facebook-f hover:bg-gray-500 hover:text-white"></i>
      </a>
    </div>
  )
}



export { ContactLogoBar };

