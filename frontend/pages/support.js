import { FaTwitter, FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";

export default function App(){
    return (
        <main>
            <title>Support</title>
            <div className="bg-gradient-to-r  from-purple-900 via-blue-950 to-green-900 items-center justify-center flex w-full h-[35vh]">
                <div className=" text-white custom-font text-5xl">CONTACT US</div>
            </div>
            <div className="custom-font flex flex-col items-center justify-center m-10 text-2xl">
                <p className="mb-10">Reach out to us on </p>
                
                <div className="grid grid-cols-2 gap-2 pt-100">
                    <a className="grid items-center justify-center w-20 h-20 bg-white rounded-tl-2xl hover:scale-105 hover:bg-blue-400 transition-all group">
                        <FaTwitter className="invert group-hover:invert-0 transition-all"/>
                    </a>

                    <a className="grid items-center justify-center w-20 h-20 bg-white rounded-tr-2xl hover:scale-105 hover:bg-black transition-all group">
                        <FaGithub className="invert group-hover:invert-0 transition-all"/>
                    </a>

                    <a className="grid items-center justify-center w-20 h-20 bg-white rounded-bl-2xl hover:scale-105 hover:bg-red-400 transition-all group">
                        <MdEmail className="invert group-hover:invert-0 transition-all"/>
                    </a>

                    <a className="grid items-center justify-center w-20 h-20 bg-white rounded-br-2xl hover:scale-105 hover:bg-pink-600 transition-all group">
                        <LuInstagram className="invert group-hover:invert-0 transition-all"/>
                    </a>
                </div>
            </div>

        </main>


    )}