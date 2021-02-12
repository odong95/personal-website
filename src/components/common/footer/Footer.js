import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const Footer = () => (
  <div>
    <div className="container flex items-center pt-2 pb-2
            border-t border-gray-600 text-gray-400 
              justify-between mx-auto md:flex md:justify-between" >
      <div className="mt-1 text-sm">
        <p><strong> © 2021 Brian Odong </strong></p>
      </div>
      <ContactLogoBar />
    </div>
  </div>
)


export { Footer };