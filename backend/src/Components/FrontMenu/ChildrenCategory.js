import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react'
import FileUploadField from '../InputFields/FileUploadField'
import SearchableSelectInput from '../InputFields/SearchableSelectInput'
import request from "@/Utils/AxiosUtils";
import { blog, product } from "@/Utils/AxiosUtils/API";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import MultiSelectField from "../InputFields/MultiSelectField";
import { useRouter } from "next/navigation";

const ChildrenCategory = ({values, setFieldValue}) => {
  const [search, setSearch] = useState(false);
    const [customSearch, setCustomSearch] = useState("");
    const [tc, setTc] = useState(null);
   const router = useRouter()   

    const { data, isLoading,refetch:blogRefetch } = useQuery([blog], () => request({ url: blog },router), {
      refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem?.id, name: elem.title } })
  });

  const { data: productData, isLoading: productLoader, refetch } = useQuery([product], () => request({
    url: product, params:
    {
        status: 1,
        search: customSearch ? customSearch : '',
        paginate: 15,
        is_approved:1,
        with_union_products: 0
    }
},router), {
    refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || "/assets/images/placeholder.png", slug: elem?.slug } })
});

useEffect(() => {
  if (values["mega_menu_type"] === "product_box") {
    refetch();
  }
  if(values["mega_menu_type"] === "blog_box"){
    blogRefetch()
  }
}, [values["mega_menu_type"]]); // Include only the specific property that triggers the refetch


    // Added debouncing
    useEffect(() => {
      if (tc) clearTimeout(tc);
      setTc(setTimeout(() => setCustomSearch(search), 500));
    }, [search]);
  return (
    <>
    {(values["mega_menu_type"] === "side_banner" || values["mega_menu_type"] === "bottom_banner") && <FileUploadField name="banner_image_id" title='Image' id="banner_image_id" showImage={values['banner_image_id']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1859x550px')} /> }
    {values["mega_menu_type"] === "product_box" &&  <SearchableSelectInput
                    nameList={
                        [{
                            name: "product_ids",
                            title: "Products",
                            inputprops: {
                                name: "product_ids",
                                id: "product_ids",
                                options: productData || [],
                                setsearch: setSearch,
                            }
                        },
                        ]}
                />}
{values["mega_menu_type"] === "blog_box" && <MultiSelectField values={values} setFieldValue={setFieldValue} name='blog_ids' title="Blogs" data={data} /> }

    </>
  )
}

export default ChildrenCategory