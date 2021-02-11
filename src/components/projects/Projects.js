import { useState, useEffect } from 'react';
import { ProjectCard } from 'components/projects/ProjectCard';
import { Heading } from 'components/common/heading/Heading';

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
      <div className="mt-12">
        <Heading title="Projects" />
        <div className="block justify-between md:flex md:-mx-2">
          {
            projects.map((value, index) => <ProjectCard data={value} key={index} />)
          }
        </div>
      </div>
    </main>
  )
}

export { Projects }