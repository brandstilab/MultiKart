import CurrencyContext from "@/Context/CurrencyContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { useHeaderScroll } from "@/Utils/Hooks/HeaderScroll";
import i18next from "i18next";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiEqualizer2Line, RiEqualizerLine, RiHeartLine, RiMenuLine, RiUserLine } from "react-icons/ri";
import { Button, Col, Container, Row } from "reactstrap";
// import English from "../../../../public/assets/images/country/English.png";
import HeaderCart from "../Widgets/HeaderCart";
import HeaderLogo from "../Widgets/HeaderLogo";
import HeaderSearchbar from "../Widgets/HeaderSearchbar";
import MainHeaderMenu from "../Widgets/MainHeaderMenu";

const HeaderSeven = () => {
  const { themeOption, setMobileSideBar, mobileSideBar } = useContext(ThemeOptionContext);
  const isAuthenticated = Cookies.get("uat");
  const UpScroll = useHeaderScroll(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const handleProfileClick = (path) => {
    isAuthenticated ? router.push("/account/dashboard") : setOpenAuthModal(true);
  };
  // For Updating Currency
  const [activeCurr, setActiveCurr] = useState();
  const { settingData, selectedCurrency, setSelectedCurrency } = useContext(SettingContext);
  const { currencyState } = useContext(CurrencyContext);

  useEffect(() => {
    let getDefaultCurrency = JSON.parse(localStorage.getItem("selectedCurrency"));
    setSelectedCurrency(getDefaultCurrency);
  }, []);

  const handleClick = (value) => {
    setActiveCurr(value?.title);
    setSelectedCurrency(value);
    localStorage.setItem("selectedCurrency", JSON.stringify(value));
  };

  // For Updating Language
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [selectedLang, setSelectedLang] = useState({});

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
  const handleChangeLang = (value) => {
    setSelectedLang(value);
    i18next.changeLanguage(value.icon);
    router.refresh();
  };
  const handleWishlistClick = () => {
    isAuthenticated ? router.push("/wishlist") : setOpenAuthModal(true);
  };

  return (
    <header className={`header-tools header-style ${themeOption?.header?.sticky_header_enable && UpScroll ? "sticky fixed" : ""}`}>
      <div className="logo-menu-part">
        <Container className="border-bottom-0">
          <Row>
            <Col sm="12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="toggle-nav" onClick={() => setMobileSideBar(!mobileSideBar)}>
                    <RiMenuLine className="sidebar-bar" />
                  </div>
                  <div className="brand-logo">
                    <HeaderLogo />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div className="main-navbar">
                    <div id="mainnav">
                      <div className="header-nav-middle">
                        <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                          <div className={`offcanvas offcanvas-collapse order-xl-2 ${mobileSideBar ? "show" : ""} `}>
                            <div className="offcanvas-header navbar-shadow">
                              <h5>{t("Menu")}</h5>
                              <Button close className="lead" id="toggle_menu_btn" type="button" onClick={() => setMobileSideBar(false)}>
                                <div>
                                  <i className="ri-close-fill"></i>
                                </div>
                              </Button>
                            </div>
                            <div className="offcanvas-body">
                              <MainHeaderMenu />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div">
                          <Link href={isAuthenticated ? '/wishlist' : Href} onClick={handleWishlistClick}>
                            <RiHeartLine />
                          </Link>
                        </li>
                        <li className="onhover-div">
                      <Link href={isAuthenticated ? "/account/dashboard" : Href} onClick={handleProfileClick}>
                        <RiUserLine />
                      </Link>
                    </li>
                        <li className="onhover-div">
                          <HeaderSearchbar />
                        </li>
                        <li className="onhover-div">
                          <RiEqualizer2Line />

                          <div className="show-div setting">
                            <h6>{t("Language")}</h6>
                            <ul>
                              {language.map((elem, i) => (
                                <li>
                                  <a onClick={() => handleChangeLang(elem)} key={i}>
                                    {elem?.image && <div className={`iti-flag ${elem?.image}`} />}
                                    {elem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <h6>{t("Currency")}</h6>
                            <ul className="list-inline">
                              {currencyState?.map((elem, i) => (
                                <li id={elem.title} key={i} className={activeCurr == elem.title ? "active" : ""} onClick={() => handleClick(elem)}>
                                  <a href={Href}>
                                    {elem?.symbol} {elem?.code}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                        <li className="onhover-div">
                          <HeaderCart />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeaderSeven;
