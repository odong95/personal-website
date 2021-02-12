import { Link } from "react-router-dom";
import { AppConstants } from 'components/App.constants';

const Home = () => (
  <main className="container m-auto px-8">
    <div className="flex flex-col-reverse sm:flex-row justify-between text-center py-16 ">
      <section className="sm:w-2/5 sm:items-start sm:text-left">
        <h1 className="uppercase text-6xl text-gray-700 font-bold leading-none tracking-wide mb-2">Brian</h1>
        <h2 className="uppercase text-4xl text-yellow-600 text-secondary tracking-widest mb-6">Odong</h2>
        <p className="text-gray-600 leading-relaxed mb-12">{AppConstants.aboutMe}</p>
        <Link className="bg-blue-400 hover:bg-blue-500 py-3 px-6 uppercase text-lg font-bold text-white rounded-full" to="/projects">
          Projects <span>&#x25B6;</span>
        </Link>
      </section>
      <div className="flex justify-center mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
        <img src={AppConstants.aboutPic} alt="Brian Odong" />
      </div>
    </div>
  </main>
)


export { Home }