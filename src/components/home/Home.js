import { Link } from "react-router-dom";
import { AppConstants } from 'components/App.constants';
import { WorkHistory } from 'components/work-history/WorkHistory';
import { MdPlayArrow } from 'react-icons/md';

const Home = () => (
  <main className="container m-auto px-8">
    <div className="flex flex-col-reverse sm:flex-row justify-between text-center py-16 ">
      <section className="sm:w-2/5 sm:items-start sm:text-left">
        <h1 className="slide-ttb relative delay-250 bounce sliding-ttb uppercase text-6xl text-gray-700 tracking-widest mb-2">Brian</h1>
        <h2 className="slide-btt relative delay-250 bounce sliding-btt uppercase text-4xl text-red-400 text-secondary tracking-widest mb-6">Odong</h2>
        <h3 className="slide-ltr relative delay-500 bounce sliding-ltr text-gray-600 leading-relaxed mb-6 font-lato font-semibold">{AppConstants.aboutMe}</h3>
        <Link to="/projects">
          <button className="slide-rtl relative delay-500 bounce sliding-rtl transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 hover:bg-red-400 py-3 px-6 uppercase text-lg font-bold font-lato text-gray-100 
          rounded-full mb-6">
            <div className="flex flex-row">
              Projects <MdPlayArrow className="mt-1 mx-0.5 transform scale-150" />
            </div>
          </button>
        </Link>
        <WorkHistory />
      </section>
      <div className="slide-rtl relative delay-350 bounce sliding-rtl flex justify-center mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
        <img src={AppConstants.aboutPic} alt="Brian Odong" />
      </div>
    </div>
  </main>
)

export { Home }