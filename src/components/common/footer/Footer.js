import React from 'react'
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const Footer = () => (
  <footer>
    <div className="pt-2">
      <div className="container flex items-center px-3 pt-2 pb-2
            border-t border-gray-500 text-gray-400 
              justify-between mx-auto md:flex md:justify-between" >
        <div className="mt-1 text-sm">
          <p><strong>© 2021 Brian Odong </strong></p>
        </div>
        <ContactLogoBar />
      </div>
    </div>
  </footer>
)


export { Footer };