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
            status="In progress"
         />
         <ProjectCard
            title="Mobile App Design"
            client="Greenbox"
            status="To do"
            />
      </main>
   );
}

export default App;
