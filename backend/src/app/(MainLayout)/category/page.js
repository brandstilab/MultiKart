"use client";
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";
import CategoryForm from "@/Components/category/CategoryForm";
import TreeForm from "@/Components/category/TreeForm";
import { Category, CategoryExportAPI, CategoryImportAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiLockLine } from "react-icons/ri";
import { Card, CardBody, Col, Row } from "reactstrap";

const CategoryCreate = () => {
  const { t } = useTranslation( 'common');
  const [create] = usePermissionCheck(["create"]);
  const refRefetch = useRef()
  const[resetData, setResetData] = useState(false)
  const { mutate, isLoading } = useCreate(Category, false, false, false, (resDta) => {
    if (resDta?.status == 200 || resDta?.status == 201) {
      refRefetch?.current?.call()
      setResetData(true)
    }
  });
  return (  
    <>
      <div className="card-spacing">
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <TittleWithDropDown moduleName="Category" type={'product'}  importExport={{ importUrl: CategoryImportAPI, exportUrl: CategoryExportAPI , sampleFile:"categories.csv"}} />
                <TreeForm type={"product"} isLoading={isLoading} ref={refRefetch} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card className={create ? "" : "nopermission-parent"}>
              <CardBody>
                <div className="title-header option-title">
                  <h5>{t("AddCategory")}</h5>
                </div>
                <CategoryForm loading={isLoading} mutate={mutate} key={resetData} setResetData={setResetData} type={"product"} />
              </CardBody>
              <div className="no-permission"><div><RiLockLine /><h3>{t("NoPermission")}</h3></div></div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CategoryCreate;
