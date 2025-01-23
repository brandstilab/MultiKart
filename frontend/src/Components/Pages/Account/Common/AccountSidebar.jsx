import NavTabTitles from "@/Components/Widgets/NavTabs";
import AccountContext from "@/Context/AccountContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { sidebarMenu } from "@/Data/Pages/Account";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Col } from "reactstrap";
import SidebarProfile from ".";

const AccountSidebar = ({ tabActive }) => {
  const [activeTab, setActiveTab] = useState({ id: tabActive });
  const { mobileSideBar, setMobileSideBar } = useContext(AccountContext);
  const handelCallback = () => {
    setMobileSideBar(!mobileSideBar);
  };
  const { t } = useTranslation("common");
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return (
    <Col lg={3}>
      <div className={`dashboard-sidebar ${mobileSideBar ? "open" : ""}`}>
        <Btn color="transparent" className="back-btn" onClick={handelCallback}>
          <RiCloseLine />
          <span>{t("Close")}</span>
        </Btn>
        <SidebarProfile />
        <div className="faq-tab">
          <NavTabTitles classes={{ navClass: "nav nav-tabs" }} setActiveTab={setActiveTab} activeTab={activeTab} titleList={sidebarMenu} isLogout callBackFun={handelCallback} />
        </div>
      </div>
    </Col>
  );
};

export default AccountSidebar;
