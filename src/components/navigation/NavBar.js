import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ContactLogoBar } from 'components/common/contact-logo-bar/ContactLogoBar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleMenuPopupClick = (e) => {
      if ((isOpen && !document.getElementById('menu-popup')?.contains(e.target))
        || (isOpen && document.getElementById('hover-links')?.contains(e.target))) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleMenuPopupClick);
    return () => {
      window.removeEventListener('click', handleMenuPopupClick);
    };
  }, [isOpen]);


  const handleOnOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed sm:relative z-30 w-full px-2 py-2 bg-tealalt border-b-2 border-gray-500 font-lato font-semibold">
      <div className="container flex items-center justify-between mx-auto">
        <div className="p-2">
          <Link to="/" className="text-xl tracking-widest text-gray-50 uppercase rounded-lg focus:outline-none focus:shadow-outline">Brian Odong</Link>
        </div>
        <div>
          <nav className="hidden md:inline-flex text-md text-offwhite">
            <Link className={`${path === '/' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-tanalt-dark focus:text-gray-100 
            hover:text-white md:mt-0 focus:outline-none focus:shadow-outline`} to="/" >Home</Link>
            <Link className={`${path === '/projects' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-tanalt-dark focus:text-gray-100  
            hover:text-white md:mt-0 focus:outline-none focus:shadow-outline`} to="/projects" >Projects</Link>
            <Link className={`${path === '/interests' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-tanalt-dark focus:text-gray-100  
            hover:text-white md:mt-0 focus:outline-none focus:shadow-outline`} to="/interests" >Interests</Link>
            <Link className={`${path === '/resume' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-tanalt-dark focus:text-gray-100  
            hover:text-white md:mt-0 focus:outline-none focus:shadow-outline`} to="/resume" >Resume</Link>
            <Link className={`${path === '/contact' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-tanalt-dark focus:text-gray-100  
            hover:text-white md:mt-0 focus:outline-none focus:shadow-outline`} to="/contact" >Contact</Link>
          </nav>
        </div>
        <div id="menu-popup" className="inline-flex md:hidden">
          <button onClick={handleOnOpen} className="rounded-lg focus:outline-none focus:shadow-outline text-white hover:text-white 
          hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-white" aria-label="menu-button">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              {
                isOpen
                  ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 
                  01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 
                  15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              }
            </svg>
          </button>
          {
            isOpen &&
            <div id="hover-links" className="absolute top-10 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-tanalt-dark text-gray-200 text-2xl rounded shadow">
              <Link className={`${path === '/' && 'bg-gray-500'} px-4 py-2 mt-2 rounded-lg hover:bg-gray-500 focus:text-gray-100  hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline`} to="/">Home</Link>
              <Link className={`${path === '/projects' && 'bg-gray-500'} px-4 py-2 mt-2 rounded-lg hover:bg-gray-500 focus:text-gray-100  hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline`} to="/projects">Projects</Link>
              <Link className={`${path === '/interests' && 'bg-gray-500'} px-4 py-2 mt-2 rounded-lg hover:bg-gray-500 focus:text-gray-100  hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline`} to="/interests">Interests</Link>
              <Link className={`${path === '/resume' && 'bg-gray-500'} px-4 py-2 mt-2 rounded-lg hover:bg-gray-500 focus:text-gray-100  hover:text-white  
            md:mt-0 focus:outline-none focus:shadow-outline`} to="/resume">Resume</Link>
              <Link className={`${path === '/contact' && 'bg-tanalt-dark'} px-4 py-2 mt-2 bg-transparent rounded-lg hover:bg-gray-500 focus:text-gray-100  
            hover:text-white text-gray-200 md:mt-0 focus:outline-none focus:shadow-outline`} to="/contact" >Contact</Link>
              <ContactLogoBar />
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export { NavBar }

