type ProjectCardProps = {
   title: string;
   client: string;
   status: "To do" | "In progress" | "Completed";
}

function ProjectCard({ title, client, status }: ProjectCardProps) {
   return <article>
      <h2>{title}</h2>
      <p>{client}</p>
      <p>Status: {status}</p>
   </article>;
}
export default ProjectCard;
