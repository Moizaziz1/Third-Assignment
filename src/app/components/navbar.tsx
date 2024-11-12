import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="w-[1920px] h-[92px] absolute left-[1px] bg-[#043873] justify-between py-[16px] px-[220px] flex items-center  ">
        <div className="w-[191px] h-[34px] justify-between">
          <Image src="/image/Logo.png" alt="logo" width={191} height={34} />
        </div>
        <div className="flex w-[737.5px] h-[60px] gap-[60px] items-center">
          <div>
            <ul className="flex w-[549px] h-[23px] font-dm-sans text-lg font-medium leading-[23px] text-left gap-[32px] text-[#FFFFFF]">
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px] gap-[10px] rounded-[8px] py-[16px] px-[40px] bg-[#FFE492] font-inter text-lg font-medium leading-[23px] tracking-[-0.02em] text-left text-[#043873]">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
