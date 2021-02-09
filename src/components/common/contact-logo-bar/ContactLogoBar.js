import React from 'react'

const ContactLogoBar = () => {
  return (
    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-2xl ">
      <a href="#" className="w-6 mx-1">
        <i className="uil uil-facebook-f"></i>
      </a>
      <a href="#" className="w-6 mx-1">
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a href="#" className="w-6 mx-1">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="#" className="w-6 mx-1">
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  )
}



export { ContactLogoBar };

