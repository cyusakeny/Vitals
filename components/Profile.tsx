import React from "react";
import Skill from "./skills";
import Works from "./work";
interface MyComponentProps {
}
const Profile: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
    return(
        <div className=" flex flex-col ">
            <div className="flex flex-col space-y-[20px] mb-[30px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Connect Rwanda</h1>
                <div className="">
                    <p className="text-[white]">An innovative project designed to empower Rwandan Engineers by providing them with 
                    a comprehensive platform to explore diverse opportunities 
                    across Africa. Through this initiative, 
                    engineers can access valuable information on job openings, networking events, and collaboration prospects in various regions. By
                     fostering cross-border connections, Connect Rwanda aims to enhance professional growth, promote knowledge exchange, and facilitate partnerships, ultimately contributing to the development of engineering expertise throughout Africa.</p>
                <div className="flex flex-wrap space-x-[63px] mt-[25px] justify-center">
                    <div className="w-[380px] h-64 border border-gray-400">
                    <img src="/group1.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-[380px] h-64 border border-gray-400">
                    <img src="/grp2.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-[380px] h-64 border border-gray-400">
                    <img src="/group2.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>


                </div>
                </div>
                
            </div>
            
            <div className="flex flex-col mt-[30px] space-y-[20px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Koffi: The Savior Of The San Tribe</h1>
                <div className="">
                    <p className="text-[white]">The story of Koffi, a San warrior who 
                    embarked on a quest to protect his tribe from encroaching dangers. 
                    Armed with a unique blend of courage and wisdom, he became a beacon of 
                    inspiration for his people. Through trials and triumphs, 
                    Koffi valor and unwavering spirit touched the souls of many, uniting 
                    tribes and transcending borders. His legendary tale spread like wildfire, 
                    kindling hope and awakening bravery in every heart he encountered. Koffi 
                    legacy lives on, forever etched in the hearts of those he inspired.</p>
                <div className="flex flex-wrap space-x-[63px] mt-[25px] justify-center">
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/war1.png" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/war2.png" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/war3.png" alt="" className="w-full h-[300px] object-cover"/>
                    </div>


                </div>
                </div>
                
            </div>
           
        </div>
    )
}
export default Profile;