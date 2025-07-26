import React from 'react';
import Image from 'next/image';
import OwnershipCard from '../ui/OwnershipCard';

const Features = () => {
  return (
    <div>
      {/* ===== What is KlipAI Section ===== */}
      <section 
        className="h-[597px] flex md:h-[775px] md:mt-20"
        aria-label="What is KlipAI introduction section"
      >
        <div className='w-[1400px] h-[631px] md:rounded-[8px] md:mt-20 md:mx-20 md:p-80px items-center justify-center md:border-[2px] md:border-[#EDEDED] flex flex-col md:flex-row md:gap-[63px]'>
          
          {/* Phone and Cards Visual */}
          <div 
            className="w-[408px] h-[341px] overflow-hidden relative flex flex-col items-center rounded-[8.86px] border-[1.11px] border-[#EDEDED] bg-[#F4F2F0] md:w-[668px] md:h-[471px]"
            aria-hidden="true"
          >
            <Image
              src="/BitPhone.png"
              alt="Smartphone displaying KlipAI interface"
              width={210}
              height={426}
              className="w-[210px] h-[426px] mt-16 md:w-[415px] md:mt-20 md:h-[842px]"
              priority
            />

            <Image
              src="/BitCard1.png"
              alt="First credit card design"
              width={161}
              height={43}
              className="absolute left-[4px] md:left-[-25px] top-[46px] md:w-[301px] md:h-[81px] z-10 object-cover"
              priority
            />

            <Image
              src="/BitCard2.png"
              alt="Second credit card design"
              width={245}
              height={51}
              className="absolute left-[262px] md:left-[437px] md:top-[289px] top-[135px] z-10 md:w-[370px]"
              priority
            />
          </div>

          {/* Description Text */}
          <div className="mt-10 flex flex-col">
            <h2 className="w-[406px] h-[38px] md:w-[501px] md:h-[48px] font-sora font-bold text-[38px] md:text-[48px] leading-[100%] text-black mb-4">
              What is KlipAi
            </h2>
            <p className="w-[408px] h-[60px] font-sora font-normal md:text-[16px] text-[12px] leading-[15px] capitalize text-black mb-6 md:w-[501px] md:h-[130px]">
              KlipAi is the all-in-one smart wallet layer for Web3.<br className='hidden md:flex' /> We turn every crypto transaction into a clean, AI-powered receipt. You can also send tokens using a simple username. No TX hashes. No wallet address mistakes. <br className='hidden md:flex' /> Just clarity, control, and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Benefits Section ===== */}
      <section aria-label="Benefits of using KlipAI">
        {/* Benefits Tag */}
        <div 
          className="relative top-0 md:ml-[83px] ml-[15px] flex items-center justify-center px-[15px] py-[10px] gap-[10px] w-[96px] h-[40px] border border-[#119200] bg-[rgba(17,146,0,0.19)] rounded-[30px]"
          aria-label="Benefits section tag"
        >
          <span className="text-black font-sora font-bold text-[16px] leading-[20px] uppercase tracking-[-0.03em]">
            Benefit
          </span>
        </div>

        {/* Say Goodbye to Wallet Addresses */}
        <div 
          className="relative flex flex-col md:justify-between md:pr-[83px] md:flex-row top-0 md:ml-[83px] ml-[15px] mt-5 px-[15px] py-[10px]"
          aria-label="Wallet address replacement feature"
        >
          <h2 className="w-[407px] h-[95px] md:w-[501px] md:h-[48px] font-sora font-bold text-[38px] md:text-[48px] text-black mb-4">
            Say goodbye to Wallet Addresses.
          </h2>
          <p className="left-[16px] md:text-[16px] md:left-[16px] md:top-[230px] md:w-[303px] md:h-[71px] w-[408px] h-[26px] font-sora text-[12px] capitalize text-black font-normal">
            Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mb-20 md:mt-30 mt-10 px-4 md:px-20 justify-center"
          aria-label="Benefits cards grid"
        >
          {/* ===== Token Support Card ===== */}
          <div className="relative flex flex-col gap-5">
            <div className="absolute left-[-50px] w-[500px] h-[450px] bg-[#51FC8B] blur-[50px] rounded-full z-0" />
            
            <OwnershipCard width="w-full" height="h-[838px]" showPlusIcon={true}>
              <div>
                <Image
                  src="/TokenIcon.png"
                  alt="Token support icon"
                  width={55}
                  height={55}
                  className="absolute w-[55.01px] h-[55.01px] left-[36px] top-[30px]"
                />
                <div className="absolute w-[224px] h-[90px] left-[36px] top-[93px] font-sora font-normal text-[36px] leading-[45px] text-white flex justify-center items-center">
                  Token Support
                </div>
                <Image
                  src="/TokenPhone.png"
                  alt="Phone showing token support interface"
                  width={874}
                  height={656}
                  className="absolute z-10 top-[159px]"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-[120px] z-9">
                  <Image
                    src="/Bars.png"
                    alt="Performance chart bars"
                    width={409}
                    height={120}
                    className="w-full h-full object-cover rounded-b-[20px]"
                    priority
                  />
                </div>
              </div>
            </OwnershipCard>
          </div>

          {/* ===== Secure Transfers Column ===== */}
          <div className="flex flex-col gap-5">
            <OwnershipCard width="w-full" height="h-[409px]" showPlusIcon={false}>
              <div className="absolute w-[330px] h-[45px] left-[36px] top-[35px] font-sora font-normal text-[36px] leading-[45px] text-white flex justify-center items-center">
                Secure Transfers
              </div>
              <div className='flex justify-center'>
                <Image
                  src="/SecureCard.png"
                  alt="Secure transfer card illustration"
                  width={230}
                  height={330}
                  className="absolute top-[180px] flex scale-[1.8] justify-center items-center"
                  priority
                />
              </div>
            </OwnershipCard>

            {/* Balance Cards */}
            <OwnershipCard width="w-full" height="h-[409px]" showPlusIcon={true}>
              <div className="relative w-full h-[400px] flex justify-center">
                <div className="absolute w-[280px] h-[263px] left-[41.64px] top-[51.88px]">
                  <Image
                    src="/BalanceCard1.svg"
                    alt="First balance card"
                    width={280}
                    height={263}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="absolute w-[239px] h-[184px] left-[135.64px] top-[183.88px] backdrop-blur-[2.55px]">
                  <Image
                    src="/BalanceCard2.svg"
                    alt="Second balance card"
                    width={239}
                    height={184}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </OwnershipCard>
          </div>

          {/* ===== Performance Cards Column ===== */}
          <div className="flex flex-col gap-5">
            <OwnershipCard width="w-full" height="h-[409px]" showPlusIcon={true}>
              <div className="relative w-full h-full">
                <div className="absolute left-[37px] top-[66px] w-[313px] h-[241px]">
                  <Image
                    src="/PerformanceCard1.svg"
                    alt="First performance metric card"
                    width={313}
                    height={241}
                    className="w-full h-full object-contain drop-shadow-lg rounded-[16px] border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] hover:shadow-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 mix-blend-overlay rounded-[16px] pointer-events-none" />
                </div>
                <div className="absolute left-[186px] top-[201px] w-[202px] h-[173px] backdrop-blur-[5.1px]">
                  <Image
                    src="/PerformanceCard2.svg"
                    alt="Second performance metric card"
                    width={202}
                    height={173}
                    className="w-full h-full object-contain rounded-[16px] border-2 border-transparent hover:border-emerald-400/30 shadow-md hover:shadow-emerald-400/20 transition-all"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-[16px] pointer-events-none" />
                </div>
              </div>
            </OwnershipCard>

            <OwnershipCard width="w-full" height="h-[409px]" showPlusIcon={true}>
              <div className="absolute w-[330px] h-[45px] left-[36px] top-[35px] font-sora font-normal text-[36px] leading-[45px] text-white flex justify-center items-center">
                Unique Identity
              </div>
              <div className="relative">
                <div className="absolute w-[351px] h-[342px] left-[40.64px] top-[107.88px] rounded-[1px]">
                  <Image
                    src="/Identity2.svg"
                    alt="Identity verification overlay"
                    width={351}
                    height={342}
                    className="absolute scale-[1.2] rounded-[1px]"
                  />
                </div>
                <div className="absolute w-[351px] h-[342px] left-[29.64px] top-[120.88px] rounded-[1px]">
                  <Image
                    src="/Identity1.svg"
                    alt="Base identity card"
                    width={351}
                    height={342}
                    className="absolute scale-[1.2] rounded-[1px]"
                  />
                </div>
              </div>
            </OwnershipCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;