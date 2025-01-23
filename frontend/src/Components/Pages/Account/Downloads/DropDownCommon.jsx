import useCreate from "@/Utils/Hooks/useCreate";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropDownCommon = ({ elem }) => {
  const { t } = useTranslation("common");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { mutate } = useCreate("/download/zip/link", false, false, "No", (res) => { if (res?.status === 200 || res?.status === 201) { window.location.assign(res?.data?.download_link) } });
  const { mutate: downloadKey } = useCreate("/download/key/link", false, false, "No", (res) => { if (res?.status === 200 || res?.status === 201) { window.location.assign(res?.data?.download_link) } });

  const downloadFiles = (id) => {
    mutate({ id })
  }
  const downloadLicense = (id) => {
    downloadKey({ id })
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{t("Download")}</DropdownToggle>
      <DropdownMenu end="true" container="body" className="download-dropdown-menu">
        <div className="dropdown-box">
          {elem?.can_download_file && (
            <DropdownItem onClick={() => downloadFiles(elem?.id)}>
              All Files & Documentation
            </DropdownItem>
          )}
          {elem?.can_download_license && (
            <DropdownItem onClick={() => downloadLicense(elem?.id)}>
              License Certificate & Purchase Code
            </DropdownItem>
          )}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownCommon;
