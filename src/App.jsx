import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  console.log(projectsState);

  function handleCancel() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null, //새로운 프로젝트를 추가한다는 뜻
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8 ">
        <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          projectList={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
