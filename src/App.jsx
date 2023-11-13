import Input from "./components/Input";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 transition-colors duration-300 min-h-screen flex justify-center p-4">
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="animate-bounce" alt="Vite logo" />
      </a> */}
      <div className="pt-36 max-w-[1000px]">
        <Nav />
        <ProjectCard />
        <Input />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="card center rounded-4xl">
          <h3 className="text-error-light">New Card</h3>
        </div> */}
      </div>
    </div>
  );
}

export default App;
