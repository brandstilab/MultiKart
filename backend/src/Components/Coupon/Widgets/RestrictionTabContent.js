import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import request from "../../../Utils/AxiosUtils";
import { product } from "../../../Utils/AxiosUtils/API";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import ExcludeProducts from "./ExcludeProducts";
import IncludeProducts from "./IncludeProducts";
const RestrictionTabContent = ({ values, setFieldValue, errors }) => {
  const [customSearch, setCustomSearch] = useState("");
  const [tc, setTc] = useState(null);
  const [search, setSearch] = useState(false);
  const router = useRouter()   

  const { t } = useTranslation("common");
  const { data: productList, refetch,isLoading } = useQuery([product,+customSearch?customSearch:null],() =>request({url: product,params: {status: 1,is_approved: 1,paginate: 15,search: customSearch ? customSearch : null,},},router),{ enabled:false,refetchOnWindowFocus: false,select: (data) =>data.data.data.map((elem) => ({ id: elem.id, name: elem.name,image: elem?.product_thumbnail?.original_url || "/assets/images/placeholder.png", })),});
  // Added debouncing
  useEffect(() => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setCustomSearch(search), 500));
  }, [search]);
  useEffect(() => {
    !isLoading && customSearch !== undefined && refetch();
  }, [customSearch]);
  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);
  return (
    <>
      <CheckBoxField name="is_apply_all" title="ApplyToAllProducts" />
      {values["is_apply_all"] ? <ExcludeProducts productList={productList} setSearch={setSearch}/>:<IncludeProducts productList={productList} setSearch={setSearch}/>}     
      <SimpleInputField
        nameList={[
          {
            name: "min_spend",
            type: "number",
            placeholder: t("EnterMinimumSpend"),
            inputaddon: "true",
            title: "MinimumSpend",
            require: "true",
            helpertext:"*Define the minimum order value needed to utilize the coupon.",
          },
        ]}
      />
    </>
  );
};

export default RestrictionTabContent;
