import type { headingProps } from "../../Types/global";

const Heading = ({ tag, title, desc }: headingProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[15px] pt-[20px]">
      <button className="bg-[#fff] py-[8px] px-[14px] border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
        {tag}
      </button>
      <h4 className="leading-[46px] max-w-[800px] text-[#1c1e1f] text-[38px] font-light">
        {title}
      </h4>
      <h5 className="text-[#6c7072] text-[18px] leading-[22px] font-light max-w-[460px]">
        {desc}
      </h5>
    </div>
  );
};

export default Heading;
