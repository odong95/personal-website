import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMenuPopupClick = (e) => {
      if (!document.getElementById('menu-popup').contains(e.target)) {
        handleOnOpen();
      }
    }
    window.addEventListener("click", handleMenuPopupClick);
    return () => {
      window.removeEventListener('click', handleMenuPopupClick);
    };
  }, []);

  const handleOnOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed md:relative z-30 w-full px-2 py-2 sm:px-4 text-gray-200 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="p-2 flex items-center">
          <Link to="/" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Brian Odong</Link>
        </div>
        <div className="flex items-center space-x-1">
          <nav className="hidden space-x-1 md:inline-flex">
            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:text-white 
            hover:text-white text-gray-200 md:mt-0 focus:outline-none focus:shadow-outline" to="/" >Home</Link>
            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:text-white 
            hover:text-white text-gray-200 md:mt-0 focus:outline-none focus:shadow-outline" to="/projects" >Projects</Link>
          </nav>
        </div>
        <div id="menu-popup" className="inline-flex md:hidden">
          <button onClick={handleOnOpen} className="rounded-lg focus:outline-none focus:shadow-outline text-white hover:text-white 
          hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-white" >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {
                isOpen
                  ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 
                  01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 
                  15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              }
            </svg>
          </button>
          {isOpen && <div className="absolute top-10 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-gray-700 text-gray-200 rounded shadow">
            <Link className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline" to="/">Home</Link>
            <Link className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline" to="/projects">Projects</Link>
            <ContactLogoBar />
          </div>}
        </div>
      </div>
    </header>
  )
}


export { NavBar }

