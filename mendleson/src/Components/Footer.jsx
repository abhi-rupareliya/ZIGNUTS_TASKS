import google from "../assets/Footer/google.png";
import facebook from "../assets/Footer/facebook.png";
import linkedin from "../assets/Footer/linkedin.png";

export default function Footer() {
    return (
        <div className="mt-[4.6875rem]">
            {/* Footer Container */}
            <div className="bg-blue-200 border border-blue-200 w-[83.75rem] h-[13rem] mx-auto py-[2.625rem] px-[7.125rem]">
                <div className="grid grid-cols-4 gap-8">
                    {/* Social Section */}
                    <div>
                        <h3 className="text-base font-rubik font-bold mb-4 ml-6">Social</h3>
                        <ul className="space-y-1 text-sm font-normal leading-[30.94px] font-rubik">
                            <li className="flex items-center">
                                <img src={facebook} alt="Facebook" className="w-4 h-4 mr-2" />
                                Facebook
                            </li>
                            <li className="flex items-center">
                                <img src={linkedin} alt="Linkedin" className="w-4 h-4 mr-2" />
                                Linkedin
                            </li>
                            <li className="flex items-center">
                                <img src={google} alt="Google" className="w-4 h-4 mr-2" />
                                Google +
                            </li>
                        </ul>
                    </div>

                    {/* Explore Section */}
                    <div>
                        <h3 className="text-base font-rubik font-bold mb-4">Explore</h3>
                        <ul className="space-y-1 text-sm font-normal leading-[30.94px] font-rubik">
                            <li>Services</li>
                            <li>Team</li>
                            <li>Clients</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-base font-rubik font-bold mb-4">Contact</h3>

                        <ul className="space-y-1 text-sm font-normal leading-[30.94px] font-rubik">
                            <li>Lorem Ipsum dummy address</li>
                            <li>used for display</li>
                            <li>1234567890</li>
                        </ul>
                    </div>

                    {/* Email Section */}
                    <div>
                        <h3 className="text-base font-rubik font-bold mb-4">Email</h3>
                        <ul className="space-y-1 text-sm font-normal leading-[30.94px] font-rubik">
                            <li>mendlesoncommunication@email.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="my-[1.375rem] flex justify-center">
                <span className="font-rubik font-normal text-sm">
                    © Copyright 2018 Mendleson Communication Pty Ltd
                </span>
            </div>
        </div>
    );
}
