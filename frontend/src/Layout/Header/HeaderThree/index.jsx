import CategoryContext from "@/Context/CategoryContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { useHeaderScroll } from "@/Utils/Hooks/HeaderScroll";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiHeartLine, RiMenuLine, RiUserLine } from "react-icons/ri";
import { Button, Col, Container, Row } from "reactstrap";
import HeaderCart from "../Widgets/HeaderCart";
import HeaderLogo from "../Widgets/HeaderLogo";
import HeaderSearchbar from "../Widgets/HeaderSearchbar";
import MainHeaderMenu from "../Widgets/MainHeaderMenu";
import TopBar from "../Widgets/TopBar";
import Link from "next/link";

const HeaderThree = () => {
  const { themeOption, setMobileSideBar, mobileSideBar, setOpenAuthModal } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const { categoryAPIData } = useContext(CategoryContext);
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const router = useRouter();
  const isAuthenticated = Cookies.get("uat");
  const handleProfileClick = (path) => {
    isAuthenticated ? router.push("/account/dashboard") : setOpenAuthModal(true);
  };
  const UpScroll = useHeaderScroll(false);

  const filterCategoryData = (categoryData, categoryIds) => {
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
      }
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          filterCategory(subcategory);
        });
        return;
      }
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const mainCategories = filterCategoryData(categoryAPIData?.data, themeOption?.header?.category_ids);

  const handleWishlistClick = () => {
    isAuthenticated ? router.push("/wishlist") : setOpenAuthModal(true);
  };
  return (
    <header className={`header-style-1 ${themeOption?.header?.sticky_header_enable && UpScroll ? "sticky fixed" : ""}`}>
      {themeOption?.header?.page_top_bar_enable && <TopBar />}
      <div className="bg-light-xl">
        <Container>
          <Row>
            <Col sm="12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="toggle-nav" onClick={() => setMobileSideBar(!mobileSideBar)}>
                    <RiMenuLine className="sidebar-bar" />
                  </div>
                  <div className="brand-logo me-lg-4 me-0">
                    <HeaderLogo />
                  </div>
                  <nav className="navbar navbar-expand-sm navbar-light pe-0 d-none d-lg-block">
                    <button className="navbar-toggler" type="button">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav category-nav me-auto pt-0">
                        {mainCategories?.map((category) => (
                          <li key={category.id} className={`nav-item ${activeCategory == category.name ? "active" : ""}`} onClick={() => setActiveCategory(category.name)}>
                            <a className="nav-link" href={Href}>
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div">
                          <HeaderSearchbar />
                        </li>
                        <li className="onhover-div">
                          <Link href={isAuthenticated ? "/wishlist" : Href} onClick={handleWishlistClick}>
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
      </div>
      <div className="border-top-cls">
        <Container>
          <ul className="sm pixelstrap sm-horizontal">
            <div className="classic-header main-navbar">
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
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default HeaderThree;
