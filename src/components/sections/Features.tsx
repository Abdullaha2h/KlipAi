import React from 'react'
import Image from "next/image";
const Features = () => {
    return (
        <div className=" h-[597px] flex md:gap-[63px] flex-col md:flex-row md:h-[775px] md:mt-20 items-center justify-center">

            {/* Visuals */}

            <div className="w-[408px] h-[341px] overflow-hidden relative flex flex-col items-center  rounded-[8.86px] border-[1.11px] border-[#EDEDED] bg-[#F4F2F0] md:w-[668px] md:h-[471px]" >

                <Image
                    src="/BitPhone.png"
                    alt="BitPhone"
                    width={210}
                    height={426}
                    className=" w-[210px] h-[426px] mt-16 md:w-[415px] md:mt-20 md:h-[842px]"

                />

                <Image
                    src="/bitCard1.png"
                    alt="BitCard1"
                    width={161}
                    height={43}
                    className="absolute left-[4px] md:left-[-25px] top-[46px] md:w-[301px] md:h-[81px] z-10 object-cover"
                    priority
                />

                <Image
                    src="/bitCard2.png"
                    alt="BitCard2"
                    width={245}
                    height={51}
                    className="absolute left-[262px]   md:left-[437px] md:top-[289px]  top-[181px] z-10 md:w-[370px]  "
                    priority
                />
            </div>
            {/* What is KLIPAI */}
            <div className="mt-10 flex flex-col ">
                <h2 className="w-[406px] h-[38px] md:w-[501px] md:h-[48px] font-sora font-bold text-[38px] md:text-[48px] leading-[100%] text-black mb-4">
                    What is KlipAi
                </h2>


                <p className="w-[408px] h-[60px] font-sora font-normal md:text-[16px] text-[12px] leading-[15px] capitalize text-black mb-6 md:w-[501px] md:h-[130px] ">
                    KlipAi is the all-in-one smart wallet layer for Web3.<br className='hidden md:flex'/> We turn every crypto transaction into a clean, AI-powered receipt. You can also send tokens using a simple username. No TX hashes. No wallet address mistakes. <br className='hidden md:flex'/> Just clarity, control, and convenience.
                </p>
            </div>
        </div>
    )
}

export default Features
