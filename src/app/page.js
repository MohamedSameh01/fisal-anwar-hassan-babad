
import Hero from "./components/Hero";
import About from "./components/About";
import Achivements from "./components/Achivements";
import FieldsOfWork from "./components/FieldsOfWork";
import Contactus from "./components/Contactus";
import CeoMessage from "./components/CeoMessage";

export default function Home() {
  
  return (
    <section>
     <Hero/>
     <About/>
     <CeoMessage/>
     <Achivements/>
     <FieldsOfWork/>
     <Contactus/>
    </section>
  );
}
