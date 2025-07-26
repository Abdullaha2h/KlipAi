import React from 'react'
import Image from "next/image";
const Features = () => {
    return (
        <div className=" h-[597px] flex flex-col items-center justify-center">

            {/* Visuals */}

            <div className="w-[408px] h-[341px] overflow-hidden relative flex flex-col items-center  rounded-[8.86px] border-[1.11px] border-[#EDEDED] bg-[#F4F2F0]" >

                <Image
                    src="/BitPhone.png"
                    alt="BitPhone"
                    width={210}
                    height={426}
                    className=" w-[210px] h-[426px] mt-16"
                    
                />
           
                  <Image
        src="/bitCard1.png"
        alt="BitCard1"
        width={161}
        height={43}
        className="absolute left-[4px] top-[46px] z-10 object-cover"
        priority
      />

      <Image
        src="/bitCard2.png"
        alt="BitCard2"
        width={245}
        height={51}
        className="absolute left-[262px] top-[181px] z-10 "
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
