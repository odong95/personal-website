import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io'

const LbEntry = ({ entry }) => {

  const StarRatings = () => {
    let rating = Math.floor(entry?.rating?.score) || 0;
    let hasHalf = isNaN(entry.rating.score) ? false : entry?.rating?.score % 1 != 0;
    let remaining = hasHalf ? 5 - (rating + 1) : 5 - rating;

    return (
      <>
        {[...Array(rating)].map((_, i) => <IoMdStar key={i} className="text-yellow-500" />)}
        {hasHalf && <IoMdStarHalf className="text-yellow-500" />}
        {[...Array(remaining)].map((_, i) => <IoMdStarOutline key={i} className="text-yellow-500" />)}
      </>
    )
  }

  return (
    <div
      className="flex flex-row space-x-5 space-y-0 rounded-xl shadow-lg p-3 w-80 md:w-530 mx-auto border-4 border-tealalt bg-gray-50">
      <a className="w-1/3 bg-gray-50 grid place-items-center cursor-pointer" href={entry.uri} target="_blank">
        <img src={entry?.film?.image?.medium} alt={entry?.film?.title} className="rounded-xl" />
      </a>
      <div className="w-2/3 bg-gray-50 flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium block">{entry?.date?.watched}</p>
          <div className="flex items-center md:hidden">
            <IoMdStar className="text-yellow-500" />
            <span className="text-gray-600 font-bold text-sm ml-1">
              {entry?.rating?.score || '-'}
            </span>
          </div>
          <div className="md:flex hidden items-center">
            <StarRatings />
          </div>
        </div>
        <a href={entry.uri} target="_blank">
          <h3 className="text-gray-700 hover:text-red-400 md:text-3xl text-xl font-lato font-black cursor-pointer">{entry?.film?.title}</h3>
        </a>
        <span className="text-gray-500 text-base font-lato font-semibold">{entry?.review || 'No review.'}</span>
      </div>
    </div>
  )
}

export { LbEntry }
