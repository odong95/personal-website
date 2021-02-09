import { useState } from 'react';
import { Link } from "react-router-dom";
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';
import cx from 'classnames';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full text-gray-200 bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Brian Odong</Link>
          <button onClick={handleOnOpen} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline text-white hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-white" >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {
                isOpen
                  ? <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  : <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              }
            </svg>
          </button>
        </div>
        <nav className={cx({ 'flex': isOpen, 'hidden': !isOpen, 'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row': true })}>
          <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200 md:mt-0 focus:outline-none focus:shadow-outline" to="/" >About</Link>
          <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200 md:mt-0 focus:outline-none focus:shadow-outline" to="/projects" >Projects</Link>
          {isOpen && <ContactLogoBar />}
        </nav>
      </div>
    </div>
  )
}


export { NavBar }

