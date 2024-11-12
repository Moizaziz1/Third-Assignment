import Image from "next/image";

export default function Sponsers() {
    return (
      <div className="grid w-[1920px] h-[538px] absolute top-[4654px] px-[220px] py-[140px] gap-[100px] justify-center">
          <div className="grid w-[1482px] h-[87px] font-inter font-[700] text-[72px] leading-[87.14px] tracking-[-0.02em] text-center text-[#212529]" >
            <h1>Our sponsors</h1>
          </div>
          <div className="flex w-[1482px] h-[71px] justify-between">
          <Image src="/image/Apple.png" alt="apple" width={55.47} height={68}/>
          <Image src="/image/Microsoft.png" alt="Microsoft" width={287} height={62}/>
          <Image src="/image/Slack_Technologies_Logo 1.png" alt="logo" width={280} height={71}/>
          <Image src="/image/Google.png" alt="Google" width={211} height={69.81}/>

          </div>
      </div>
    );
  }