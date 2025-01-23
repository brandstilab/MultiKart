import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";

const StoreProduct = ({ elem }) => {
  return (
    <ul className="product-image">
      {elem?.product_images?.slice(0, 3)?.map((data, i) => (
        <li key={i}>
          <Image className="img-fluid" src={data || `${ImagePath}/placeholder.png`} height={32} width={32} alt="Store" />{" "}
        </li>
      ))}
      {elem?.products_count > 3 ? <li>+{elem?.products_count - 3}</li> : null}
    </ul>
  );
};

export default StoreProduct;
