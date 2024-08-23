export interface WaitlistButtonProps {
  type: "submit" | "button";
  label: string;
  value: string;
  icon?: string;
  variant?: string;
}
export interface BadgeInfoProps {
  badgeStatus: string;
  badgeText: string;
  badgeColor?: string;
}
