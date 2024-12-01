import spanOurTeamImage from "../assets/OurTeam/spanOurTeam.png";
import jessicaImage from "../assets/OurTeam/Jessica.png";
import johnyImage from "../assets/OurTeam/Johny.png";
import sanyaImage from "../assets/OurTeam/sanya.png";

export default function Team() {
    return (
        <>
            <div className="mt-[11.375rem]">
                {/* heading  */}
                <div>
                    <h3 className="flex justify-center font-rubik text-5xl font-medium leading-[56.88px] text-left">OUR TEAM</h3>
                    <span className="flex justify-center">
                        <img src={spanOurTeamImage} alt="span image" />
                    </span>
                </div>

                {/* all Team  */}
                <div className="flex justify-center mt-8">
                    <div>
                        <img className="w-[17.375rem] h-[13.8125rem]" src={jessicaImage} alt="client image" />
                        <span className="flex justify-center font-rubik font-normal text-base mt-[3.3125rem]">
                            Jessica D’suza
                        </span>
                    </div>

                    <div>
                        <img className="w-[17.375rem] h-[13.8125rem] mx-[8.6875rem]" src={johnyImage} alt="client image" />
                        <span className="flex justify-center font-rubik font-normal text-base mt-[3.3125rem]">
                            Johny Williams
                        </span>
                    </div>

                    <div>
                        <img className="w-[17.375rem] h-[13.8125rem]" src={sanyaImage} alt="client image" />
                        <span className="flex justify-center font-rubik font-normal text-base mt-[3.3125rem]">
                            Sanya R,
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}