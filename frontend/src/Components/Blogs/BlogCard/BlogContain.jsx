import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { formatDateForDateRange, showMonthWiseDate } from "@/Utils/CustomFunctions/DateFormate";
import TextLimit from "@/Utils/CustomFunctions/TextLimit";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowRightLine, RiTimeLine, RiUserLine } from "react-icons/ri";

const BlogContain = ({ blog }) => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);
  const router = useRouter();
  return (
    <div className="blog-contain">
      <Link href={`/blogs/${blog.slug}`}>
        <h3>{blog?.title}</h3>
      </Link>
      <div className="blog-label">
        <span className="time">
          <RiTimeLine />
          {showMonthWiseDate(blog?.created_at)}
        </span>
        {themeOption?.blog?.blog_author_enable && (
          <span className="super">
            <RiUserLine /> {blog?.created_by?.name}
          </span>
        )}
      </div>
      <TextLimit value={blog?.description} maxLength={200} tag="p" />
      {themeOption?.blog?.read_more_enable && (
        <a className="blog-button" onClick={() => router.push(`/blogs/${blog.slug}`)}>
          {t("ReadMore")} <RiArrowRightLine />
        </a>
      )}
    </div>
  );
};

export default BlogContain;
