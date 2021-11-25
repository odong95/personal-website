const ProjectCard = ({ data }) => (
  <div className="w-full mb-4">
    <div className="bg-gray-100 rounded-lg shadow-lg relative">
      <a href={data?.url} target="_blank" rel="noreferrer">
        <img className="p-2 h-48 w-full object-contain md:transition md:duration-150 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-110" src={data?.img} alt="Project" />
      </a>
      <div className="p-4 h-auto md:h-48 lg:h-56">
        <div className="flex justify-between items-baseline">
          <a href={data?.url} target="_blank" rel="noreferrer" className="block text-green-600 hover:text-red-400 font-semibold mb-2 text-lg font-lato">
            {data?.title}
          </a>
          <a href={data?.repository} target="_blank" rel="noreferrer" className="hidden text-gray-700 hover:text-red-400 font-semibold mb-2 text-sm font-lato">
            {data?.repoTool}
          </a>
        </div>
        <div className="text-gray-600 text-sm md:text-xs leading-relaxed">
          {data?.description}
        </div>
        <div className="flex flex-wrap mt-1">
          {
            data?.technologies.map((value, index) => <span key={index} className=" bg-tealalt py-1 px-2 mx-1 my-1 rounded-full text-xs text-gray-50">{value}</span>)
          }
        </div>
      </div>
    </div>
  </div>
)

export { ProjectCard }