"use client";
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";
import FrontMenuForm from "@/Components/FrontMenu/FrontMenuForm";
import MenuForm from "@/Components/FrontMenu/MenuForm";
import { Menu } from "@/Utils/AxiosUtils/API";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useTranslation } from "react-i18next";
import { RiLockLine } from "react-icons/ri";
import { Card, CardBody, Col, Row } from "reactstrap";

const FrontMenuCreate = ({ params }) => {
  const { t } = useTranslation("common");
  const [edit] = usePermissionCheck(["edit"]);
  const { mutate, isLoading } = useUpdate(Menu,params?.updateId,`/menu`,"Menu updated successfully");
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TittleWithDropDown pathName="/menu"    moduleName="Menu"    />
              <FrontMenuForm isLoading={isLoading} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("EditMenu")}</h5>
              </div>
              <MenuForm
                updateId={params?.updateId}
                loading={isLoading}
                mutate={mutate}
              />
            </CardBody>
            <div className="no-permission">
              <div>
                <RiLockLine />
                <h3>{t("NoPermission")}</h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FrontMenuCreate;
