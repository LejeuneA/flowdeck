type ProjectCardProps = {
   title: string;
   client: string;
   status: "To Do" | "In Progress" | "Completed";
   priority: "Low" | "Medium" | "High";
}

function ProjectCard({ title, client, status, priority }: ProjectCardProps) {
   return <article>
      <h2>{title}</h2>
      <p>Client: {client}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
   </article>;
}
export default ProjectCard;
