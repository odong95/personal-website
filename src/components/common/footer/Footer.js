import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const Footer = () => {
  return (
    <footer>
      <div className="pt-2">
        <div className="flex px-3 pt-5 pb-2
            border-t border-gray-500 text-gray-400 
              justify-between md:flex md:justify-between" >
          <div className="mt-1 text-sm">
            <p>Created by <strong>Brian Odong</strong></p>
          </div>
          <ContactLogoBar />
        </div>
      </div>
    </footer>
  )
}

export { Footer };