import { useTranslation } from "react-i18next";
import { BiCheckShield, BiError } from "react-icons/bi";

const ShowBox = ({ showBoxMessage }) => {
  const { t } = useTranslation("common");
  if (!showBoxMessage) return null;
  return (
    <div className={showBoxMessage ? "error-box" : "success-box"}>
      {showBoxMessage ? <BiError /> : <BiCheckShield />}
      <div>
        <h4>{showBoxMessage ? t("ThereWasAProblem") : t("Success")} </h4>
        <p>{t(showBoxMessage)}</p>
      </div>
    </div>
  );
};

export default ShowBox;
