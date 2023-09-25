import React from 'react'
import { FaBitcoin } from 'react-icons/fa';

function OurTask() {
    return (
        <div>
            <div className="p-4 sm:ml-28">
                <div className="  border-dashed rounded-lg ">

                    <div className=" text-2xl font-bold ">
                        My Tasks
                    </div>
                    <div className=' flex flex-row gap-10'>
                        <p className=' underline  cursor-pointer underline-offset-8'>New Assigned</p>
                        <p className=' cursor-pointer'>Completed</p>
                    </div>

                    <div>
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"Complted"} ProjectName={"Project Meelo"} ProjectDesc={'Create real estate landing page'} ProjectPer={"78%"} />
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"Incomplted"} ProjectName={"Project Meelo"} ProjectDesc={"possible to build multi columm"} ProjectPer={"89%"} />
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"In Progress"} ProjectName={"Project Meelo"} ProjectDesc={'right corner of the your code a'} ProjectPer={"70%"} />
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"Pending"} ProjectName={"Project Meelo"} ProjectDesc={'Create real estate landing pagw'} ProjectPer={"90%"} />
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"Complted"} ProjectName={"Project Meelo"} ProjectDesc={'Well implement a simple layout'} ProjectPer={"78%"} />
                        <Tasks ProjcetIcon={<FaBitcoin />} PorjectStc={"Complted"} ProjectName={"Project Meelo"} ProjectDesc={'possible to build multi column a'} ProjectPer={"66%"} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTask

const Tasks = ({ ProjcetIcon, ProjectName, ProjectDesc, PorjectStc, ProjectPer }) => {
    return (
        <div className=' mt-3  flex flex-row justify-center items-center rounded-lg  shadow-xl  w-max h-16 bg-white border'>
            <a className=' pl-3 text-4xl' href="">{ProjcetIcon}</a>

            <div className="pl-6 ">
                <div className=' text-center text-base font-bold'>{ProjectName}</div>
                <div className=' text-center text-sm'>{ProjectDesc}</div>
            </div>
            <div className=' ml-10 p-2 relative  w-96'>
                <div className="flex justify-between mb-2">
                    <span className="text-base font-medium  text-pink-500 dark:text-white">{PorjectStc}</span>
                    <span className="text-sm font-medium text-pink-500 dark:text-white">{ProjectPer}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-blue-500 h-1.5 rounded-full " style={{ width: ProjectPer }}></div>
                </div>
            </div>

        </div>
    )
}