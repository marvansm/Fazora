import Heading from "../../Common/Heading";
import HousesCard from "../../Components/Houses/HousesCard";

const PremiumSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto ">
      <Heading
        tag="Premium Estates"
        title="Discover homes designed to inspire."
        desc="Luxury residences where design meets comfort"
      />
      <div className="grid grid-cols-2 gap-8 mt-[44px]">
        <HousesCard />
        <HousesCard />
        <HousesCard />
        <HousesCard />
      </div>
      <div className="grid grid-cols-4 my-[100px] gap-[20px]">
        <div className="box p-[24px] flex items-center justify-center flex-col bg-white rounded-[24px] gap-[24px]">
          <span className="bg-[#313536] rounded-[99px] w-[44px] h-[44px] p-2 flex items-center justify-center border-[6px] border-[#f9f9f9] text-white">
            01
          </span>
          <div className="flex items-center justify-center flex-col gap-2.5">
            <h2 className="text-[#1c1e1f] font-normal text-[18px] leading-[26px]">
              Search & Select
            </h2>
            <h3 className="text-[16px] text-[#6c7072] leading-[22px] font-light">
              Pick destination & dates
            </h3>
          </div>
          <button className="bg-[#fff] py-[8px] px-[14px] border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
            Browse available hotels.
          </button>
        </div>
        <div className="box p-[24px] flex items-center justify-center flex-col bg-white rounded-[24px] gap-[24px]">
          <span className="bg-[#313536] rounded-[99px] w-[44px] h-[44px] p-2 flex items-center justify-center border-[6px] border-[#f9f9f9] text-white">
            02
          </span>
          <div className="flex items-center justify-center flex-col gap-2.5">
            <h2 className="text-[#1c1e1f] font-normal text-[18px] leading-[26px]">
              Choose Room
            </h2>
            <h3 className="text-[16px] text-[#6c7072] leading-[22px] font-light">
              Choose hotel & room
            </h3>
          </div>
          <button className="bg-[#fff] py-[8px] px-[14px] border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
            pick your preferred option.
          </button>
        </div>
        <div className="box p-[24px] flex items-center justify-center flex-col bg-white rounded-[24px] gap-[24px]">
          <span className="bg-[#313536] rounded-[99px] w-[44px] h-[44px] p-2 flex items-center justify-center border-[6px] border-[#f9f9f9] text-white">
            03
          </span>
          <div className="flex items-center justify-center flex-col gap-2.5">
            <h2 className="text-[#1c1e1f] font-normal text-[18px] leading-[26px]">
              Enter Details
            </h2>
            <h3 className="text-[16px] text-[#6c7072] leading-[22px] font-light">
              Add guest info
            </h3>
          </div>
          <button className="bg-[#fff] py-[8px] px-[14px] border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
            confirm booking summary.
          </button>
        </div>
        <div className="box p-[24px] flex items-center justify-center flex-col bg-white rounded-[24px] gap-[24px]">
          <span className="bg-[#313536] rounded-[99px] w-[44px] h-[44px] p-2 flex items-center justify-center border-[6px] border-[#f9f9f9] text-white">
            04
          </span>
          <div className="flex items-center justify-center flex-col gap-2.5">
            <h2 className="text-[#1c1e1f] font-normal text-[18px] leading-[26px]">
              Confirm
            </h2>
            <h3 className="text-[16px] text-[#6c7072] leading-[22px] font-light">
              Pay & get confirmation
            </h3>
          </div>
          <button className="bg-[#fff] py-[8px] px-[14px] border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
            Receipt & details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumSection;
