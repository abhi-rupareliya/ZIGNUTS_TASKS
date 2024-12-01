import Navbar from "./Components/Navbar";
import Group1 from "./assets/HomeScreen/Group1.png";
import Asset4 from "./assets/HomeScreen/Asset4.png";

import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

import shape3 from "./assets/Shapes/shape3.png";
import shape4 from "./assets/Shapes/shape4.png";
import shape5 from "./assets/Shapes/shape5.png";
import shape6 from "./assets/Shapes/shape6.png";
import shape7 from "./assets/Shapes/shape7.png";
import shape8 from "./assets/Shapes/shape8.png";
import shape9 from "./assets/Shapes/shape9.png";

export default function App() {
  
  return (
    <div className="overflow-x-hidden">
      {/* screen 1 */}
      <div className="h-full">
        <Navbar />
        <div className="flex w-full">
          <img className="relative  my-auto w-3/4 h-3/4" src={Group1} alt="Group1" />

          <div className="absolute leading-[66.36px] ml-[61.5rem] mt-28">
            <p className="font-rubik text-[56px] font-medium text-left">
              Mendleson<br />
              Communication<br />
              and Engagement<br />
            </p>

            <p className="font-rubik text-lg font-normal leading-[21.33px] text-left mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Malesuada sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>

          <img className="absolute w-[12.9375rem] h-[15.5625rem] right-0 bottom-0" src={Asset4} alt="Asset4" />
        </div>
      </div>

      {/* main parant */}
      <div>
        <div>
          {/* shapes */}
          <img className="w-[366px] h-[431px] top-[1350px] left-[-52px] absolute" src={shape3} alt="shape3" />
          <img className="w-[250px] h-[431px] top-[2032px] right-0 absolute" src={shape4} alt="shape4" />
          <img className="w-[259px] h-[471px] top-[2580px] left-[-52px] absolute" src={shape5} alt="shape5" />
          {/* problem  */}
          <img className="w-[268px] h-[431px] top-[3030px] right-0 absolute" src={shape6} alt="shape6" />
          <img className="w-[366px] h-[431px] top-[3540px] left-[-10px] absolute" src={shape7} alt="shape7" />
          {/* problem  */}
          <img className="w-[268px] h-[476.12px] top-[4000px] right-0 absolute" src={shape8} alt="shape8" />
          <img className="w-[179px] h-[404px] top-[5136px] left-[-26px] absolute" src={shape9} alt="shape8" />
        </div>

        <div>
          {/* about us main */}
          <AboutUs />

          {/* services main  */}
          <Services />

          {/* OUR TEAM  */}
          <Team />

          {/* OUR PROJECT  */}
          <Projects />

          {/* OUR CLIENTS */}
          <Clients />

          <Footer />
        </div>
      </div>


    </div>
  )
}