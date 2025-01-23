
import { useTranslation } from "react-i18next";

import { Nav, NavItem, NavLink } from "reactstrap";
import { generateTitleList } from "./tittleList";

const TabForProduct = ({ values, activeTab, setActiveTab, errors, touched }) => {

  const { t } = useTranslation('common');
  const filteredTabs = generateTitleList(values)
  return (
    <Nav tabs className="nav-pills mb-3 sticky-position">
      {filteredTabs.map((elem, i) => (
        <NavItem key={i} className={elem.inputs?.filter((item) => errors[item] && touched[item]).length ? "is-invalid border border-danger" : ""}>
          <NavLink
            className={activeTab == String(i + 1) ? "active" : ""}
            onClick={() => {
              setActiveTab(String(i + 1));
            }}>
            {elem.icon && elem.icon}
            {t(elem.title)}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TabForProduct;
