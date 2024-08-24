import { CompanyCardProps } from "@/types/index.t";
import Image from "next/image";

const CompanyCard = ({ source }: CompanyCardProps) => {
  return (
    <div className="px-[10px] md:px-[40px] py-[32px] custom-border rounded-lg mb-[10px]">
      <Image src={source} alt="" width={155} height={34} />
    </div>
  );
};

export default CompanyCard;
