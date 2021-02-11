import { useState, useEffect } from 'react';
import { ProjectCard } from 'components/projects/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/assets/projects.json');
      const projects = await response.json();
      setProjects(projects)
    })()
  }, [])

  return (
    <main className="container mx-auto px-8 py-4">
      <div className="mt-16 px-4">
        <h2 className="text-6xl text-gray-700 font-bold leading-none tracking-wide mb-2">Projects</h2>
        <div className="block justify-between  md:flex md:-mx-2">
          {
            projects.map((value, index) => <ProjectCard data={value} key={index} />)
          }
        </div>
      </div>
    </main>
  )
}

export { Projects }