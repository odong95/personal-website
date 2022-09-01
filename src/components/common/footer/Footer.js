import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const Footer = () => {
  const footer = '© ' + new Date().getFullYear() + ' Brian Odong'
  return (
  <div className="bg-tealalt border-gray-600 border-t-2">
    <div className="container flex items-center py-6 text-offwhite font-light font-lato justify-between mx-auto md:flex md:justify-between md:py-2">
      <div className="mt-1 ml-1 text-md">
        <p><strong>{footer}</strong></p>
      </div>
      <ContactLogoBar />
    </div>
  </div>
)
}

export { Footer };