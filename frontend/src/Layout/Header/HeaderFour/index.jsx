import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useHeaderScroll } from "@/Utils/Hooks/HeaderScroll";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiHeartLine, RiMenuLine, RiUserLine } from "react-icons/ri";
import { Button, Col, Container, Row } from "reactstrap";
import HeaderCart from "../Widgets/HeaderCart";
import HeaderLogo from "../Widgets/HeaderLogo";
import HeaderSearchbar from "../Widgets/HeaderSearchbar";
import MainHeaderMenu from "../Widgets/MainHeaderMenu";
import TopBar from "../Widgets/TopBar";
import { Href } from "@/Utils/Constants";

const HeaderFour = () => {
  const { t } = useTranslation("common");
  const { themeOption, mobileSideBar, setMobileSideBar, setOpenAuthModal } = useContext(ThemeOptionContext);
  const router = useRouter();
  const isAuthenticated = Cookies.get("uat");
  const handleProfileClick = (path) => {
    isAuthenticated ? router.push("/account/dashboard") : setOpenAuthModal(true);
  };
  const handleWishlistClick = () => {
    isAuthenticated ? router.push("/wishlist") : setOpenAuthModal(true);
  };
  const UpScroll = useHeaderScroll(false);

  return (
    <header className={`header-5 overlay-style ${themeOption?.header?.sticky_header_enable && UpScroll ? "sticky fixed" : ""}`}>
      {themeOption?.header?.page_top_bar_enable && <TopBar />}
      <Container>
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
                        <HeaderSearchbar />
                      </li>
                      <li className="onhover-div">
                      <Link href={isAuthenticated? '/wishlist': Href} onClick={handleWishlistClick}>
                        <RiHeartLine />
                      </Link>
                      </li>
                      <li className="onhover-div">
                        <HeaderCart />
                      </li>
                      <li className="onhover-div">
                      <Link href={isAuthenticated ? "/account/dashboard" : Href} onClick={handleProfileClick}>
                        <RiUserLine />
                      </Link>
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderFour;
