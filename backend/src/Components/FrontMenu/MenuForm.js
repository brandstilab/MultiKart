
import MenuContext from "@/Helper/MenuContext";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useContext, useEffect, useMemo } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import {YupObject,linkTypeSchema,nameSchema,} from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";
import BadgeColor from "./BadgeColor";
import ChildrenCategory from "./ChildrenCategory";
import FrontMenuRadio from "./FrontMenuRadio";
import { PagesAPI } from "@/Utils/AxiosUtils/API";
import MenuPath from "./MenuPath";
import { useRouter } from "next/navigation";

const MenuForm = ({ updateId, loading }) => {
  
  const { t } = useTranslation("common");
  const { menuState } = useContext(MenuContext);
  const router = useRouter()   
  const {data: oldData,isLoading,refetch,} = useQuery(["menu/" + updateId],() => request({ url: `menu/${updateId}` }),{ enabled: false });
  const { data ,refetch:pageRefetch,isLoading:pageLoading } = useQuery([PagesAPI], () => request({ url: PagesAPI },router), {enabled:false, refetchOnWindowFocus: false,select: (res) =>res?.data?.data?.map((elem) => {return { id: elem?.slug, name: elem?.title,slug:elem.slug };}),});
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  useEffect(() => {
    pageRefetch()
  }, [pageLoading]);
  const updatedData = useMemo(() => {
    return menuState;
  }, [menuState]);
  if (updateId && isLoading) return <Loader />;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: updateId ? oldData?.data?.title : "",
        path: updateId ? oldData?.data?.path : "",
        link_type: updateId ? oldData?.data?.link_type : "sub",
        parent_id: updateId ? oldData?.data?.parent_id : null,
        mega_menu: updateId ? Boolean(Number(oldData?.data?.mega_menu)) : true,
        is_target_blank: updateId? Boolean(Number(oldData?.data?.is_target_blank)): false,
        mega_menu_type: updateId ? oldData?.data?.mega_menu_type : "simple",
        set_page_link: updateId ? oldData?.data?.set_page_link : "",
        badge_text: updateId ? oldData?.data?.badge_text : "",
        badge_color: updateId ? oldData?.data?.badge_color : "bg-danger",
        banner_image_id: updateId ? oldData?.data?.banner_image_id : null,
        item_image_id: updateId ? oldData?.data?.item_image_id : null,
        product_ids: updateId ? oldData?.data?.product_ids : [],
        blog_ids: updateId ? oldData?.data?.blog_ids : [],
        banner_image: updateId? { original_url: oldData?.banner_image?.image_url }: "",
      }}
      validationSchema={YupObject({
        title: nameSchema,
        path:linkTypeSchema
      })}
      onSubmit={(values, helpers) => {
        if (values["banner_image"]) {
          if (typeof values["banner_image"] === 'object') {
              values["banner_image"]["image_url"] = values["banner_image"].original_url || "";
          } else {
              values["banner_image"] = { image_url: "" };
          }
      } else {
          values["banner_image"] = { image_url: "" };
      }
   
        values["mega_menu"] = Number(values["mega_menu"]);
        values["is_target_blank"] = Number(values["is_target_blank"]);
        if (values["banner_image_id"]) {
          delete values["banner_image"];
        }
        if (values["item_image_id"]) {
          delete values["item_image"];
        }
        // Put your logic here
      }}
    >
      {({ setFieldValue, values, errors }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField nameList={[{ name: "title", title: "title", placeholder: t("EnterMenuTitle"), require: "true",},]}/>
            <SearchableSelectInput nameList={[{ name: "link_type",title: "LinkType",inputprops: {name: "link_type", id: "link_type",options: [{ id: "sub", name: "sub" },{ id: "link", name: "Link" },],defaultOption: "sub",},},]}/>
            {values["link_type"] == "link" && ( <CheckBoxField name="is_target_blank" />)}
            {values["link_type"] == "link" && ( <SearchableSelectInput nameList={[{name: "set_page_link",inputprops: { name: "set_page_link", id: "set_page_link", options: data, close: true,},},]}/>)}
            <MenuPath setFieldValue={setFieldValue} values={values}  />

            <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="parent_id" title={"SelectParent"} data={updatedData} />

            {!values["parent_id"] && <CheckBoxField name="mega_menu" />}
            {!values["parent_id"] && values["mega_menu"] && (<FrontMenuRadio values={values} setFieldValue={setFieldValue} />)}
            {!values["parent_id"] &&
              values["mega_menu"] &&
              (values["mega_menu_type"] === "side_banner" || values["mega_menu_type"] === "bottom_banner" || values["mega_menu_type"] === "product_box" || values["mega_menu_type"] === "blog_box") && ( <ChildrenCategory values={values} setFieldValue={setFieldValue}/>)}

            {updatedData?.find((data) => data.id == values["parent_id"])
              ?.mega_menu_type == "link_with_image" &&
              values["parent_id"] && (
                <FileUploadField name="item_image_id" title="link_image" id="item_image_id" showImage={values["item_image_id"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1859x550px")} />
              )}
            <SimpleInputField
              nameList={[
                { name: "badge_text", title: "BadgeText", placeholder: t("enter_badge_text"),},
              ]}
            />
            <BadgeColor values={values} setFieldValue={setFieldValue} />

            <FormBtn loading={loading} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};
export default MenuForm;
