import CardSlider from "./CardSlider"
import { projectsData } from "../Data/companyInfo";
const Projects = () => {
  return (
    <div className="flex justify-evenly items-center m-auto  flex-wrap gap-6 w-[95%] p-6 ">
    {
      projectsData.map((project, index) => (
   
          <CardSlider project={project} key={index} />

      ))
    }
     
    </div>
  );
}

export default Projects