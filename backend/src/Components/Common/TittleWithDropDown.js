import Pluralize from "@/Utils/CustomFunctions/Pluralize";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import ImportExport from "../Table/ImportExport";

const TittleWithDropDown = ({
  pathName,
  moduleName,
  importExport,
  noDropDown,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation("common");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const router = useRouter();

  return (
    <div className="title-header option-title">
      <h5>{t(moduleName)}</h5>
      {!noDropDown && (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="action-dropdown">
          <DropdownToggle  caret className="btn-sm btn-outline">
            {t("action")}
          </DropdownToggle>
          <DropdownMenu  end>
            {importExport && (
              <ImportExport
                Dropdown
                importExport={importExport}
                moduleName={Pluralize(moduleName)}
              />
            )}
            {pathName && (
              <DropdownItem onClick={() => router.push(pathName)}>
                {t("create")}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
};

export default TittleWithDropDown;
