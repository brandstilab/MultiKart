import Image from "next/image";
import { useTranslation } from "react-i18next";

const NoDataFound = ({customClass,imageUrl,height, width, title, description}) => {
  const { t } = useTranslation("common");
  
  return (
    <div className={customClass ? customClass : ""}>
      {imageUrl && <Image src={imageUrl} className="img-fluid" alt="no-data" height={height} width={width} />}
      <h4>{t(title)}</h4>
      <p>{t(description)}</p>
    </div>
  );
};

export default NoDataFound;
