

import Image from "next/image";

export default function Work() {
    return (
      <div className="w-[1920px] h-[1588px] absolute top-[921px] left-[1px] px-[220px] py-[140px] grid gap-[100px]" >
        <div className="flex w-[1480px] h-[547] gap-[60px] items-center">
            <div className="w-[672px] h-[411px] grid gap-[60px]">
              <div className="grid w-[672px] h-[288px] gap-[24px]">
                <h1 className="w-[672px] h-[174px] font-inter font-[700] text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] ">Project Management</h1>
                <p className="w-[672px] h-[90px] font-inter font-[400] text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529] ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
              </div>
              <div className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] bg-[#4F9CF9] font-inter text-[18px] font-[500] leading-[23px] tracking-[-0.02em] text-white grid gap-[10px]">
                <button>Get Started</button>
              </div>
            </div>
            <div className="w-[748px] h-[547px] bg-[#C4DEFD]">
            </div>
             </div>
             <div>
              <div>
              <Image src="/image/Content.png" alt="content" width={1480} height={661}/>
              </div>
              <div>

              </div>
             </div>
      </div>
    );
  }