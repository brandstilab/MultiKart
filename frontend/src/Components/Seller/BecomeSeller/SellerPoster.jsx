import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";
import { Col } from "reactstrap";

const SellerPoster = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <WrapperComponent classes={{ sectionClass: "about-page section-b-space", fluidClass: "container" }} customCol={true}>
      <Col lg={12}>
        <div className="banner-section">{themeOption?.seller?.about?.image_url && <Image src={storageURL + themeOption?.seller?.about?.image_url} height={386} width={1376} alt={themeOption?.seller?.about?.title || "Seller"} className="w-100" />}</div>
      </Col>
      <Col sm={12}>
        <h4>{themeOption?.seller?.about?.title?.toLowerCase()}</h4>
        <p>{themeOption?.seller?.about?.description}</p>
      </Col>
    </WrapperComponent>
  );
};

export default SellerPoster;
