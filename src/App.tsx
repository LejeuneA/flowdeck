import ProjectCard from "./components/ProjectCard";
import type { Project } from "./types/Project";

function App() {
   const projects: Project[] = [
      {
         id: 1,
         title: "Website Redesign",
         client: "Northstar Studio",
         status: "In Progress",
         priority: "Low",
         deadline: "30 June 2026",
         category: "Web design",
         progress: 90,
         completed: false,
      },
      {
         id: 2,
         title: "Mobile App Design",
         client: "Greenbox",
         status: "To Do",
         priority: "Medium",
         deadline: "15 July 2026",
         category: "App design",
         progress: 50,
         completed: false,
      },
      {
         id: 3,
         title: "Website Redesign",
         client: "Northstar Studio",
         status: "In Progress",
         priority: "Low",
         deadline: "30 June 2026",
         category: "Web design",
         progress: 90,
         completed: false,
      },
      {
         id: 4,
         title: "Mobile App Design",
         client: "Greenbox",
         status: "To Do",
         priority: "Medium",
         deadline: "15 July 2026",
         category: "App design",
         progress: 50,
         completed: false,
      },
      {
         id: 5,
         title: "Brand Identity",
         client: "Luma Studio",
         status: "Completed",
         priority: "High",
         deadline: "20 July 2026",
         category: "Brand design",
         progress: 100,
         completed: true,
      },
      {
         id: 6,
         title: "Social Media Campaign",
         client: "Brightside Agency",
         status: "To Do",
         priority: "Medium",
         deadline: "18 August 2026",
         category: "Campaign",
         progress: 0,
         completed: false,
      }

   ];
   return (
      <main>
         <h1>Flowdeck</h1>
         <p>Creative project management, without the chaos.</p>
         <button>Add project</button>
         {projects.map((project) => (
            <ProjectCard
               id={project.id}
               title={project.title}
               client={project.client}
               status={project.status}
               priority={project.priority}
               deadline={project.deadline}
               category={project.category}
               progress={project.progress}
               completed={project.completed}
            />
         ))}
      </main>
   );
}

export default App;
