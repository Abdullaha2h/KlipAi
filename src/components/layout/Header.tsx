'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const NAV_LINKS = [
  'What is KlipAi',
  'Send KlapAI',
  'AI Agent',
  'Testimonials',
  'Web3',
];

const Header = () => {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-[2.32vh] md:top-[24.68px]
        z-50 flex items-center justify-between
        w-[88.33%] md:w-[1272px] min-w-[320px] max-w-[94vw]
        h-[7.44vh] md:h-[79.18px]
        px-4 md:px-4
        bg-black rounded-[1.48vh] md:rounded-[15.728px]
      "
    >
      {/* Mobile Logo */}
      <div className="md:hidden relative w-[83px] h-[25px]">
        <Image
          src="/Logo.png"
          alt="Klipit Logo"
          width={83}
          height={25}
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative w-8 h-[14px]">
        <div className="absolute top-0 w-full border-t border-white" />
        <div className="absolute top-[7px] w-full border-t border-white" />
        <div className="absolute top-[14px] w-full border-t border-white" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1055px] text-white mx-auto">
        {/* Desktop Logo */}
        <div className="relative w-[99px] h-[30px]">
          <Image
            src="/Logo.png"
            alt="Klipit Logo"
            width={99}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-[15.73px]">
          {NAV_LINKS.map((text) => (
            <div
              key={text}
              className="font-sora text-[16px] leading-[20px] text-[#F6E9E9]"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Login Button */}
        <Button className="font-sora font-semibold w-[109.91px] h-[47.18px] rounded-[40px] text-[#1E1E1E] bg-[rgba(18,237,57,1)] hover:bg-[rgba(18,237,57,0.9)]">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
