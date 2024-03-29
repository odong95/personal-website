import { Heading } from 'components/common/heading/Heading';
import { AppConstants } from 'components/App.constants';
import { MdDownload } from 'react-icons/md';

const Resume = () => {
  return (
    <main className="container mx-auto px-8 py-4">
      <div className="mt-12">
        <Heading title="Resume" />
        <div className="flex flex-col items-center">
          <img src={AppConstants.resumePic} alt="Brian Odong Resume" className="w-9/12 max-w-screen-md mb-2" />
          <a href={AppConstants.resume} target="_blank" rel="noreferrer" >
            <button className="animate-pulse transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 bg-emerald-600 hover:bg-red-400 py-3 px-6 uppercase text-lg font-bold font-lato text-gray-100 
                        rounded-full mb-6">
              <div className="flex flex-row">
                Download PDF <MdDownload className="mt-1.5 mx-0.5 scale-125" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}

export { Resume }
