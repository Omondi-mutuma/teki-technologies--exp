import { COMPANIES } from "@/constants";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  return (
    <section className="flex flex-col gap-10 items-center justify-center px-3 py-[36px] lg:px-10">
      <p className="text-body-m text-opacity-30">
        Trusted by the world’s most innovative teams
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {COMPANIES.map((company, index) => (
          <CompanyCard key={index} source={company.source} />
        ))}
      </div>
    </section>
  );
};

export default Companies;
