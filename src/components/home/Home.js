import { Link } from "react-router-dom";
import { AppConstants } from 'components/App.constants';

const Home = () => (
  <main className="container m-auto px-8">
    <div className="flex flex-col-reverse sm:flex-row justify-between text-center py-16 ">
      <section className="sm:w-2/5 sm:items-start sm:text-left">
        <h1 className="uppercase text-6xl text-gray-700 font-bold leading-none tracking-wide mb-2">Brian</h1>
        <h2 className="animate-pulse uppercase text-4xl text-yellow-600 text-secondary tracking-widest mb-6">Odong</h2>
        <p className="text-gray-600 leading-relaxed mb-12">{AppConstants.aboutMe}</p>
        <Link to="/projects">
          <button className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-400 hover:bg-red-500 py-3 px-6 uppercase text-lg font-bold text-gray-100 
          rounded-full">
            Projects <span>&#x25B6;</span>
          </button>
        </Link>
      </section>
      <div className="flex justify-center mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
        <img src={AppConstants.aboutPic} alt="Brian Odong" />
      </div>
    </div>
  </main>
)


export { Home }