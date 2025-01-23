import CategoryContext from "@/Context/CategoryContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { useHeaderScroll } from "@/Utils/Hooks/HeaderScroll";
import Cookies from "js-cookie";
import Link from "next/link";
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

const HeaderSix = () => {
  const { themeOption, setOpenAuthModal, mobileSideBar, setMobileSideBar } = useContext(ThemeOptionContext);
  const router = useRouter();
  const isAuthenticated = Cookies.get("uat");
  const handleProfileClick = (path) => {
    isAuthenticated ? router.push(path) : setOpenAuthModal(true);
  };
  const handleWishlistClick = () => {
    isAuthenticated ? router.push("/wishlist") : setOpenAuthModal(true);
  };
  const { t } = useTranslation("common");
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const [openDropdown, setOpenDropdown] = useState(false);
  const UpScroll = useHeaderScroll(false);

  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory("product");

  const filterCategoryData = (categoryData, categoryIds) => {
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
        return;
      }
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          filterCategory(subcategory);
        });
      }
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const categories = filterCategoryData(categoryData, themeOption?.header?.category_ids);

  return (
    <header className={`header-style-5 ${themeOption?.header?.sticky_header_enable && UpScroll ? "sticky fixed" : ""}`}>
      <div className="mobile-fix-option"></div>
      {themeOption?.header?.page_top_bar_enable && <TopBar />}
      <Container>
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
            <div>
              <HeaderSearchbar fullSearch={true} />
            </div>
            <div className="menu-right pull-right">
              <div>
                <div className="icon-nav">
                  <ul>
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
      </Container>
      <div className="bottom-part bottom-light">
        <Container>
          <Row>
            <Col xl="3" className="position-relative">
              <div className="category-menu d-none d-xl-block h-100">
                <div id="toggle-sidebar" className="toggle-sidebar" onClick={() => setOpenDropdown(!openDropdown)}>
                  <RiMenuLine className="sidebar-bar" />
                  <h5 className="mb-0">{t("ShopByCategory")}</h5>
                </div>
              </div>
              <div className="sidenav fixed-sidebar marketplace-sidebar svg-icon-menu" style={{ display: openDropdown ? "block" : "none" }}>
                <nav>
                  <ul>
                    {categories?.map((item, i) => (
                      <li key={i} onClick={() => setActiveCategory(item?.name)}>
                        <Link href={`/category/${item?.slug}`}>{item?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Col>
            <Col xxl="6" xl="9" className=" position-unset">
              <div className="main-nav-center main-navbar text-start">
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
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeaderSix;
