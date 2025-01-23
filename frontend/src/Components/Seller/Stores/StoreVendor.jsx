import { useTranslation } from "react-i18next";
import { RiMailLine, RiSmartphoneLine } from "react-icons/ri";

const StoreVendor = ({ elem }) => {
  const { t } = useTranslation("common");
  return (
    <div className="seller-contact-details">
      {!(elem?.hide_vendor_email || elem?.hide_vendor_phone) && (
        <ul>
          {!elem?.hide_vendor_phone && (
            <li>
              <RiSmartphoneLine />
              <h5>
                +{elem?.country?.calling_code} {elem?.vendor?.phone}
              </h5>
            </li>
          )}
          {!elem?.hide_vendor_email && (
            <li>
              <RiMailLine />
              <h5>{elem?.vendor?.email}</h5>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default StoreVendor;
