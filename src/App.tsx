import ProjectCard from "./components/ProjectCard";

function App() {
   return (
      <main>
         <h1>Flowdeck</h1>
         <p>Creative project management, without the chaos.</p>
         <button>Add prohect</button>
         <ProjectCard
            title="Website Redesign"
            client="Northstar Studio"
            status="In Progress"
            priority="Low"
         />
         <ProjectCard
            title="Mobile App Design"
            client="Greenbox"
            status="To Do"
            priority="Medium"
         />
         <ProjectCard
            title="Brand Identity"
            client="Luma Studio"
            status="Completed"
            priority="High"
         />
         <ProjectCard
            title="Social Media Campain"
            client="Brightside Agency"
            status="In Progress"
            priority="Medium"
         />

      </main>
   );
}

export default App;
