import { useEffect, useState } from 'react';
import { LbEntry } from './LbEntry';
import { LogoLink } from 'components/common/logo-link/LogoLink';
import { Spinner } from 'components/common/spinner/Spinner';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { AppConstants } from "components/App.constants";
import { letterboxd as lb } from "./lb";
import lscache from 'lscache';

const Letterboxd = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData = lscache.get('lbData');
        let data;
        if (cachedData) {
          data = cachedData;
        } else {
          data = await lb(AppConstants.lbUserName);
        }

        if (data.length > 0) {
          setCurrentEntry(data[currentIndex]);
          data = data.slice(0, 50);
          setEntries(data);
          if (!cachedData) {
            lscache.set('lbData', data, 600);
          }
        }
      } catch (e) {
        console.error(e);
        setError('Error getting Letterboxd feed');
      }
    };
    fetchData();
  }, []);

  const move = (advance = true) => {
    let index = (currentIndex + (advance ? 1 : -1) + entries.length) % entries.length;
    setCurrentIndex(index);
    setCurrentEntry(entries[index]);
  }

  const handleBack = () => {
    move(false);
  }

  const handleForward = () => {
    move();
  }

  return (
    <div className="md:mt-3 noselect">
      <LogoLink url={AppConstants.letterboxdUrl} src={AppConstants.letterboxdLogo} text="Letterboxd Film Diary" alt="Letterboxd" />
      <div className="flex flex-col justify-center">
        {currentEntry ? <LbEntry entry={currentEntry} /> : <p className="font-lato font-semibold text-gray-700">{error ? error : <Spinner />}</p>}
        {!error &&
          <div className="flex justify-center space-x-4 mt-3 text-gray-700 ">
            <MdArrowBackIosNew onClick={handleBack} className="cursor-pointer transform scale-200 mt-1" />
            <span className="font-lato font-semibold">{currentIndex + 1} / {entries.length}</span>
            <MdArrowForwardIos onClick={handleForward} className="cursor-pointer transform scale-200 mt-1" />
          </div>}
      </div>
    </div>
  )
}

export { Letterboxd }
