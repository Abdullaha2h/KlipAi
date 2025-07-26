'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div 
            className="relative w-full h-[1028px] md:h-[1065px]"
            aria-label="Klip AI Hero Section"
        >
            {/* ===== Main Heading ===== */}
            <h1 
                className="absolute left-1/2 top-[167px] -translate-x-1/2 w-[296px] h-[114px] md:w-[672px] md:h-[96px] text-center text-[38px] md:text-[48px] font-bold leading-[100%] text-black font-sora z-[1]"
                aria-label="Klip AI value proposition"
            >
                AI receipts. Simple crypto. Smart control.
            </h1>

            {/* ===== Visual Elements Container ===== */}
            <div 
                className="md:order-4 relative flex items-center justify-center"
                aria-hidden="true" // Decorative images, hidden from screen readers
            >
                <div className="relative w-[380px] h-[476px] md:w-[586px] md:h-[586px]">
                    {/* Green Background Blur Effect */}
                    <div 
                        className="absolute top-[281px] md:top-[418px] left-1/2 -translate-x-1/2 w-[588px] h-[417px] md:w-[666px] md:h-[415px] bg-[#51FC8B] blur-[300px] rounded-full z-0"
                        role="presentation"
                    />

                    {/* First Card Image */}
                    <Image
                        src="/card1.png"
                        alt="First credit card illustration"
                        width={129}
                        height={38}
                        className="absolute top-[415px] md:top-[598px] left-[20px] md:left-[-110px] w-[129px] h-[38px] md:w-[246px] md:h-[72px] z-10"
                        priority
                    />

                    {/* Second Card Image */}
                    <Image
                        src="/card2.png"
                        alt="Second credit card illustration"
                        width={155}
                        height={42}
                        className="absolute top-[641px] md:top-[794px] left-[210px] md:left-[470px] w-[155px] h-[42px] md:w-[267px] md:h-[72px] z-10"
                        priority
                    />

                    {/* Green Background Image */}
                    <Image
                        src="/Green_Background.png"
                        alt="Decorative green background"
                        width={380}
                        height={380}
                        className="absolute top-[325px] md:top-[428px] left-0 md:w-[586px] md:h-[586px] z-0"
                        priority
                    />

                    {/* Main Phone Image */}
                    <Image
                        src="/Phone.png"
                        alt="Smartphone displaying Klip interface"
                        width={377}
                        height={476}
                        className="absolute top-[288.4px] md:top-[430px] left-[30px] scale-[1.18] md:scale-[1.25] md:w-[1196px] md:h-[797px] object-contain z-5"
                        priority
                    />
                </div>
            </div>

            {/* ===== Description Text ===== */}
            <p 
                className="absolute top-[868px] md:top-[290px] left-1/2 -translate-x-1/2 text-center text-[12px] md:text-[16px] w-[501px] h-[30px] md:[52px] font-sora text-black font-normal capitalize z-10"
                aria-label="Klip wallet description"
            >
                Klip is your all-in-one decentralized wallet <br />
                designed for security, flexibility, and full ownership.
            </p>

            {/* ===== Call-to-Action Button ===== */}
            <Button 
                className="absolute top-[924px] md:top-[368px] left-1/2 -translate-x-1/2 w-[167px] md:w-[213.73px] h-[54px] rounded-[28px] uppercase font-sora font-bold md:font-normal text-black bg-[rgba(18,237,57,1)] hover:bg-[rgba(18,237,57,0.9)]"
                aria-label="Get started with Klip"
            >
                Get Started <ArrowRight className="ml-2" aria-hidden="true" />
            </Button>
        </div>
    );
};

export default Hero;