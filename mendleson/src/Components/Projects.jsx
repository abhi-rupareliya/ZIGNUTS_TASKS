import project1 from "../assets/OurProject/project1.png";
import project2 from "../assets/OurProject/project2.png";
import project3 from "../assets/OurProject/project3.png";
import spanOurProject from "../assets/OurProject/spanOurProject.png";

export default function Projects() {
    return (
        <>
            <div className="mt-[7.5rem]">
                <div>
                    <h3 className="flex justify-center font-rubik text-5xl font-medium leading-[56.88px] text-left">OUR PROJECTS</h3>
                    <span className="flex justify-center" >
                        <img src={spanOurProject} alt="span image" />
                    </span>
                </div>

                <div class="flex items-center justify-center mt-[1.6875rem]">
                    <div className="grid grid-cols-2 gap-[1.375rem] max-w-[70.625rem]">
                        <div>
                            <img src={project1} alt="Image 1" className="w-[34.625rem] h-[41.6875rem]" />
                        </div>
                        <div class="flex flex-col gap-[1.375rem]">
                            <img src={project2} alt="Image 2" className="w-[34.625rem] h-[20.125rem]" />
                            <img src={project3} alt="Image 3" className="w-[34.625rem] h-[20.125rem]" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}