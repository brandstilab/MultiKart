import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { Col } from "reactstrap";

const SellerServiceBox = ({ data }) => {
  return (
    <Col lg={3} md={6}>
      <div className="service-block1">
        <div className="service-svg">
          {data?.image_url && <Image src={storageURL + data?.image_url} height={60} width={60} alt={data?.title || "Seller"} />}
        </div>
        <h4>{data?.title}</h4>
        <p>{data?.description}</p>
      </div>
    </Col>
  );
};

export default SellerServiceBox;
