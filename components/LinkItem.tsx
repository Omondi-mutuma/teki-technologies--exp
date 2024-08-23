import { NAV_LINKS } from "@/constants";

const LinkItem = () => {
  return NAV_LINKS.map((nav, index) => (
    <li key={index}>
      <a className="flex items-center gap-1 body-xs">
        {nav.name}
        {nav.icon && <nav.icon />}
      </a>
    </li>
  ));
};

export default LinkItem;
