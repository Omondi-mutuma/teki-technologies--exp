import { BadgeInfoProps } from "@/types/index.t";

const Badge = ({ badgeStatus, badgeText, badgeColor }: BadgeInfoProps) => {
  return (
    <div className="custom-border flex items-center px-4 py-2 gap-2 rounded-full bg-badge-bg">
      <div className="bg-badge-label-bg p-2 rounded-full ">
        <p className="text-black font-bold text-xs uppercase">{badgeStatus}</p>
      </div>
      <p className="body-m text-badge-label-bg">{badgeText}</p>
    </div>
  );
};

export default Badge;
