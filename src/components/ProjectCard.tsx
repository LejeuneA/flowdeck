import type { Project } from "../types/Project";

function ProjectCard({
   title,
   client,
   status,
   priority,
   deadline,
   category,
   progress,
   completed,
}: Project) {
   return (
      <article>
         <h2>{title}</h2>
         <p>Client: {client}</p>
         <p>Status: {status}</p>
         <p>Priority: {priority}</p>
         <p>Deadline: {deadline}</p>
         <p>Category: {category}</p>
         <p>Progress: {progress}%</p>
         <p>Completed: {completed ? "Yes" : "No"}</p>
      </article>
   );
}

export default ProjectCard;
