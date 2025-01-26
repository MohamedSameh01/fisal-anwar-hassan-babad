import Navbar from "../components/Navbar";
import { AllProjectsSlider } from "./AllProjectsSlider";
import Hero from "./Hero";
import Projects from "./Projects";

const page = () => {
  return (
    <section className="bg-colors-sections-background">
      <Navbar />
      <Hero/>
      <AllProjectsSlider/>
      <h1 className=" text-center my-8 text-colors-background-color text-5xl underline font-bold">بعض مشاريعنا </h1>
      <Projects/>
    </section>
  );
}

export default page