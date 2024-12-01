import AboutUsImage from "../assets/AboutUs/about us 1.png";
import spanImage from "../assets/AboutUs/Group 30.png";
import EngagementIcon from "../assets/AboutUs/eng icon.png";
import CommunicationIcon from "../assets/AboutUs/comm icon.png";

export default function AboutUs() {
    return <>
        <div className="flex mt-20 justify-self-center">
            <img className="w-[38.25rem] h-[25.5rem] mt-24" src={AboutUsImage} alt="about us" />
            {/* about us content */}
            <div className="ml-20">

                {/* heading wrapper */}
                <div>
                    <h1 className="font-rubik text-5xl font-medium leading-[56.88px] text-left">ABOUT US</h1>
                    <span>
                        <img src={spanImage} alt="span image" />
                    </span>
                </div>
                <p className="font-rubik text-lg font-normal leading-[26.55px] text-left mt-5">
                    We love what we do and are driven by achieving great results for our clients. <br />
                    Our awards and impressive client list are testament to our high quality <br />
                    approach. We deliver value, creaKvity, results and excepKonal levels of <br />
                    customer service and professionalism. We specialise in infrastructure <br />
                    development, energy and natural resources.
                </p>

                {/* Engagement and Communication  */}
                <div className="flex">
                    {/* Engagement */}
                    <div>
                        <img className="mt-10 mb-6" src={EngagementIcon} alt="Engagement Icon" />
                        <h3 className="font-rubik text-2xl font-medium leading-7 text-left">Engagement</h3>
                        <p className="font-rubik  font-normal text-lg leading-7">
                            We are engagement specialists, <br />
                            who have led projects at all<br />
                            levels of the IAP2 spectrum.<br />
                            READ MORE
                        </p>
                    </div>

                    {/* Communication */}
                    <div className="ml-20">
                        <img className="mt-10 mb-6" src={CommunicationIcon} alt="Communication Icon" />
                        <h3 className="font-rubik text-2xl font-medium leading-7 text-left">Communication</h3>
                        <p className="font-rubik  font-normal text-lg leading-7">
                            We are award-winning leaders in<br />
                            communications and campaign <br />
                            management.READ MORE
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>
}