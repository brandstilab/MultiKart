"use client";
import i18next from "i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const HeaderLanguage = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({});
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const language = [
    { id: 1, title: "English", icon: "en", image: "us", isLang: "/en/" },
    { id: 2, title: "Arabic", icon: "ar", image: "ar", isLang: "/ar/" },
    { id: 3, title: "French", icon: "fr", image: "fr", isLang: "/fr/" },
    { id: 4, title: "Spanish", icon: "es", image: "es", isLang: "/es/" },
  ];
  useEffect(() => {
    const defaultLanguage = language.find((data) => data.icon == currentLanguage);
    setSelectedLang(defaultLanguage);
  }, []);
  const router = useRouter();
  // To change Language
  const handleChangeLang = (value) => {
    setSelectedLang(value);
    i18next.changeLanguage(value.icon);
    router.refresh();
  };
  return (
    <Dropdown className="theme-form-select" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="transparent" className="select-dropdown" type="button" id="select-language">
        {selectedLang?.image && <div  className={`iti-flag ${selectedLang.image}`}  />}
        <span>{selectedLang?.title}</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        {language.map((elem, i) => {
          if (elem.icon === currentLanguage) {
            return null;
          }
          return (
            <a onClick={() => handleChangeLang(elem)} key={i}>
              <DropdownItem id={elem.title}>
                {elem?.image && <div className={`iti-flag ${elem?.image}`} />}
                <span>{elem.title}</span>
              </DropdownItem>
            </a>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default HeaderLanguage;
