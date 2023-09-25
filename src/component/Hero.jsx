import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
    return (
        <div>
            <div className="mt-16  sm:ml-32">
                <div className="  border-dashed rounded-lg dark:border-gray-700">

                    <div className=" text-2xl font-bold ">
                        Social Media Perfomance
                    </div>
                    <div className=' flex flex-row gap-4'>

                        <SocialIcon UserName={"ankt_chadda"} Icon={<FaInstagram />} />
                        <SocialIcon UserName={"Panjak_Patel"} Icon={<FaLinkedin />} />
                        <SocialIcon UserName={"Arjun_Nagar"} Icon={<FaTwitter />} />
                        <SocialIcon UserName={"Raju_Sharma"} Icon={<FaGithub />} />

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Hero

const SocialIcon = ({ Icon, UserName }) => {
    return (
        <div className="mt-6 shadow-md  bg-gray-100 flex flex-col justify-center items-center w-40 h-24 rounded-3xl border-2">
            <div className=' absolute  mb-24'>
                <a className=' text-pink-600 rounded-2xl  text-4xl ' href="#">{Icon} </a>
            </div>
            <div>
                <a className='  text-base' href="#">
                    @{UserName}</a>
            </div>
            <div className=' w-full mt-1 border-gray-700 border'></div>
            <a className=' text-sm mt-2 underline text-indigo-800 underline-offset-8' href="#">check Account</a>

        </div>)
}