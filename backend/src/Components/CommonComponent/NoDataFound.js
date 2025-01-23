import { useTranslation } from "react-i18next";
import NoMediaImage from '../../../public/assets/svg/no-media.png';

const NoDataFound = ({ title, noImage, customImage }) => {

    const { t } = useTranslation("common");
    return (
        <div className="no-data-added w-100">
            {!noImage && <img className="img-fluid" src={customImage ? customImage : "/assets/svg/no-media.png"} alt="" />}
            <h4>{title ? t(title) : t("NoDataFound")}</h4>
        </div>
    )
}

export default NoDataFound