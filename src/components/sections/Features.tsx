import React from 'react'
import Image from "next/image";
const Features = () => {
    return (
        <div className="w-[440px] h-[597px] flex flex-col items-center justify-center">

            {/* Visuals */}

            <div className="w-[408px] h-[341px] overflow-hidden pt-16 flex flex-col items-center  rounded-[8.86px] border-[1.11px] border-[#EDEDED] bg-[#F4F2F0]" >

                <Image
                    src="/BitPhone.png"
                    alt="BitPhone"
                    width={210}
                    height={426}
                    className=" top-[64px] left-[99px] w-[210px] h-[426px]"
                    priority
                />

            </div>
            {/* What is KLIPAI */}
            <div className="mt-10 flex flex-col items-center">
                <h2 className="w-[406px] h-[38px] font-sora font-bold text-[38px] leading-[100%] text-black mb-4">
                    What is KlipAi
                </h2>


                <p className="w-[408px] h-[60px] font-sora font-normal text-[12px] leading-[15px] capitalize text-black mb-6 ">
                    KlipAi is the all-in-one smart wallet layer for Web3. We turn every crypto transaction into a clean, AI-powered receipt. You can also send tokens using a simple username. No TX hashes. No wallet address mistakes. Just clarity, control, and convenience.
                </p>
            </div>
        </div>
    )
}

export default Features
