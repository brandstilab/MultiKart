import { useTranslation } from "react-i18next";

const TitleDetails = ({ params, data }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="title-header mb-3">
        <div className="d-flex align-items-center flex-wrap gap-2">
          <h5>
            <i className="ri-arrow-left-line"></i>
            {`${t("OrderNumber")}: #${params}`}
          </h5>
        </div>
      </div>
    </>
  );
};

export default TitleDetails;
