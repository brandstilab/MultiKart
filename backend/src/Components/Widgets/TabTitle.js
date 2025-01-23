import { useTranslation } from "react-i18next";
import { Nav, NavItem, NavLink } from "reactstrap";

const TabTitle = ({ values, activeTab, setActiveTab, titleList, errors, touched }) => {
  const { t } = useTranslation("common");
  return (
    <Nav tabs className="nav-pills mb-3">
      {titleList.map((elem, i) => (
        <NavItem key={i} className={elem.inputs?.filter((item) => errors[item] && touched[item]).length ? "is-invalid border border-danger" : ""}>
          <NavLink className={activeTab == String(i + 1) ? "active" : ""} onClick={() => { setActiveTab(String(i + 1)); }}>
            {elem.icon && elem.icon}
            {t(elem.title)}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TabTitle;
