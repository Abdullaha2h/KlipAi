import React from "react";
import Image from "next/image";

interface OwnershipCardProps {
    width?: string;
    height?: string;
    showPlusIcon?: boolean;
    children?: React.ReactNode;
}

const OwnershipCard: React.FC<OwnershipCardProps> = ({
    showPlusIcon = true,
    width = "w-[411px]",
    height = "h-[838px]",
    children,
}) => {
    return (
        <div className={`relative bg-[#151515] overflow-hidden rounded-[20px] ${width} ${height}`}>
            {/* Plus Icon (PNG) */}
            {showPlusIcon && (
                <div className=" absolute top-[24.6px] right-[24.6px] w-[35px] h-[35px] flex items-center justify-center">
                    <Image
                        src="/plusicon.png"
                        alt="Plus Icon"
                        width={35}
                        height={35}
                        className="object-contain"
                    />
                </div>
            )}
            {children}
        </div>
    );
};

export default OwnershipCard;
