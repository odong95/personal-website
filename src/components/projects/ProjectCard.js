const ProjectCard = ({ data }) => (
  <div className="w-full mb-4">
    <div className="bg-gray-100 rounded-lg shadow-lg relative">
      <img className="p-2 h-48 w-full object-contain " src={data?.img} alt="Project" />
      <div className="p-4 h-auto md:h-48 lg:h-56">
        <div className="flex justify-between items-baseline">
          <a href={data?.url} target="_blank" rel="noreferrer" className="block text-green-600 hover:text-red-400 font-semibold mb-2 text-lg font-lato">
            {data?.title}
          </a>
          <a href={data?.repository} target="_blank" rel="noreferrer" className=" text-gray-700 hover:text-gray-100 hover:bg-red-400 font-semibold mb-2 text-sm font-lato">
            {data?.repoTool}
          </a>
        </div>
        <div className="text-gray-600 text-sm md:text-xs leading-relaxed ">
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