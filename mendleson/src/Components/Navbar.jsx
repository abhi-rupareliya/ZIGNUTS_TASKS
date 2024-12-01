import Asset1 from '../assets/HomeScreen/Asset1.png';
import Asset2 from '../assets/HomeScreen/Asset2.png';
import Logo from '../assets/HomeScreen/Logo.png';
export default function Navbar() {
    return (
        <nav>
            {/* parant div  */}
            <div className='flex justify-between'>
                <div className='flex'>
                    {/* shape top left  */}
                    <img className='w-32 h-28' src={Asset1} alt="asset1" />

                    <img className='w-72 h-20 mt-2.5 left-32' src={Logo} alt="logo" />
                </div>

                <div className="flex">

                    <ul className='flex justify-between list-none w-[29.5rem] font-roboto text-[18px] font-normal mt-7 right-40 relative z-10' >
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Team</li>
                        <li>Clients</li>
                        <li>Contact Us</li>
                    </ul>

                    {/* shape top right  */}
                    <img className='w-80 h-96 top-[-0.875rem] right-0 absolute' src={Asset2} alt="asset2" />

                </div>
            </div>
        </nav>
    );
}
