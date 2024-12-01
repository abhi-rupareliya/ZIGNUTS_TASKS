import ConsultationImage from "../assets/Services/Consultation.png";
import CommunicationImage from "../assets/Services/Coominucation.png";
import EngagementImage from "../assets/Services/Engagement.png";
import FacilitationImage from "../assets/Services/facilation.png";
import TrainingsImage from "../assets/Services/Training.png";
import serviceSpanImage from "../assets/Services/Group 31.png";

export default function Services() {
    return (
        <>
            <div className="mt-32">

                {/* heading  */}
                <div>
                    <h1 className="flex justify-center font-rubik text-5xl font-medium leading-[56.88px] text-left">SERVICES</h1>
                    <span className="flex justify-center">
                        <img src={serviceSpanImage} alt="span image" />
                    </span>
                </div>

                {/* engagement  */}
                <div className="flex mt-20 justify-self-center">

                    {/* content  */}
                    <div>
                        <h3 className="flex justify-end font-rubik text-[2.6rem] font-medium leading-[56.88px] text-left">
                            ENGAGEMENT
                        </h3>
                        <p className="font-rubik text-base font-normal leading-[23.6px] text-right mt-5">
                            We love what we do and are driven by achieving great results for our<br />
                            clients. Our awards and impressive client list are testament to our high<br />
                            quality approach. We deliver value, creaKvity, results and excepKonal<br />
                            levels of customer service and professionalism. We specialise in<br />
                            infrastructure development, energy and natural resources.
                        </p>
                    </div>

                    {/* image  */}
                    <img className="w-[28.375rem] h-[23.4375rem] ml-[9.5625rem]" src={EngagementImage} alt="Engagement Image" />
                </div>

                {/* communication  */}
                <div className="flex justify-self-center mt-[4.875rem]">
                    {/* image  */}
                    <img className="w-[30.4375rem] h-[15.6875rem]" src={CommunicationImage} alt="Engagement Image" />
                    <div className="ml-[10.625rem] mt-[4rem]">
                        {/* content  */}
                        <h3 className="flex justify-start font-rubik text-[2.6rem] font-medium leading-[56.88px]">
                            COMMUNICATIONS
                        </h3>
                        <p className="font-rubik text-base font-normal leading-[23.6px] text-left mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                            Faucibus quam quis egestas orci. Scelerisque eu, vitae<br />
                            sapien, pellentesque et. Sit ac fames facilisis nibh<br />
                            faucibus.
                        </p>
                    </div>


                </div>

                {/* facilitation  */}
                <div className="flex mt-[4.125rem] justify-self-center">

                    {/* content  */}
                    <div className="mt-[4.375rem]">
                        <h3 className="flex justify-end font-rubik text-[2.6rem] font-medium leading-[56.88px] text-left">
                            FACILITATION
                        </h3>
                        <p className="font-rubik text-base font-normal leading-[23.6px] text-right mt-5">
                            We love what we do and are driven by achieving great results for our<br />
                            clients. Our awards and impressive client list are testament to our<br /> 
                            high quality approach. We deliver value, creaKvity, results and<br />
                            excepKonal levels of customer service and professionalism. We<br /> 
                            specialise in infrastructure development, energy and<br/> 
                            natural resources.
                        </p>
                    </div>

                    {/* image  */}
                    <img className="w-[30rem] h-[24.125rem] ml-[9.5625rem]" src={FacilitationImage} alt="Engagement Image" />
                </div>

                {/* consultation */}
                <div className="flex justify-self-center mt-[2.25rem]">
                    {/* image  */}
                    <img className="w-[32.6875rem] h-[22.6875rem]" src={ConsultationImage} alt="Engagement Image" />
                    <div className="ml-[11.5rem] mt-[7.5rem]">
                        {/* content  */}
                        <h3 className="flex justify-start font-rubik text-[2.6rem] font-medium leading-[56.88px]">
                            CONSULTATION AND<br />
                            RESEARCH
                        </h3>
                        <p className="font-rubik text-base font-normal leading-[23.6px] text-left mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> 
                            elit. Faucibus quam quis egestas orci. Scelerisque eu,<br /> 
                            vitae sapien, pellentesque et. Sit ac fames facilisis<br /> 
                            nibh faucibus.
                        </p>
                    </div>
                </div>

                {/* trainings */}
                <div className="flex mt-[3.75rem] justify-self-center">

                    {/* content  */}
                    <div className="mt-[4.375rem]">
                        <h3 className="flex justify-end font-rubik text-[2.6rem] font-medium leading-[56.88px] text-left">
                            TRAINING & MENTORING
                        </h3>
                        <p className="font-rubik text-base font-normal leading-[23.6px] text-right mt-5">
                            We love what we do and are driven by achieving great results for our<br />
                            clients. Our awards and impressive client list are testament to our<br />
                            high quality approach. We deliver value, creaKvity, results and <br />
                            excepKonal levels of customer service and professionalism. We<br /> 
                            specialise in infrastructure development, energy and natural <br/>
                            resources.
                        </p>
                    </div>

                    {/* image  */}
                    <img className="w-[28.375rem] h-[21.8125rem] ml-[11.5rem] mt-[1.1875rem]" src={TrainingsImage} alt="Engagement Image" />
                </div>

            </div>
        </>
    )
}