import axios from "axios";
import https from "https";

import ProductDetailContent from "@/Components/ProductDetails";
export async function generateMetadata({ params }) {
  const productData = await axios
    .get(`${process.env.API_PROD_URL}/product/slug/${params?.productSlug}`, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
    .then((res) => res?.data)
    .catch((err) => {
      return err;
    });

  return {
    title: productData?.meta_title,
    description: productData?.meta_description,
    images: [productData?.product_meta_image?.original_url, []],
    openGraph: {},
  };
}

const ProductDetails = ({ params }) => {
  return <ProductDetailContent params={params?.productSlug} />;
};

export default ProductDetails;
