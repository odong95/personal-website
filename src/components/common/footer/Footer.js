import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';
import { AppConstants } from 'components/App.constants';

const Footer = () => (
  <div className="bg-tealalt">
    <div className="container flex items-center py-6
           border-gray-600 text-offwhite
            font-light font-lato
            justify-between mx-auto md:flex md:justify-between md:py-2" >
      <div className="mt-1 ml-1 text-md">
        <p><strong> {AppConstants.footer} </strong></p>
      </div>
      <ContactLogoBar />
    </div>
  </div>
)


export { Footer };