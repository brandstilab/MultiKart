import AccountContext from "@/Helper/AccountContext";
import SettingContext from "@/Helper/SettingContext";
import { useContext } from "react";
import { Col, Row } from "reactstrap";

const MultipleFilter = ({ showAdvanceFilter, advanceFilter }) => {
  const { accountData } = useContext(AccountContext);
  const { settingObj } = useContext(SettingContext);
  return (
    <>
      <div className="show-box mb-4 d-block product-category-option filter-option-list">
        <Row className="gy-3">
          {accountData?.role?.name !== "vendor" && settingObj?.activation?.multivendor ? <Col xl={3} sm={6}>{advanceFilter?.store_ids}</Col> : null}
          <Col xl={accountData?.role?.name === "vendor" ? 4 : 2} sm={6}>{advanceFilter?.productType}</Col>
          <Col xl={4} sm={6}>{advanceFilter?.category_ids}</Col>
          <Col xl={accountData?.role?.name === "vendor" ? 4 : 3} sm={6}>{advanceFilter?.brand}</Col>
        </Row>
      </div>
    </>
  );
};

export default MultipleFilter;
