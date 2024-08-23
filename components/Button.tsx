import { WaitlistButtonProps } from "@/types/index.t";

const Button = ({ type, label, value, icon, variant }: WaitlistButtonProps) => {
  return (
    <button className={`body-s cursor-pointer rounded-lg ${variant}`}>
      {label}
    </button>
  );
};

export default Button;
