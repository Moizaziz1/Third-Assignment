import Image from "next/image";

export default function Footer() {
  return (
    <div className="grid w-[1920px] h-[461px] absolute top-[5195px] left-[1px] px-[220px] py-[140px] gap-[200px] bg-[#043873]">
         <div className="grid w-[1480px] h-[289px] gap-[100px]">
             <div className="flex w-[1480px] h-[169px] gap-[100px]">
                 <div className="grid w-[295px] h-[169px] gap-[15px]">
                    <Image src="/image/Logo.png" alt="Logo" width={191} height={34}/>
                    <p className="grid w-[240px] h-[120px] font-inter font-[400] text-[18px] leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                 </div>
                 <div className="grid w-[295px] h-[127px] gap-[15px]">
                    <p className="w-[68px] h-[22px] font-inter font-[700] text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF]">Product</p>
                    <p className="w-[70px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFE492]">Overview</p>
                    <p className="w-[50px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Pricing</p>
                    <p className="w-[177px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Customer stories</p>
                 </div>
                 <div className="grid w-[295px] h-[130px] gap-[16px]">
                    <p className="w-[91px] h-[22px] font-inter font-[700] text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF]">Resources</p>
                    <p className="w-[33px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Blog</p>
                    <p className="w-[128px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Guides & tutorials</p>
                    <p className="w-[130px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Help center</p>
                 </div>
                 <div className="grid w-[295px] h-[130px] gap-[16px]">
                 <p className="w-[83px] h-[22px] font-inter font-[700] text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF]">Company</p>
                    <p className="w-[66px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">About us</p>
                    <p className="w-[62px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Careers</p>
                    <p className="w-[99px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">Media kit</p>
                 </div>
             </div>
            <div className="grid w-[1480px] h-[20px] justify-center">
                <p className="w-[169px] h-[20px] font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">©2021 Whitepace LLC.</p>
            </div>
         </div>
    </div>
  );
}