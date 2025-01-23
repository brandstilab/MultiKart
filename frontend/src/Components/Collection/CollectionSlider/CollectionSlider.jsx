import Avatar from "@/Components/Widgets/Avatar";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import CategoryContext from "@/Context/CategoryContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { CollectionCategorySlider } from "@/Data/SliderSetting";
import { Href } from "@/Utils/Constants";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const CollectionSlider = ({ filter, setFilter }) => {
  const [attribute, price, rating, sortBy, field, layout] = useCustomSearchParams(["attribute", "price", "rating", "sortBy", "field", "layout"]);
  const { filterCategory } = useContext(CategoryContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const categoryData = filterCategory("product");
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const router = useRouter();
  const redirectToCollection = (slug) => {
    let temp = [...filter?.category];
    if (!temp.includes(slug)) {
      temp.push(slug);
    } else {
      temp = temp.filter((elem) => elem !== slug);
    }
    setFilter((prev) => {
      return {
        ...prev,
        category: temp,
      };
    });
    if (temp.length > 0) {
      const queryParams = new URLSearchParams({ ...attribute, ...price, ...rating, ...sortBy, ...field, ...layout, category: temp }).toString();
      router.push(`${pathname}?${queryParams}`);
    } else {
      const queryParams = new URLSearchParams({ ...attribute, ...price, ...rating, ...sortBy, ...field, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    }
  };

  return (
    <WrapperComponent classes={{ containerClass: "container-fluid-lg" }} colProps={{ xs: 12 }}>
      {categoryData?.length > 0 ? (
        <div className="product-wrapper no-arrow category-slider">
          <Slider {...CollectionCategorySlider}>
            {categoryData
              // ?.filter((data, i) => themeOption?.collection?.collection_categories_ids?.includes(data?.id))
              ?.map((elem, i) => (
                <div key={i}>
                  <a href={Href} className={`category-box category-dark ${filter?.category?.includes(elem.slug) ? "active" : ""}`} onClick={() => redirectToCollection(elem?.slug)}>
                    <Avatar data={elem?.category_icon} placeHolder={placeHolderImage} name={elem?.name} height={45} width={187} customeClass={"shop-category-image"} />
                    <div className="category-box-name">
                      <h5>{elem?.name}</h5>
                    </div>
                  </a>
                </div>
              ))}
          </Slider>
        </div>
      ) : (
        <NoDataFound customClass="bg-light no-data-added" title="NoCategoryFound" />
      )}
    </WrapperComponent>
  );
};

export default CollectionSlider;
