import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { HousesCardProps } from "../../../../Types/global";

const HousesCard = ({ id, name, image, location, price }: HousesCardProps) => {
  return (
    <Link to={`/detail/${id}`} className="rounded-3xl overflow-hidden relative group block">
      <div className="overflow-hidden relative group cursor-pointer ">
      <img
        src={image}
        alt=""
        className="w-full h-[350px] object-cover group-hover:scale-[1.1] duration-1000"
      />
      <div className="absolute top-0 left-0 p-5 flex items-center justify-between w-full">
        <span className="flex items-center text-[14px] font-light text-white gap-1.5 ">
          <img
            src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb0f3/68c0f238ec1660243de7e8f4_mingcute--location-line.svg"
            alt=""
          />
          {location}
        </span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-[3px] bg-white border border-[#f9f9f9] flex items-center gap-0.5 rounded-[26px] text-[14px] font-light text-[#343d41]">
            2 Bedroom
          </button>
          <button className="px-3 py-[3px] bg-white border border-[#f9f9f9] flex items-center gap-0.5 rounded-[26px] text-[14px] font-light text-[#343d41]">
            2 Bathroom
          </button>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 p-5 py-[26px] flex items-center justify-between w-full 
    bg-[#0000005b] backdrop-blur-[2px]"
      >
        <span className="text-[16px] leading-6 font-normal text-white">
          {name}
        </span>

        <div className="flex items-center gap-2">
          <h2 className="text-[16px] leading-6 font-normal text-white">
            $ {price}
          </h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff6] p-[11px] w-11 h-11 backdrop-blur-[2px] rounded-[99px] opacity-0 group-hover:opacity-100 duration-300">
        <ArrowUpRight color="white" />
      </div>
      </div>
    </Link>
  );
};

export default HousesCard;
