import { Href } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";
import { Breadcrumb, Container } from "reactstrap";

const Breadcrumbs = ({ mainHeading, subNavigation, subTitle, title }) => {
  const { t } = useTranslation("common");
  return (
    <div className="breadcrumb-section">
      <Container>
        <h2>{t(title?.replaceAll("-", " "))}</h2>
        <nav className="theme-breadcrumb">
          <Breadcrumb>
            <div className="breadcrumb-item active">
              <a href={Href}> {t("Home")} </a>
            </div>
            {subNavigation?.map((result, i) => (
              <div key={i} className="breadcrumb-item active ">
                <a href={Href}> {t(result?.name?.replaceAll("-", " "))} </a>
              </div>
            ))}
          </Breadcrumb>
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
