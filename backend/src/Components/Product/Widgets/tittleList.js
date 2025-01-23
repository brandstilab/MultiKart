import { ProductTabTitleListData } from "@/Data/TabTitleListData";

export const generateTitleList = (values) => {
  const filteredTabs = ProductTabTitleListData.filter((tab) => {
    if (values.product_type == "physical" &&tab.title !== "Digital Product" &&tab.title !== "Variations") {
      return tab;
    } else if ( values.product_type == "digital" && tab.title !== "Variations" && tab.title !== "Shipping") {
      return tab;
    }
    if (values.product_type == "external" &&tab.title !== "Variations" &&tab.title !== "Shipping" &&tab.title !== "Digital Product") {
      return tab;
    }
    if (values.type !== "simple" && tab.title == "Variations") {
      return tab;
    }
  });

  return filteredTabs;
};
