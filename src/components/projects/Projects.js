import { useState, useEffect } from 'react';
import { ProjectCard } from 'components/projects/ProjectCard';
import { Heading } from 'components/common/heading/Heading';

const writeToCache = (url, data) => localStorage.setItem(url, JSON.stringify(data));
const readFromCache = (url) => JSON.parse(localStorage.getItem(url)) || null;

const getProjectData = async (url) => {
  const response = await fetch(url);
  const projects = await response.json();
  writeToCache(url, projects)
  return projects
}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const url = '/assets/projects.json';
      const cachedData = readFromCache(url);
      if (cachedData) {
        setProjects(cachedData)
      } else {
        const projects = await getProjectData(url);
        setProjects(projects)
      }
    })()
  }, [])

  return (
    <main className="container mx-auto px-8 py-4">
      <div className="mt-12">
        <Heading title="Projects" />
        <div className="block md:grid md:grid-cols-3 md:gap-4">
          {
            projects.map((value, index) => <ProjectCard data={value} key={index} />)
          }
        </div>
      </div>
    </main>
  )
}

export { Projects }