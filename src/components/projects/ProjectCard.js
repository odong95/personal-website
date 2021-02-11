const ProjectCard = ({ data }) => {
  return (
    <div className="w-full lg:w-1/3 md:w-1/2 mx-2 mb-4">
      <div className="bg-white rounded-lg  shadow relative">
        <img className="h-70 w-full object-cover object-center" src={data?.img} alt="Project" />
        <div className="p-4 h-auto">
          <a href={data?.url} target="_blank" rel="noreferrer" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg ">
            {data?.title}
          </a>
          <div className="text-gray-600 text-sm leading-relaxed block">
            {data?.description}
          </div>
          <div className="flex justify-between items-baseline">
            <div className="mt-2">
              {
                data?.technologies.map((value, index) => <span key={index} className=" bg-gray-300 py-1 px-2 mx-1 rounded-full text-xs text-gray-700">{value}</span>)
              }
            </div>
            <a href={data?.repository} target="_blank" rel="noreferrer">
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold rounded">{data?.repoTool}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export { ProjectCard }