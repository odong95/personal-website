import { WorkCarousel } from "./WorkCarousel";

const WorkHistory = () => {
  return (
    <div className="flex flex-col justify-center">
      <h4 className="uppercase text-2xl text-gray-700 font-semibold font-lato"> Companies I've Worked For </h4>
      <WorkCarousel />
    </div>
  )
}

export { WorkHistory }

