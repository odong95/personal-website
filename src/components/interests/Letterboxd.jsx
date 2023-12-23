import { useEffect, useState } from 'react';
import { LbEntry } from './LbEntry';
import { LogoLink } from 'components/common/logo-link/LogoLink';
import { Spinner } from 'components/common/spinner/Spinner';
import { AppConstants } from "components/App.constants";
import { letterboxd as lb } from "./lb";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import lscache from 'lscache';

const Letterboxd = ({ lbData, error }) => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (lbData?.length > 0) {
      setCurrentEntry(lbData[currentIndex]);
      lbData = lbData.slice(0, 50);
      setEntries(lbData);
    }
  }, [lbData]);

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
        {currentEntry ? <LbEntry entry={currentEntry} /> : <div className="font-lato font-semibold text-gray-700">{error ? <p>{error}</p> : <Spinner />}</div>}
        {!error &&
          <div className="flex justify-center space-x-4 mt-3 text-gray-700 ">
            <MdArrowBackIosNew onClick={handleBack} className="cursor-pointer scale-200 mt-1" />
            <span className="font-lato font-semibold">{currentIndex + 1} / {entries.length}</span>
            <MdArrowForwardIos onClick={handleForward} className="cursor-pointer scale-200 mt-1" />
          </div>}
      </div>
    </div>
  )
}

const useLetterboxdFetch = () => {
  const [lbData, setLbData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData = lscache.get('lbData');
        let data = cachedData;
        if (!cachedData) {
          data = await lb(AppConstants.lbUserName);
          lscache.set('lbData', data, 600);
        }
        setLbData(data);
      } catch (e) {
        console.error(e);
        setError('Unable to fetch Letterboxd feed');
      }
    };
    fetchData();
  }, []);
  return { lbData, error };
}

export { Letterboxd, useLetterboxdFetch }
