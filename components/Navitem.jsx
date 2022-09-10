/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import Link from "next/link";

const Navitem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`
        nav__link ${active ? "active" : ""}
        `}
      >
        {text}
      </a>
      </Link>
  );
};

export default Navitem;