import { Heading } from "components/common/heading/Heading";
import { Letterboxd } from "components/interests/Letterboxd";
import { Spotify } from "components/interests/Spotify";
import { AppConstants } from "components/App.constants";

const Interests = () => {
  return (
    <main className="container mx-auto px-8 py-4">
      <div className="mt-12">
        <Heading title="Interests" />
        <h3 className="font-lato font-semibold text-gray-700 mb-2">{AppConstants.interests}</h3>
        <div className="flex flex-col md:flex-row justify-center space-x-4 space-y-10 md:space-y-4">
          <Letterboxd />
          <Spotify />
        </div>
      </div>
    </main>
  )
}

export { Interests };

