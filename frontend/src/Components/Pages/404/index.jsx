import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const NotFoundPage = ({ params }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const router = useRouter();
  return (
    <>
      <Breadcrumbs title={"404"} subNavigation={[{ name: "404 Page", link: "/blogs" }]} />
      <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "container", colClass: "col-sm-12" }}>
        <div className="error-section">
          <h1>404</h1>
          <h2>{themeOption?.error_page?.error_page_content}</h2>
          <Btn className="btn-solid" onClick={() => router.push("/")} id="back_button">
            {themeOption?.error_page?.back_button_text}
          </Btn>
        </div>
      </WrapperComponent>
    </>
  );
};

export default NotFoundPage;
