import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const Footer = () => {
  return (
    <footer>
      <div className="pt-2">
        <div className="flex flex-col items-center pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 
            md:flex-row max-w-8xl">
          <div className="mt-2 text-sm">
            <p>Created by <strong>Brian Odong</strong></p>
          </div>
          <ContactLogoBar />
        </div>
      </div>
    </footer>
  )
}

export { Footer };