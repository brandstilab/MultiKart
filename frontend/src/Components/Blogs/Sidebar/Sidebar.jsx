import SKBlogSidebar from "@/Components/Widgets/SkeletonLoader/BlogSkeleton/SKBlogSidebar";
import CategoryContext from "@/Context/CategoryContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useSearchParams } from "next/navigation";
import React, { useContext, useState } from "react";
import { Col } from "reactstrap";
import Category from "./Category";
import RecentPost from "./RecentPost";
import Tags from "./Tags";

const Sidebar = ({ isLoading }) => {
  const [open, setOpen] = useState("1");
  const searchParams = useSearchParams();
  const { categoryIsLoading } = useContext(CategoryContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const querySidebar = searchParams.get("sidebar");
  const styleObj = {
    no_sidebar: { class: "d-none" },
    right_sidebar: { class: "order-lg-2" },
  };
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Col xxl={3} lg={4} className={styleObj[querySidebar ?? themeOption?.blog?.blog_sidebar_type]?.class || ""}>
      <div className="blog-sidebar">
        {isLoading ? (
          <SKBlogSidebar />
        ) : (
          <>
            <RecentPost />
            <Category />
            <Tags />
          </>
        )}
      </div>
    </Col>
  );
};

export default Sidebar;
