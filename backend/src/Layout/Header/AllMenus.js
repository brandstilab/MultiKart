import Link from "next/link";
import { useTranslation } from "react-i18next";

const AllMenus = ({ menu }) => {
  const { t } = useTranslation("common");
  return (
    <>
      {menu?.map((elem, i) => (
        <li key={i}>
          <Link className="main-content" href={elem.type !== "sub" ? elem?.path : ""}>
            {elem.icon} {t(elem.title)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default AllMenus;
