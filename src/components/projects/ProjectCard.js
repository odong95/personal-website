const ProjectCard = ({ data }) => (
  <div className="w-full mb-4">
    <div className="bg-gray-50 rounded-lg shadow-lg relative">
      <img className="h-48 w-full object-contain " src={data?.img} alt="Project" />
      <div className="p-4 h-auto md:h-48 lg:h-56">
        <div className="flex justify-between items-baseline">
          <a href={data?.url} target="_blank" rel="noreferrer" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg ">
            {data?.title}
          </a>
          <a href={data?.repository} target="_blank" rel="noreferrer" className="border-solid border-2 border-gray-200 text-gray-500 hover:text-gray-100 hover:bg-gray-500 font-semibold mb-2 text-sm ">
            {data?.repoTool}
          </a>
        </div>
        <div className="text-gray-600 text-sm md:text-xs leading-relaxed ">
          {data?.description}
        </div>
        <div className="flex flex-wrap mt-1">
          {
            data?.technologies.map((value, index) => <span key={index} className=" bg-gray-300 py-1 px-2 mx-1 my-1 rounded-full text-xs text-gray-700">{value}</span>)
          }
        </div>
      </div>
    </div>
  </div>
)


export { ProjectCard }