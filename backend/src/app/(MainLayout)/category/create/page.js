"use client"
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";
import TableTitle from "@/Components/Table/TableTitle";
import CategoryForm from "@/Components/category/CategoryForm";
import TreeForm from "@/Components/category/TreeForm";
import request from "@/Utils/AxiosUtils";
import { Category, CategoryExportAPI, CategoryImportAPI } from "@/Utils/AxiosUtils/API";
import SuccessHandle from "@/Utils/CustomFunctions/SuccessHandle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const CategoryCreate = () => {
  const { t } = useTranslation( 'common');
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isLoading } = useMutation((data) => request({ url: Category, data, method: "post" },router), {
    onSuccess: (resData) => {
      SuccessHandle(resData, router, `/category/create`, t("CategoryCreatedSuccessfully"));
      queryClient.invalidateQueries({ queryKey: [`/category/create`] });
    },
  });
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TittleWithDropDown  moduleName="Category"   importExport={{ importUrl: CategoryImportAPI, exportUrl: CategoryExportAPI}} />
              <TreeForm type={"product"} isLoading={isLoading} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("AddCategory")}</h5>
              </div>
              <CategoryForm loading={isLoading} mutate={mutate} type={"product"} buttonName="Save" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CategoryCreate;

