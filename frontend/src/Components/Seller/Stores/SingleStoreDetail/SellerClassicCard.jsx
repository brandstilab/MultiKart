import Link from "next/link";
import SellerSocialCard from "./SellerSocialCard";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { Href } from "@/Utils/Constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RiMailLine, RiSmartphoneLine } from "react-icons/ri";
import SellerRatingBox from "../SellerRatingBox";

const SellerClassicCard = ({ StoreData }) => {
  const { t } = useTranslation("common");
  return (
    <WrapperComponent classes={{ sectionClass: StoreData?.store_cover ? "vendor-profile pt-0" : "vendor-profile mt-0 section-t-space", fluidClass: "container", col: "col-lg-12" }}>
      <div className="profile-left">
        <div className="profile-image">
          <div>
            <Link href={Href}>{StoreData?.store_logo?.original_url ? <Image src={StoreData?.store_logo?.original_url} height={500} width={500} className="img-fluid" alt="store-img" /> : <h1>{StoreData?.store_name?.toString().charAt(0).toUpperCase()}</h1>}</Link>
            <h3>{StoreData?.store_name}</h3>
            <div className="rating">
              <SellerRatingBox ratingCount={StoreData?.rating_count} />
              <h6>{`(${StoreData?.reviews_count} Review)`}</h6>
            </div>
          </div>
        </div>
        <div className="profile-detail">
          <div>
            <p>{StoreData?.description}</p>
          </div>
        </div>

        <div className="vendor-contact">
          <div>
            <SellerSocialCard StoreData={StoreData} />
            <h6>If you have any query:</h6>
            <ul className="vendor-details">
              <li>
                <RiSmartphoneLine />
                <h5>
                  +{StoreData?.vendor?.country_code}
                  {StoreData?.vendor?.phone}
                </h5>
              </li>
              <li>
                <RiMailLine />
                <h5>
                  <a href={Href}>{StoreData?.vendor?.email}</a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default SellerClassicCard;
