import React from 'react'
import { AppConstants } from 'components/App.constants';

const ContactLogoBar = () => {
  return (
    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-2xl ">
      <a href={AppConstants.facebookUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-facebook-f"></i>
      </a>
      <a href={AppConstants.twitterUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a href={AppConstants.linkedInUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href={AppConstants.mailUrl} target="_blank" rel="noreferrer" className="w-6 mx-1">
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  )
}



export { ContactLogoBar };

