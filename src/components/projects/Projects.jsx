import { ProjectCard } from 'components/projects/ProjectCard';
import { Heading } from 'components/common/heading/Heading';
import ScrollUpButton from 'react-scroll-up-button';
import projects from './projects.json';

const Projects = () => {
  return (
    <main className="container mx-auto px-8 py-4">
      <div className="mt-12">
        <Heading title="Projects" />
        <div className="block md:grid md:grid-cols-3 md:gap-4">
          {
            projects?.map((value, index) => <ProjectCard data={value} key={index} />)
          }
        </div>
        <ScrollUpButton AnimationDuration={350} style={{ width: 40, height: 50, marginBottom: 100 }} />
      </div>
    </main>
  )
}

export { Projects }